# Use the official Node.js image.
FROM node:14

# Create and change to the app directory.
WORKDIR /app

# Install global dependencies
RUN npm install -g gulp-cli

# Copy application dependency manifests to the container image.
COPY package*.json ./

# Install production dependencies.
RUN npm install

# Copy local code to the container image.
COPY . .

# Run the build script.
RUN npm run build

# Run the start script.
CMD ["npm", "start"]
