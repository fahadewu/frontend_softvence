import mongoose, { Schema } from 'mongoose';

// Flexible schema for sections since they vary greatly in structure
const SectionSchema = new Schema({
    type: { type: String, required: true },
    // Common fields
    image: { type: String },
    heading: { type: String },
    subHeading: { type: String },
    description: { type: String },
    // Project Info fields
    client: { type: String },
    category: { type: String },
    liveUrl: { type: String },
    services: [{ type: String }], // Array of strings for Project Info services
    // Problem/Solution fields
    problem: { type: String },
    challenges: { type: String },
    solution: { type: String },
    // Gallery/Visual Design fields
    images: [{ type: String }],
    headline: { type: String },
    // Testimonial section fields
    quote: { type: String },
    clientName: { type: String },
    clientRole: { type: String },
    clientImage: { type: String },
    // Design Process fields
    steps: [{
        title: { type: String },
        description: { type: String }
    }]
}, { _id: false }); // No ID for sub-documents to keep it clean

const CaseStudySchema = new Schema({
    slug: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    description: { type: String, default: '' },
    categories: [{ type: String }],
    image: { type: String, default: '' }, // Cover image
    client: { type: String, default: '' },
    services: { type: String, default: '' }, // String representation of services
    year: { type: String, default: '' },
    sections: [SectionSchema]
}, { timestamps: true });

export default mongoose.models.CaseStudy || mongoose.model('CaseStudy', CaseStudySchema);
