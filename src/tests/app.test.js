// tests/app.test.js
const request = require("supertest");
const app = require("../app");

describe("API Endpoints", () => {
  describe("GET /health", () => {
    it("should return 200 OK and status healthy", async () => {
      const response = await request(app).get("/health");
      expect(response.statusCode).toBe(200);
      expect(response.body).toHaveProperty("status", "healthy");
      expect(response.body).toHaveProperty("timestamp");
      expect(response.body).toHaveProperty("uptime");
    });
  });

  describe("GET /api/items", () => {
    it("should return a list of items with status 200", async () => {
      const response = await request(app).get("/api/items");
      expect(response.statusCode).toBe(200);
      expect(response.body).toHaveProperty("items");
      expect(Array.isArray(response.body.items)).toBe(true);
      expect(response.body.items.length).toBeGreaterThan(0);
    });
  });
});
