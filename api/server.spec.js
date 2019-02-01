const request = require("supertest");
const server = require("./server.js");

const db = require("../dbConfig");

// before and after Each or before and after All
afterEach(async () => {
  await db("resources").truncate();
});

describe("server.js", () => {
  it("GET should respond with status 200", async () => {
    let response = await request(server).get("/");

    expect(response.status).toBe(200);
  });
  it("POST should respond with status 201", async () => {
    let response = await request(server)
      .post("/")
      .send({ name: "Lumber" });

    expect(response.status).toBe(201);
  });
  it("POST should return number representing id", async () => {
    let response = await request(server)
      .post("/")
      .send({ name: "Lumber" });

    expect(typeof response.body).toBe("number");
  });
  it("DELETE should respond with status 200", async () => {
    await request(server)
      .post("/")
      .send({ name: "Lumber" });
    let response = await request(server)
      .delete("/")
      .send({ name: "Lumber" });
    expect(response.status).toBe(200);
  });
  it("DELETE should remove 1 resource", async () => {
    await request(server)
      .post("/")
      .send({ name: "Lumber" });
    let response = await request(server)
      .delete("/")
      .send({ name: "Lumber" });
    expect(response.body).toBe(1);
  });
});
