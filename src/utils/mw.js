const logger = ((req, res, next) => {
  console.log({
      path: req.path,
      method: req.method,
      ip: req.ip || req.headers['x-forwarded-for'] || req.socket.remoteAddress
  });
  next();
});

const handlerNotFound = (req, res) => res.status(404).json({err: "PathNotFoundError", msg: "Path not found." });

const handlerError = (err, req, res, next) => {
  res.status(err.status).json({ err: err.name, msg: err.msg });
  next();
};

module.exports = { logger, handlerNotFound, handlerError };