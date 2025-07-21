const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const cropRoutes = require("./routes/cropRoutes");
const fertilizerRoutes = require("./routes/fertilizerRoutes");

const app = express();

// Middleware
app.use(express.static("public"));
app.use(express.json());


app.use(cors());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use("/api/crop-recommendation", cropRoutes);
app.use("/api/fertilizer-recommendation", fertilizerRoutes);

// Root route for check
app.get("/", (req, res) => {
  res.json({ message: "Server is running!" });
});
// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
