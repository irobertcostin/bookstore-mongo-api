import { NextFunction, Request, Response } from "express";

interface CustomError extends Error {
    status?: number;
}


const errorHandler = (err: CustomError, req: Request, res: Response, next: NextFunction) => {

    res.status(err.status || 500);
    res.json({
        error: {
            message: err.message
        }
    })
}

export default errorHandler;