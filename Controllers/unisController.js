const University = require("../models/unisModel");

function parseDate(dateStr) {
  const [day, month, year] = dateStr.split(".").map(Number);
  return new Date(year, month - 1, day); // Month is 0-indexed in JavaScript Date
}

// Function to sort universities by endApply date
function sortUniversitiesByEndApply(universityArray) {
  return universityArray.sort(
    (a, b) => parseDate(a.endApply) - parseDate(b.endApply)
  );
}

const getUnis = async (req, res) => {
  try {
    const unis = await University.find();
    const sortedUnis = sortUniversitiesByEndApply(unis);
    res.json(sortedUnis);
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
