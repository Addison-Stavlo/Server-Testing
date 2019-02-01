const db = require("../dbConfig");

module.exports = {
  insert,
  remove
};

async function insert(resource) {
  let ids = await db("resources").insert(resource);
  return ids[0];
}

async function remove(resource) {
  let count = db("resources")
    .where(resource)
    .del();
  return count;
}
