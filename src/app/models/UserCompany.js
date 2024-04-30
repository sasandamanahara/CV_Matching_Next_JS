import mongoose from 'mongoose';


const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
});

const UserCompany = mongoose.models.UserCompany  || mongoose.model('UserCompany', UserSchema);

export default UserCompany;