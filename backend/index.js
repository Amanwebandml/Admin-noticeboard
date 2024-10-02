const express = require("express");
const cors = require("cors");
const adminRouter = require("./routes/admin"); // Add this to include your admin routes

const app = express();

app.use(cors());
app.use(express.json());

// Register routes
app.use("/admin", adminRouter); // Admin routes

// Start server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
