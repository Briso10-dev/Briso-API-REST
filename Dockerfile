FROM node:20-alpine

# Set the working directory in your container
WORKDIR /app

# Copy the source code to that same WD
COPY . .

# Install the dependencies
RUN npm install

# Expose the port the app will run on
# EXPOSE ${PORT}

CMD [ "npm", "start" ]