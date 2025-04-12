# Step 1: Build the React app
FROM node:20-alpine AS build-stage

WORKDIR /app

# Set NODE_OPTIONS to use OpenSSL legacy provider
ENV NODE_OPTIONS=--openssl-legacy-provider

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the source code into the container
COPY . .

# Build the app for production
RUN npm run build

# Step 2: Serve the app with a simple HTTP server
FROM nginx:alpine AS production-stage

# Copy the build folder to Nginx's public folder
COPY --from=build-stage /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx to serve the React app
CMD ["nginx", "-g", "daemon off;"]
