import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio';

let isConnected = false;

export async function connectToMongoDB() {
  try {
    await mongoose.connect(MONGODB_URI, {
      serverSelectionTimeoutMS: 5000,
    });
    isConnected = true;
    console.log('✅ Connected to MongoDB successfully');
    console.log('📊 MongoDB Compass Connection: mongodb://localhost:27017/portfolio');
  } catch (error) {
    console.log('⚠️  MongoDB not available - using in-memory storage');
    console.log('💡 To use MongoDB:');
    console.log('   1. Install MongoDB locally');
    console.log('   2. Start MongoDB: mongod --dbpath ./data/db');
    console.log('   3. Connect MongoDB Compass to: mongodb://localhost:27017/portfolio');
    isConnected = false;
  }
}

export function isMongoConnected() {
  return isConnected;
}

export default mongoose;