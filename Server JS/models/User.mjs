import { types } from 'mime-types';
import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
    userName: {
        type: String,
        required: [true,'Username is required!']
    },
    email: {
        type: String,
        unique: true,
        required: [true,'Email is required!']
    },
    password: {
        type: String,
        required: [true,'Password is required!']
    },

});

export const User = mongoose.model('User', userSchema);