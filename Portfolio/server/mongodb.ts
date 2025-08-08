import mongoose from 'mongoose';

const MONGODB_URI = process.env.DATABASE_URL || 'mongodb+srv://akshad:M5wxz0XgMsaswQQd@cluster0.qsbcrkt.mongodb.net/portfolio?retryWrites=true&w=majority';

let isConnected = false;

export async function connectToMongoDB() {
  console.log('Attempting MongoDB connection...');
  console.log('DATABASE_URL:', process.env.DATABASE_URL ? 'Set' : 'Not set');
  console.log('Connection string:', MONGODB_URI);
  
  try {
    await mongoose.connect(MONGODB_URI, {
      serverSelectionTimeoutMS: 15000,
      socketTimeoutMS: 45000,
      connectTimeoutMS: 10000,
    });
    isConnected = true;
    console.log('✅ Connected to MongoDB Atlas successfully');
    console.log('📊 Database: portfolio');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    console.log('⚠️  MongoDB Atlas not available - using in-memory storage');
    console.log('💡 Check MongoDB Atlas connection:');
    console.log('   1. Verify connection string is correct');
    console.log('   2. Check network connectivity');
    console.log('   3. Verify database credentials');
    isConnected = false;
  }
}

export function isMongoConnected() {
  return isConnected;
}

export default mongoose;