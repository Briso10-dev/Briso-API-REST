FROM node:20-alpine

WORKDIR /app  # Setting the working directory in the container

COPY . ./

RUN npm install

EXPOSE 3000  

CMD ["npm", "start"]  # Runs 'npm start' when the container starts
