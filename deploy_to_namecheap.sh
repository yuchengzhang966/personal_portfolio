#!/bin/bash

# Namecheap SFTP Deployment Script
# Make sure to replace the placeholders with your actual Namecheap hosting details

# Configuration - REPLACE THESE WITH YOUR NAMECHEAP DETAILS
SFTP_HOST="your-domain.com"  # Replace with your domain or Namecheap SFTP host
SFTP_USER="your-username"    # Replace with your hosting username
SFTP_PORT="22"               # Usually 22 for SFTP
PRIVATE_KEY="./id_rsa"       # Path to your private key
REMOTE_DIR="/public_html"    # Usually public_html for web files, check with Namecheap
LOCAL_DIR="./out"            # Local directory with built files

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}🚀 Starting deployment to Namecheap...${NC}"
echo "Host: $SFTP_HOST"
echo "User: $SFTP_USER"
echo "Local files: $LOCAL_DIR"
echo "Remote directory: $REMOTE_DIR"
echo

# Check if private key exists
if [ ! -f "$PRIVATE_KEY" ]; then
    echo -e "${RED}❌ Private key not found: $PRIVATE_KEY${NC}"
    exit 1
fi

# Check if build directory exists
if [ ! -d "$LOCAL_DIR" ]; then
    echo -e "${RED}❌ Build directory not found: $LOCAL_DIR${NC}"
    echo "Run 'npm run build' first"
    exit 1
fi

# Test SFTP connection
echo -e "${YELLOW}🔑 Testing SFTP connection...${NC}"
sftp -i "$PRIVATE_KEY" -P "$SFTP_PORT" -o StrictHostKeyChecking=no "$SFTP_USER@$SFTP_HOST" << EOF
pwd
quit
EOF

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ SFTP connection successful!${NC}"
else
    echo -e "${RED}❌ SFTP connection failed. Check your credentials.${NC}"
    exit 1
fi

# Upload files
echo -e "${YELLOW}📁 Uploading files to $REMOTE_DIR...${NC}"
sftp -i "$PRIVATE_KEY" -P "$SFTP_PORT" -o StrictHostKeyChecking=no "$SFTP_USER@$SFTP_HOST" << EOF
cd $REMOTE_DIR
put -r $LOCAL_DIR/* .
quit
EOF

if [ $? -eq 0 ]; then
    echo -e "${GREEN}🎉 Deployment completed successfully!${NC}"
    echo -e "${GREEN}Your portfolio should now be live at: http://$SFTP_HOST${NC}"
else
    echo -e "${RED}❌ Deployment failed.${NC}"
    exit 1
fi 