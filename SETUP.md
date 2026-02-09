# 🚀 Quick Setup Guide

## Step 1: Install Node.js
Download and install Node.js from: https://nodejs.org/
(Choose the LTS version - Long Term Support)

## Step 2: Extract the Project
Unzip the `murdeshwarone` folder to your desired location

## Step 3: Open Terminal/Command Prompt
- **Windows**: Open Command Prompt or PowerShell in the project folder
  - Right-click in the folder → "Open in Terminal" or "Open PowerShell window here"
- **Mac/Linux**: Open Terminal and navigate to the project folder
  ```bash
  cd /path/to/murdeshwarone
  ```

## Step 4: Install Dependencies
Run this command:
```bash
npm install
```
Wait for all packages to download (this may take a minute)

## Step 5: Start the Server
Run this command:
```bash
npm start
```

You should see:
```
MurdeshwarOne server running on http://localhost:3000
Admin login: username: admin, password: admin123
```

## Step 6: Open in Browser
Open your web browser and go to:
```
http://localhost:3000
```

## Step 7: Test Admin Panel
1. Click "Admin" button in the top navigation
2. Login with:
   - Username: `admin`
   - Password: `admin123`

## 🎉 You're Done!

The website is now running on your computer.

## Common Issues

### "npm: command not found"
- Node.js is not installed. Go back to Step 1.

### "Port 3000 is already in use"
- Another application is using port 3000
- Change the port in `server.js`:
  ```javascript
  const PORT = 3001; // Change to any available port
  ```

### Changes not showing up?
- Stop the server (Ctrl+C)
- Restart with `npm start`

## Stop the Server
Press `Ctrl + C` in the terminal where the server is running

## Need Help?
Check the full README.md for detailed documentation
