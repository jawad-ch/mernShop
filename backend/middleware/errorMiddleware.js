const notFound = (req, res, next) => {
  const error = new Error(`NOT FOUND - ${req.originalUrl}`)
  res.status(404)
  next(error)
}

const errorHandler = (err, req, res, next) => {
  const statusCode = err.code || 500
  res.status(statusCode).json({
    status: statusCode,
    message: err.message || 'An unknown error occurred',
  })
}

export { notFound, errorHandler }
