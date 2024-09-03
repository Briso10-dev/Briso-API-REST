FROM node:20-alpine

# Set the working directory
WORKDIR /app

COPY package.json ./

# Install the dependencies
RUN npm install


COPY server.mjs app.mjs .env ./

# Expose the port the app will run on
EXPOSE ${PORT}


ENTRYPOINT [ "npm" ]

CMD [ "start" ]