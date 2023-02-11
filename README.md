# Getting Started with Create React App

server:
in backend folder:
docker build -t brogill-server .
docker container run -p 5000:5000 --rm brogill-server

client:
in frontend folder:
docker build -t brogill-client .
docker container run -p 3000:3000 --rm brogill-client

docker-compose:
in root folder:
docker compose up

logged into ec2 and set up an instance
shh into it
download docker and git
git clone brogill repo
run each container in docker and set the inbound rules

now im getting the frontend to work but not the backend
need to attach my brogill.com to aws service
then need to update the links

for ec2 frontend:
docker container run -d -p 80:3000 --rm brogill-client

for ec2 backend:
docker container run -d -p 5000:5000 --rm brogill-server
