const mongoose = require("mongoose");
const connectionString = process.env.CONNECTION_STRING;

//connection mongoDb database good practice
const connectWithRetry = async (retries = 5, delay = 5000) => {
  try {
    console.log("Connecting to database...");
    await mongoose.connect(connectionString, {
      connectTimeoutMS: 5000,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Successfully connected to database: APIscout");
  } catch (error) {
    if (retries === 0) {
      console.error("Max retries reached. Database connection failed:", error);
      process.exit(1);
    }
    console.error(
      `Database connection failed. Retrying in ${delay / 1000} seconds...`,
      error
    );
    await new Promise((resolve) => setTimeout(resolve, delay));
    return connectWithRetry(retries - 1, delay);
  }
};

// Gestion des événements de connexion
mongoose.connection.on("disconnected", () => {
  console.log("Database disconnected");
  connectWithRetry();
});

connectWithRetry();
