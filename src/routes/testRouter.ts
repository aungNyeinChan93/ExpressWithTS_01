import { Router } from "express";
import testController from "../controllers/testController";

const testRouter: Router = Router();

// uri -> /api/tests
testRouter.get('/errStatusTest', testController.errStatusTest);
testRouter.post('/createTodo', testController.createTodo);
testRouter.get('/todos/:id', testController.findTodo);


export default testRouter;