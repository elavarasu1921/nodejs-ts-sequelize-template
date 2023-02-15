enum HttpErrorCode {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
}

class ApiError {
  public statusCode;
  public devMessage;
  public userMessage;
  constructor(
    statusCode: number,
    devMessage = "Something went wrong",
    userMessage = "Something went wrong"
  ) {
    this.statusCode = statusCode;
    this.devMessage = devMessage;
    this.userMessage = userMessage;
  }
  static badRequest = (devMessage?: string, userMessage?: string) =>
    new ApiError(HttpErrorCode.BAD_REQUEST, devMessage, userMessage);
  static unauthorized = (devMessage?: string, userMessage?: string) =>
    new ApiError(HttpErrorCode.UNAUTHORIZED, devMessage, userMessage);
  static internal = (devMessage?: string, userMessage?: string) =>
    new ApiError(HttpErrorCode.INTERNAL_SERVER_ERROR, devMessage, userMessage);
  static notFound = (devMessage?: string, userMessage?: string) =>
    new ApiError(HttpErrorCode.NOT_FOUND, devMessage, userMessage);
}

export { ApiError };
