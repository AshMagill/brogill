# Getting Started with Create React App

server:
in backend folder

docker build -t brogill-server .

docker container run -p 5000:5000 --rm brogill-server

client:

docker build -t brogill-client .

docker container run -p 3000:3000 --rm brogill-client
