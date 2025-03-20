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
    "https://example.com/images/hero-bg.jpg",
    "https://example.com/images/product1.jpg",
    "https://example.com/images/product2.jpg",
    "https://example.com/images/product3.jpg",
    "https://example.com/images/product4.jpg",
    "https://example.com/images/product5.jpg",
    "https://example.com/images/product6.jpg"
)

foreach ($image in $images) {
    $fileName = $image.Split('/')[-1]
    Invoke-WebRequest -Uri $image -OutFile "public/images/$fileName"
}

# Start the development server
Write-Host "Starting development server..."
npm run dev 