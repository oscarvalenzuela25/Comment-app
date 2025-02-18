export class CustomError extends Error {
  private constructor(public statusCode: number, public message: string) {
    super(message);
  }

  static badRequest(message: string) {
    return new CustomError(400, message);
  }

  static unAuthorized(message: string) {
    return new CustomError(401, message);
  }

  static forbidden(message: string) {
    return new CustomError(403, message);
  }

  static notFound(message: string) {
    return new CustomError(404, message);
  }

  static internalServerError(message: string = 'Internal server error') {
    return new CustomError(500, message);
  }
}
