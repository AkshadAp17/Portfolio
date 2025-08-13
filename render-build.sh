#!/bin/bash
# Render build script

# Install dependencies
npm install

# Clean dist directory
rm -rf dist

# Build the project
npm run build

echo "Build completed successfully!"