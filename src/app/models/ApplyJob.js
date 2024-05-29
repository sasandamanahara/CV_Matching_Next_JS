import mongoose from 'mongoose';
import UserJobSeeker from './UserJobSeeker';
import Job from './Job';

const ApplyJobSchema = new mongoose.Schema({

    userJobSeeker: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserJobSeeker',
        required: true,
    },
    jobId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Job',
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        default: 'Pending',
        enum: ['Pending', 'Interviewing', 'Offered','Accepted']
    }
}, { timestamps: true });

const AppliedJob = mongoose.models.AppliedJobStatus || mongoose.model('AppliedJobStatus', ApplyJobSchema);

export default AppliedJob;