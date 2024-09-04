FROM node:20-alpine

# Set the working directory
WORKDIR /app

COPY . .

# Install the dependencies
RUN npm install

# Expose the port the app will run on
EXPOSE ${PORT}

ENTRYPOINT [ "npm" ]

CMD [ "start" ]