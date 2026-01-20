import mongoose, { Schema } from 'mongoose';

const AboutSchema = new Schema({
    hero: {
        title1: { type: String, default: '' },
        title2: { type: String, default: '' },
        cta: {
            text: { type: String, default: '' },
            link: { type: String, default: '' }
        }
    },
    aboutImage: { type: String, default: '' },
    whoWeAre: {
        heading: { type: String, default: '' },
        description: { type: String, default: '' },
        counters: [{
            label: { type: String, default: '' },
            value: { type: Number, default: 0 },
            suffix: { type: String, default: '' }
        }]
    },
    whyChooseUs: {
        heading: { type: String, default: '' },
        subHeading: { type: String, default: '' },
        cards: [{
            id: { type: String },
            title: { type: String, default: '' },
            description: { type: String, default: '' },
            image: { type: String, default: '' }
        }]
    },
    team: {
        heading: { type: String, default: '' },
        subHeading: { type: String, default: '' },
        description: { type: String, default: '' },
        images: [{ type: String }]
    },
    awards: {
        items: [{
            title: { type: String, default: '' },
            type: { type: String, default: 'clutch' }
        }]
    },
    marqueeLogos: [{ type: String }]
}, { timestamps: true });

export default mongoose.models.About || mongoose.model('About', AboutSchema);
