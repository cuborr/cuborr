#!/bin/bash

echo "---------------------------------------------------------------------------------"
echo "test-runner.sh"
echo "---------------------------------------------------------------------------------"


function pruneContainers {
  docker container prune -f || true
  docker image prune -f || true
  docker volume prune -f || true
}

haserror="0"

docker-compose -f docker-compose.test.yml build

res=$?
if [ "$res" -ne "0" ]; then
  haserror="1"
fi

if [ "$haserror" -ne "0" ]; then
  pruneContainers
  exit 1
fi

docker-compose -f docker-compose.test.yml up --remove-orphans --renew-anon-volumes &

#WAIT TO BE STARTED Timeout 60 * 5 (5 Minutes)
x=0
echo 'Waiting for Tester Container to be started....'
container=$(docker ps -f Name=bidashboard_tester_1 -q)
while [[ $container == '' && $x -le 60 ]];
do
  sleep 5
  container=$(docker ps -f Name=bidashboard_tester_1 -q)
  x=$(( $x + 1 ))
done

if [ $container == '' ]; then
  echo 'Container has not been started'
  docker-compose -f docker-compose.test.yml down
  pruneContainers
  exit 1
fi

testcontainerid=${container}

echo '-----------------------------------------------------'
echo 'Container has been started'
echo '-----------------------------------------------------'
echo 'Waiting for Tester Container to finish the tests'
# timeout 360 * 10 = 60 Minutes
container=$(docker ps -f Name=bidashboard_tester_1 -q)

x=0
while [[ $container != '' && $x -le 720 ]];
do
  sleep 10
  container=$(docker ps -f Name=bidashboard_tester_1 -q)
  x=$(( $x + 1 ))
done

if [[ $container == '' ]]; then
  echo '-----------------------------------------------------'
  docker inspect $testcontainerid
  echo '-----------------------------------------------------'
  docker inspect $testcontainerid | grep Code | egrep -o '[0-9]+'
  echo '-----------------------------------------------------'
  exitcode=$( docker inspect $testcontainerid | grep Code | egrep -o '[0-9]+')
  echo '-----------------------------------------------------'
  echo " Test Container '${testcontainerid}' has exited with '${exitcode}'"
  echo '-----------------------------------------------------'
else
  echo '-----------------------------------------------------'
  echo '-----------------------------------------------------'
  echo '!!!!Test Container did not finish within timeout!!!!!'
  echo '-----------------------------------------------------'
  echo '-----------------------------------------------------'
  exitcode=1
fi
docker logs $testcontainerid

docker-compose -f docker-compose.test.yml kill || true

pruneContainers


echo '-----------------------------------------------------'
echo "exit code is '${exitcode}'"
echo '-----------------------------------------------------'

if [[ "$exitcode" -ne "0" ]]; then
  exit 1
fi

exit 0
