// backend/server.js
const express = require("express");
const dotenv = require("dotenv").config();
const errorHandler = require("./middleware/errorHandler");
const connectDB = require("./connection/dbConnection");
const cors = require("cors");

connectDB();  // Connect to MongoDB

const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to the Contact App API");
});
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use(errorHandler);

const port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});



/* Old
const express = require("express");
const dotenv = require("dotenv").config();
const errorHandler = require("./middleware/errorHandler");
const connectDB = require("./connection/dbConnection");
const cors = require("cors");

connectDB();  // Connect to MongoDB
const app = express();
app.use(express.json());

app.use(cors());

// Route for the root path
app.get("/", (req, res) => {
    res.send("Welcome to the Contact App API");
});

// Routes for the contacts API
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use(errorHandler);

const port = 3002;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

*/