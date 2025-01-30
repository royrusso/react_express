const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the Vite React build
app.use(express.static(path.join(__dirname, "../dist/frontend")));

// API Routes (example)
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Express!" });
});

// Serve the frontend for all other routes (handle React Router)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/frontend/index.html"));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
