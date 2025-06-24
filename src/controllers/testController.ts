import { NextFunction, Request, Response } from "express";


const testController = {
    errStatusTest: async (req: Request, res: Response, next: NextFunction) => {
        try {
            res.status(401);
            next(Error('this is err status test'))
        } catch (error) {
            next(error)
        }
    }
};

export default testController;