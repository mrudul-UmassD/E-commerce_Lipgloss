#!/bin/bash

# Install dependencies
echo "Installing dependencies..."
npm install

# Create necessary directories
echo "Creating directories..."
mkdir -p public/images
mkdir -p src/app
mkdir -p src/components
mkdir -p src/store
mkdir -p src/types
mkdir -p src/utils
mkdir -p tests/unit
mkdir -p tests/e2e

# Download sample images
echo "Downloading sample images..."
declare -a images=(
    "https://picsum.photos/800/600?random=1"
    "https://picsum.photos/400/400?random=2"
    "https://picsum.photos/400/400?random=3"
    "https://picsum.photos/400/400?random=4"
    "https://picsum.photos/400/400?random=5"
    "https://picsum.photos/400/400?random=6"
    "https://picsum.photos/400/400?random=7"
)

declare -a imageNames=(
    "hero-bg.jpg"
    "product1.jpg"
    "product2.jpg"
    "product3.jpg"
    "product4.jpg"
    "product5.jpg"
    "product6.jpg"
)

for i in "${!images[@]}"; do
    curl -o "public/images/${imageNames[$i]}" "${images[$i]}"
done

# Start the development server
echo "Starting development server..."
npm run dev 