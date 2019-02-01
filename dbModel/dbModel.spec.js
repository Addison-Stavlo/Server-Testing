const db = require("../dbConfig");
const dbModel = require("./dbModel.js");

// before and after Each or before and after All
afterEach(async () => {
  await db("resources").truncate();
});

describe("dbModel", () => {
  test("insert resource returns single id", async () => {
    const id = await dbModel.insert({ name: "coal" });
    expect(id).toEqual(1);
  });
  test("remove should remove inserted resource", async () => {
    await dbModel.insert({ name: "coal" });
    await dbModel.remove({ name: "coal" });
    let matches = await db("resources").where({ name: "coal" });
    expect(matches).toHaveLength(0);
  });
});
