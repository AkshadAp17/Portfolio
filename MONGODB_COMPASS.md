# MongoDB Compass Connection Guide

## Connection Details

**Connection String:** `mongodb://localhost:27017/portfolio`

## MongoDB Compass Setup

1. **Download MongoDB Compass** from https://www.mongodb.com/products/compass
2. **Install and open** MongoDB Compass
3. **Enter connection string:** `mongodb://localhost:27017/portfolio`
4. **Click Connect**

## Database Structure

### Database: `portfolio`

### Collections:
- **users** - User authentication data
  - `_id` (ObjectId) - Unique identifier
  - `username` (String) - User's username
  - `password` (String) - Hashed password
  - `createdAt` (Date) - Account creation timestamp
  - `updatedAt` (Date) - Last update timestamp

- **contactsubmissions** - Contact form submissions
  - `_id` (ObjectId) - Unique identifier
  - `firstName` (String) - Contact's first name
  - `lastName` (String) - Contact's last name
  - `email` (String) - Contact's email address
  - `subject` (String) - Message subject
  - `budget` (String, Optional) - Project budget
  - `message` (String) - Contact message
  - `createdAt` (Date) - Submission timestamp
  - `updatedAt` (Date) - Last update timestamp

## Viewing Data in Compass

1. **Connect to the database** using the connection string above
2. **Navigate to the `portfolio` database** in the left sidebar
3. **Click on collections** to view data:
   - Click "contactsubmissions" to see all contact form submissions
   - Click "users" to see registered users
4. **Use the query bar** to filter data
5. **View documents** in different formats (Table, JSON, etc.)

## Sample Queries in Compass

- **All contact submissions:** `{}`
- **Recent submissions:** `{"createdAt": {"$gte": new Date("2024-01-01")}}`
- **By email domain:** `{"email": {"$regex": "@gmail.com$"}}`
- **Specific subject:** `{"subject": "Web Development Project"}`

## Notes

- The database is currently running locally on port 27017
- All contact form submissions from your portfolio website will appear in the `contactsubmissions` collection
- You can modify, delete, or export data directly through MongoDB Compass