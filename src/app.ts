import express, { Express, NextFunction, Request, Response } from 'express';
import errorMiddleware from './middlewares/errorMiddleware';
import { PORT } from './config/env'
import connectDb from './database/connectDb';
import testRouter from './routes/testRouter';
import rateLimit from 'express-rate-limit';

const app: Express = express();

const limiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minutes
    limit: 10,
    message: 'Rate limit exceeded'
})

// database Connect
connectDb(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on ${PORT}`);
    })
})

// middlewares
app.use(limiter);
app.use(express.json());

// routes
app.use('/api/tests', testRouter);


// error middleware
app.use(errorMiddleware)


