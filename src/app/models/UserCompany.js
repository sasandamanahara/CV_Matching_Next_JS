import { date } from 'joi';
import mongoose from 'mongoose';


const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },


});

const UserCompany = mongoose.models.UserCompany  || mongoose.model('UserCompany', UserSchema);

export default UserCompany;