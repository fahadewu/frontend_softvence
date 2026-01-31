import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';
import * as dotenv from 'dotenv';

// Load environment variables from .env.local
dotenv.config({ path: '.env.local' });

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    console.error('Please define the MONGODB_URI environment variable inside .env.local');
    process.exit(1);
}

// Model Schemas (Simplified for seeding)
const AboutSchema = new mongoose.Schema({}, { strict: false, timestamps: true });
const BlogPostSchema = new mongoose.Schema({}, { strict: false, timestamps: true });
const CaseStudySchema = new mongoose.Schema({}, { strict: false, timestamps: true });
const TestimonialSchema = new mongoose.Schema({}, { strict: false, timestamps: true });
const UserSchema = new mongoose.Schema({}, { strict: false, timestamps: true });

// Models
const About = mongoose.models.About || mongoose.model('About', AboutSchema, 'abouts');
const BlogPost = mongoose.models.BlogPost || mongoose.model('BlogPost', BlogPostSchema, 'blogposts');
const CaseStudy = mongoose.models.CaseStudy || mongoose.model('CaseStudy', CaseStudySchema, 'casestudies');
const Testimonial = mongoose.models.Testimonial || mongoose.model('Testimonial', TestimonialSchema, 'testimonials');
const User = mongoose.models.User || mongoose.model('User', UserSchema, 'users');

async function seed() {
    try {
        console.log('Connecting to MongoDB...');
        await mongoose.connect(MONGODB_URI!);
        console.log('Connected successfully!');

        const dataDir = path.join(process.cwd(), 'data');

        // Helper function to seed a model
        const seedModel = async (model: mongoose.Model<any>, fileName: string, dataKey?: string) => {
            const filePath = path.join(dataDir, fileName);
            if (!fs.existsSync(filePath)) {
                console.warn(`File ${fileName} not found, skipping...`);
                return;
            }

            const rawData = fs.readFileSync(filePath, 'utf8');
            let data = JSON.parse(rawData);

            if (dataKey && data[dataKey]) {
                data = data[dataKey];
            }

            // Ensure data is an array
            const dataArray = Array.isArray(data) ? data : [data];

            console.log(`Seeding ${model.modelName} with ${dataArray.length} items...`);

            // Clear existing data
            await model.deleteMany({});

            // Remove _id from data to let MongoDB generate new ones if they are not valid ObjectIds or if we want clean start
            // But usually we want to keep them if they are valid.
            // Let's check if they have _id and if it's a valid hex string of 24 chars
            const cleanData = dataArray.map((item: any) => {
                const { _id, createdAt, updatedAt, ...rest } = item;
                // If _id is a valid ObjectId string, we can keep it, otherwise let Mongo handle it
                if (_id && typeof _id === 'string' && _id.length === 24) {
                    return { _id, ...rest };
                }
                return rest;
            });

            await model.insertMany(cleanData);
            console.log(`Successfully seeded ${model.modelName}`);
        };

        // Seed models
        await seedModel(About, 'about.json');
        await seedModel(BlogPost, 'blogPosts.json', 'blogPosts');
        await seedModel(CaseStudy, 'caseStudies.json', 'caseStudies');
        await seedModel(Testimonial, 'testimonials.json', 'testimonials');
        await seedModel(User, 'users.json');

        console.log('Data restoration complete!');
        process.exit(0);
    } catch (error) {
        console.error('Error seeding data:', error);
        process.exit(1);
    }
}

seed();
