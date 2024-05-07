import mongoose from 'mongoose';

const socialMediaSchema = new mongoose.Schema({
    socialMedia: String,
    link: String
});

const workExperienceSchema = new mongoose.Schema({
    company: String,
    position: String,
    description: String,
    keyAchievements: [String],
    startYear: String,
    endYear: String
});

const educationSchema = new mongoose.Schema({
    school: String,
    degree: String,
    startYear: String,
    endYear: String
});

const projectsSchema = new mongoose.Schema({
    title: String,
    link: String,
    description: String,
    keyAchievements: String,
    startYear: String,
    endYear: String
});

const skillsSchema = new mongoose.Schema({
    title: String,
    skills: [String]
});

const resumeSchema = new mongoose.Schema({
    userJobSeeker : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserJobSeeker',
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    position: {
        type: String,
        required: true,
    },
    contactInformation: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    profilePicture: {
        type: String,
    },
    socialMedia: [socialMediaSchema],
    summary: {
        type: String,
        required: true,
    },
    education: [educationSchema],
    workExperience: [workExperienceSchema],
    projects: [projectsSchema],
    skills: [skillsSchema],
    languages: [String],
    certifications: [String]
});


module.exports = mongoose.models.Resume || mongoose.model('Resume', resumeSchema);

