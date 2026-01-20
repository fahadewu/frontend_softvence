import mongoose, { Schema } from 'mongoose';

const TestimonialSchema = new Schema({
    name: { type: String, required: true },
    role: { type: String, default: '' },
    image: { type: String, default: '' },
    content: { type: String, required: true },
    companyLogo: { type: String, default: '' }
}, { timestamps: true });

export default mongoose.models.Testimonial || mongoose.model('Testimonial', TestimonialSchema);
