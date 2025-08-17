const noFound = (req, res) => {
  res.status(404).send('Route not found');
};

module.exports = noFound;
