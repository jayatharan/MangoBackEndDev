// const errorHandler = (err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).send('Something broke!');
//   }
  
//   module.exports = errorHandler;
  
class BadRequestError extends Error {
  constructor(message) {
    super(message);
    this.name = 'BadRequestError';
    this.statusCode = 400;
  }
}
  
module.exports = {
  BadRequestError
}
  