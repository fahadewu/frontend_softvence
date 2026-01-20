import mongoose, { Schema } from 'mongoose';

const LogSchema = new Schema({
    action: { type: String, required: true },
    description: { type: String, required: true },
    user: { type: String, required: true },
    type: {
        type: String,
        enum: ['info', 'warning', 'error', 'success'],
        default: 'info'
    },
    timestamp: { type: Date, default: Date.now }
}, { timestamps: true });

export default mongoose.models.Log || mongoose.model('Log', LogSchema);
