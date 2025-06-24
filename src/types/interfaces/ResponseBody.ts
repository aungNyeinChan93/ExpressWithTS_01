import mongoose from "mongoose"


export interface CreateTodoRes<data> {
    success: boolean,
    result: data
}

export interface Todo {
    _id: mongoose.Schema.Types.ObjectId,
    task: string,
    status: boolean
}

export interface CustomeResponse<data> {
    success: boolean,
    message?: string,
    result: data
};
