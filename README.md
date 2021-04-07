# Cuborr Platform
This website is open source and non-profit. If you would like to help with development, feel free to submit a merge request via GitHub. Otherwise, we would also greatly appreciate a donation. This project was implemented in connection with the 5-Euro-Business at the University of Applied Sciences Kempten
## Cuborr API
Our Flask & Python backend
### Docker Commands
run once_
```docker build .```
```docker-compose build```
run in order to start the api_
```docker-compose up```

### Deployment Commands (TODO)
make sure you have created a build foder by running "yarn build" in "cd client" first_
```docker build . -t cuborr```
```docker tag cuborr cuborr-webserver:0.0.0.1```
```docker tag cuborr-webserver:0.0.0.1 192.168.143.147:5000/cuborr-webserver:0.0.0.1```
```docker push 192.168.143.147:5000/cuborr-webserver:0.0.0.1```


## Cuborr Client
Our React & TypeScript frontend
### Development
change directory_
```cd client```
run once_
```yarn```
run everytime_
```yarn start```
