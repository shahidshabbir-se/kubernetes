# Use a lightweight base image
FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install --production

# Bundle app source
COPY . .

# Expose port and start app
EXPOSE 3000
CMD [ "node", "server.js" ]
