# Use an official Node.js runtime as the base image
FROM node 

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install the app dependencies
RUN npm install --force
RUN npm install mathjs --force
RUN npm install ajv 

# Copy the rest of the application code to the container
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Run the app using 'npm start'
CMD ["npm", "start"]