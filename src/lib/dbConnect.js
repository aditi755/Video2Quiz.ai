

import mongoose from 'mongoose';

// Fallback MongoDB URI
//const DEFAULT_MONGO_URI = 'mongodb+srv://awdhesh1700:taWitFufuDSQLTUj@cluster0.nmqnlcy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const MONGO_URI = process.env.NEXT_PUBLIC_MONGO_URI 
//|| DEFAULT_MONGO_URI;
console.log("Using MongoDB URI:", MONGO_URI);

async function dbConnect() {
  if (mongoose.connections[0].readyState) return;

  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Error connecting to database:', error);
    throw error;
  }
}

export default dbConnect;


