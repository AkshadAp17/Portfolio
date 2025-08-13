# Render Deployment Guide

## Prerequisites
- Render account
- GitHub repository with your code
- Environment variables configured

## Deployment Steps

### 1. Connect GitHub Repository
1. Go to Render Dashboard
2. Click "New +" → "Web Service"
3. Connect your GitHub repository

### 2. Configure Build Settings
- **Build Command**: `./render-build.sh`
- **Start Command**: `cross-env NODE_ENV=production node dist/index.js`
- **Root Directory**: (leave empty if deploying from root)

### 3. Environment Variables
Add these environment variables in Render dashboard:

**Required:**
- `NODE_ENV` = `production`
- `DATABASE_URL` = Your MongoDB connection string

**Email Configuration (Optional):**
- `EMAIL_USER` = Your email username
- `EMAIL_PASS` = Your email password/app password
- `EMAIL_HOST` = SMTP host (e.g., smtp.gmail.com)
- `EMAIL_PORT` = SMTP port (e.g., 587)
- `EMAIL_SECURE` = `false` for port 587
- `EMAIL_FROM` = Your from email address

### 4. Deploy
1. Click "Create Web Service"
2. Render will automatically build and deploy your app
3. Your app will be available at `https://your-app-name.onrender.com`

## Files Created for Render
- `render-build.sh` - Build script for Render
- `render.yaml` - Render configuration (optional)
- Updated server configuration for dynamic port/host

## Notes
- Free tier may have cold starts (app sleeps after inactivity)
- MongoDB Atlas connection recommended for database
- Make sure all environment variables are set correctly