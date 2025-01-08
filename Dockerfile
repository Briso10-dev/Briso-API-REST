FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Copier les fichier []
COPY . .

# Install the dependencies
RUN npm install

# Expose the port the app will run on
# EXPOSE ${PORT}

CMD [ "npm", "start" ]