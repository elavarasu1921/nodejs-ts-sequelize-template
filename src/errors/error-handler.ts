import { NextFunction, Request, Response } from "express";
import { ApiError } from "./base-error";

const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(err);
  if (err instanceof ApiError) {
    const { statusCode, devMessage, userMessage } = err;
    res.status(statusCode).json({
      error: true,
      statusCode,
      devMessage,
      userMessage,
    });
    return;
  }
  res.status(500).json({
    error: true,
    err,
  });
};

export { errorHandler };
