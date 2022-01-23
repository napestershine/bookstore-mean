const repo = require("../repositories/book");

exports.getAll = (req, res) => {
  console.log("Get all books method called.");
  // call repository to get data.
  repo.getAll((books) => {
    res.send(books);
  });
};
