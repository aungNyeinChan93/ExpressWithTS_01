import { Router } from "express";
import testController from "../controllers/testController";

const testRouter: Router = Router();

// uri -> /api/tests

testRouter.get('/errStatusTest', testController.errStatusTest);


export default testRouter;