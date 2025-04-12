const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        // Log the MongoDB URI to check if it's loaded correctly
        console.log("MongoDB URI:", process.env.CONNECTION_STRING);

        const uri = process.env.CONNECTION_STRING;

        // Check if the connection string is present in the .env file
        if (!uri) {
            console.error("MongoDB connection string is not defined in .env file.");
            return;
        }

        // MongoDB connection with increased timeout
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 150000  // Increase timeout to 50 seconds (50000 ms)
        });

        console.log("MongoDB connected!");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1); // Exit the process with failure
    }
};

module.exports = connectDB;
