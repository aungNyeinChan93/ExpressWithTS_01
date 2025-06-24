import { NextFunction, Request, Response } from "express";

const errorMiddleware = (err: any, req: Request, res: Response, next: NextFunction) => {
    const statusCode = res.statusCode ? res.statusCode : err.status || 500;
    res.status(statusCode).json({
        success: false,
        error: err.message || "Internal Server Error"
    });
};

export default errorMiddleware;