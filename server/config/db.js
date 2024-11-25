const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    mongoose.set('strictQuery', false); // Disables strict mode for queries

    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 5000, // Timeout for selecting a server
      socketTimeoutMS: 45000,        // Timeout for socket inactivity
    });

    console.log(`Database Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('Error connecting to the database:', error.message);

    // Optional: Exit the process if the connection fails
    process.exit(1);
  }
};

module.exports = connectDB;
