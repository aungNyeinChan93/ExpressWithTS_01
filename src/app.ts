import express, { Express, NextFunction, Request, Response } from 'express';
import errorMiddleware from './middlewares/errorMiddleware';
import { PORT } from './config/env'
import connectDb from './database/connectDb';
import testRouter from './routes/testRouter';

const app: Express = express();

// database Connect
connectDb(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on ${PORT}`);
    })
})

// middlewares
app.use(express.json());

// routes
app.use('/api/tests', testRouter)

// error middleware
app.use(errorMiddleware)


