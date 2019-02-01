const request = require("supertest");
const server = require("./server.js");

describe("server.js", () => {
  it("GET should respond with status 200", async () => {
    let response = await request(server).get("/");

    expect(response.status).toBe(200);
  });
});
