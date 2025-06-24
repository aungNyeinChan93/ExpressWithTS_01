import { NextFunction, Request, Response } from "express";
import { CreateTodoRes, CustomeResponse, Todo } from "../types/interfaces/ResponseBody";
import { CreateTodoReq } from "../types/interfaces/RequestBody";
import TodoModel from "../models/TodoModel";


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
    createTodo: async (req: Request<{}, {}, CreateTodoReq>, res: Response<CustomeResponse<Todo>>, next: NextFunction) => {
        try {
            const { task, status } = req.body;
            if (!task) {
                res.status(400);
                return next(new Error('Some Fields are required!'));
            };
            const createDoc = task && await TodoModel.create({ task, status });
            const todo = createDoc && await TodoModel.findById(createDoc._id).select('-__v ').lean<Todo>();
            todo && res.status(201).json({
                success: true,
                result: todo,
                message: 'todo create successfully!',
            })
        } catch (error) {
            return next(error)
        }
    },
    // findTodo
    findTodo: async (req: Request<{ id: string }>, res: Response<{ success: boolean, result: Todo }>, next: NextFunction) => {
        try {
            const { id } = req.params;
            const todo = id && await TodoModel.findById(id).lean<Todo>();
            !todo && next(new Error('Not found todo!'));
            todo && res.status(200).json({
                success: true,
                result: todo
            })
        } catch (error) {
            return next(error)
        }
    }
    // 

};


export default testController;

