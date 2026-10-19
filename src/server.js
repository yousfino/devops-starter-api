// src/server.js
const app = require("./app");

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => {
  console.log(`Application running on port ${PORT}`);
});

// Graceful shutdown handling for container termination signals (SIGTERM/SIGINT)
const gracefulShutdown = (signal) => {
  console.log(`Received ${signal}. Shutting down gracefully...`);
  server.close(() => {
    console.log("HTTP server closed. Exiting process.");
    process.exit(0);
  });
};

process.on("SIGTERM", () => gracefulShutdown("SIGTERM"));
process.on("SIGINT", () => gracefulShutdown("SIGINT"));
