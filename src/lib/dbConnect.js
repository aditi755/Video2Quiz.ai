

import mongoose from 'mongoose';


const MONGO_URI = process.env.MONGO_URI 
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


