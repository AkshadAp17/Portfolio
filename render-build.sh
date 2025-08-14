#!/bin/bash
# Render build script

echo "Starting build process..."

# Install dependencies
npm install

# Clean dist directory
rm -rf dist
mkdir -p dist

# Set NODE_ENV for build
export NODE_ENV=production

# Build the project
echo "Building client and server..."
npm run build

# Verify build output
if [ -d "dist/public" ] && [ -f "dist/index.js" ]; then
    echo "Build completed successfully!"
    echo "Client build: dist/public"
    echo "Server build: dist/index.js"
else
    echo "Build failed - missing output files"
    exit 1
fi