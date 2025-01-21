# Stage 1: Build dependencies
FROM node:14 AS build

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Stage 2: Final image
FROM node:14-slim

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy only production dependencies from the build stage
COPY --from=build /usr/src/app/node_modules ./node_modules

# Copy the application source code (excluding unnecessary files)
COPY . .

# Expose the application port
EXPOSE 3000

# Create and use a non-root user for security
RUN useradd -m appuser && chown -R appuser /usr/src/app
USER appuser

# Command to run the app
CMD ["node", "app.js"]
