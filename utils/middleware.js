const logger= require('./logger');


const requestmiddleware = (req, res, next) => {
  logger.info("Method: " + req.method);
  logger.info("Path: " + req.path);
  logger.info("Body: " + req.body);
  next();
};
const unknownEndPoint = (req, res, next) => {
  res.status(400).send({ error: "unknown endpoint" });
};
const errorhandlerMiddleware = (error, req, res, next) => {
  logger.info(error.name);

  if (error.name === "CastError") {
    return res.status(400).send({ error: "Malformatted Id" });
  } else if (error.name === "ValidationError") {
    return res.status(400).send({ error: error.message });
  }
  return res.status(400).send({ error: "Please try again" });
};

module.exports = {
  requestmiddleware,
  unknownEndPoint,
  errorhandlerMiddleware,
};
