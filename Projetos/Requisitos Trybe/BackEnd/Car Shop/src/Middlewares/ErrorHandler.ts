import { NextFunction, Request, Response } from 'express';
import VerifyError from '../Utils/verifyError';

class ErrorHandler {
  public static handle(
    error: VerifyError,
    _req: Request,
    res: Response,
    _next: NextFunction,
  ) {
    if (error.status) return res.status(error.status).json({ message: error.message });
    // next();
  }
}

export default ErrorHandler;