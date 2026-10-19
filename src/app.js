// src/app.js
const express = require("express");

const app = express();
app.use(express.json());

// Health check endpoint (critical for container probes and load balancers)
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "healthy",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
});

// Sample API resource
app.get("/api/items", (req, res) => {
  res.status(200).json({
    items: [
      { id: 1, name: "Containerized Service" },
      { id: 2, name: "Automated CI/CD Pipeline" },
      { id: 3, name: "Cloud Deployment" },
    ],
  });
});

module.exports = app;
