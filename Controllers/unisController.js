const University = require("../models/unisModel");

const getUnis = async (req, res) => {
  try {
    const unis = await University.find();
    res.json(unis);
  } catch (error) {
    console.error("Error fetching universities:", error);
    res.status(500).json({ message: "Server error" });
  }
};
const getUni = async (req, res) => {
  // Create a query that searches for the phrase "star trek"
  const resName = req.query;
  console.log(resName);
  // const query = { $text: { $search: resName } };
  // // Return only the `title` of each matched document
  // const projection = {
  //   _id: 0,
  //   title: 1,
  // };
  // // Find documents based on the query and projection
  // const uni = University.find(query).project(projection);
  // res.json(uni);
};

module.exports = { getUnis, getUni };
