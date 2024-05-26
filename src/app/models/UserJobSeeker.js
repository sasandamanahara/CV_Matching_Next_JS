import mongoose from 'mongoose';


const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
});

const UserJobSeeker = mongoose.models.UserJobSeeker  || mongoose.model('UserJobSeeker', UserSchema);

export default UserJobSeeker;