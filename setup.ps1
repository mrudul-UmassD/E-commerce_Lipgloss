# Install Node.js if not already installed
if (!(Get-Command node -ErrorAction SilentlyContinue)) {
    Write-Host "Installing Node.js..."
    # Download and install Node.js
    $nodeUrl = "https://nodejs.org/dist/v18.19.0/node-v18.19.0-x64.msi"
    $nodeInstaller = "$env:TEMP\node-installer.msi"
    Invoke-WebRequest -Uri $nodeUrl -OutFile $nodeInstaller
    Start-Process msiexec.exe -Wait -ArgumentList '/i', $nodeInstaller, '/quiet', '/norestart'
    Remove-Item $nodeInstaller
}

# Install dependencies
Write-Host "Installing dependencies..."
npm install

# Create necessary directories
Write-Host "Creating directories..."
mkdir -p public/images
mkdir -p src/app
mkdir -p src/components
mkdir -p src/store
mkdir -p src/types
mkdir -p src/utils
mkdir -p tests/unit
mkdir -p tests/e2e

# Download sample images
Write-Host "Downloading sample images..."
$images = @(
    "https://picsum.photos/800/600?random=1",
    "https://picsum.photos/400/400?random=2",
    "https://picsum.photos/400/400?random=3",
    "https://picsum.photos/400/400?random=4",
    "https://picsum.photos/400/400?random=5",
    "https://picsum.photos/400/400?random=6",
    "https://picsum.photos/400/400?random=7"
)

$imageNames = @(
    "hero-bg.jpg",
    "product1.jpg",
    "product2.jpg",
    "product3.jpg",
    "product4.jpg",
    "product5.jpg",
    "product6.jpg"
)

for ($i = 0; $i -lt $images.Length; $i++) {
    Invoke-WebRequest -Uri $images[$i] -OutFile "public/images/$($imageNames[$i])"
}

# Start the development server
Write-Host "Starting development server..."
npm run dev 