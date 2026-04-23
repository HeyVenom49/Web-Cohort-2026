class ApiError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }

  static badRequest(message = "bad request") {
    throw new ApiError(400, message);
  }

  static unauthorised(message = "unauthorised access") {
    throw new ApiError(401, message);
  }
  static conflict(message = "user already exist") {
    throw new ApiError(409, message);
  }
}

export default ApiError;
