# React Flask Template
## Docker Commands
- run the build command once
- make sure you did run "yarn" in the folder client first
docker-compose build
docker-compose up

## Testing Development
- uncomment in file "docker-compose.test.yml" for debuggin purposes
docker-compose -f docker-compose.test.yml up --build
docker-compose -f docker-compose.test.yml down

## Deployment Commands (TODO)
- make sure you have created a build foder by running "yarn build" in "cd client" first
docker build . -t reactflasktempalte
docker tag reactflasktempalte reactflasktempalte-google-dev:1.0.0.0
docker tag reactflasktempalte-google-dev:1.0.0.0 192.168.143.147:5000/reactflasktempalte-google-dev:1.0.0.0
docker push 192.168.143.147:5000/reactflasktempalte-google-dev:1.0.0.0

