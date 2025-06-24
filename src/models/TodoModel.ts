

import { Schema, model } from 'mongoose';

const TodoSchema = new Schema({
    task: { type: String, required: true, trim: true },
    status: { type: Boolean, default: false }
});

const TodoModel = model('Todo', TodoSchema, "todos");

export default TodoModel;