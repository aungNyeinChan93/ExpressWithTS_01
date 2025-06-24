import { NextFunction, Request, Response } from "express";
import { CreateTodoRes } from "../types/interfaces/ResponseBody";
import { CreateTodoReq } from "../types/interfaces/RequestBody";


const testController = {
    // err status test
    errStatusTest: async (req: Request, res: Response, next: NextFunction) => {
        try {
            res.status(401);
            return next(Error('this is err status test'))
        } catch (error) {
            next(error)
        }
    },
    // createTodo
    createTodo: async (req: Request<{}, {}, CreateTodoReq>, res: Response<CreateTodoRes>, next: NextFunction) => {
        try {
            const { id, status, task = false } = req.body;
            if (!id || !task) {
                res.status(400);
                return next(new Error('Some Fields are required!'));
            };
            res.status(201).json({
                success: true,
                result: { id, status, task }
            })
        } catch (error) {
            return next(error)
        }
    }
};


export default testController;

