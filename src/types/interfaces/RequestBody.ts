import mongoose from "mongoose";

export interface CreateTodoReq {
    id: mongoose.Schema.Types.ObjectId,
    task: string,
    status: boolean
}