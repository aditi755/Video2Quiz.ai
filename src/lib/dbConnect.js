import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI;
console.log("mongouri db page", MONGO_URI);

if (!MONGO_URI) {
  throw new Error('Please define the MONGO_URI environment variable inside .env.local');
}

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

