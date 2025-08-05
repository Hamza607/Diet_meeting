#!/bin/bash

# Clean installation script for Vercel deployment
echo "Cleaning node_modules and package-lock.json..."
rm -rf node_modules package-lock.json

echo "Installing dependencies with legacy peer deps..."
npm install --legacy-peer-deps

echo "Build test..."
npm run build

echo "Installation complete!" 