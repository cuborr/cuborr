# Cuborr Platform
This website is open source and non-profit. If you would like to help with development, feel free to submit a merge request. Otherwise, we would also greatly appreciate a donation. This project was implemented in connection with the 5-Euro-Business at the University of Applied Sciences Kempten
## Cuborr API
Our Flask & Python backend
### Docker Commands
run once <br />
```docker build .```<br />
```docker-compose build```<br />
run in order to start the api <br />
```docker-compose up```<br />

### Deployment Commands (TODO)
make sure you have created a build foder by running "yarn build" in "cd client" first <br />
```docker build . -t cuborr``` <br />
```docker tag cuborr cuborr-webserver:0.0.0.1``` <br />
```docker tag cuborr-webserver:0.0.0.1 192.168.143.147:5000/cuborr-webserver:0.0.0.1``` <br />
```docker push 192.168.143.147:5000/cuborr-webserver:0.0.0.1``` <br />


## Cuborr Client
Our React & TypeScript frontend
### Development
change directory <br />
```cd client``` <br />
run once <br />
```yarn``` <br />
run everytime <br />
```yarn start``` <br />
