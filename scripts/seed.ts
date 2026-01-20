import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import About from '../models/About';
import User from '../models/User';
import Log from '../models/Log';
import BlogPost from '../models/BlogPost';
import CaseStudy from '../models/CaseStudy';
import Testimonial from '../models/Testimonial';

// Load env vars
dotenv.config({ path: '.env.local' });

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    console.error('MONGODB_URI is not defined');
    process.exit(1);
}

const seedData = async () => {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('Connected to MongoDB');

        // Seed About Data
        const aboutPath = path.join(process.cwd(), 'data', 'about.json');
        if (fs.existsSync(aboutPath)) {
            const aboutData = JSON.parse(fs.readFileSync(aboutPath, 'utf-8'));
            await About.deleteMany({});
            await About.create(aboutData);
            console.log('Seeded About Data');
        }

        // Seed Users
        const usersPath = path.join(process.cwd(), 'data', 'users.json');
        if (fs.existsSync(usersPath)) {
            const usersData = JSON.parse(fs.readFileSync(usersPath, 'utf-8'));
            await User.deleteMany({});
            const usersToInsert = usersData.map((u: any) => {
                const { id, ...rest } = u;
                return rest;
            });
            await User.insertMany(usersToInsert);
            console.log('Seeded Users Data');
        }

        // Seed Logs
        const logsPath = path.join(process.cwd(), 'data', 'logs.json');
        if (fs.existsSync(logsPath)) {
            const logsData = JSON.parse(fs.readFileSync(logsPath, 'utf-8'));
            await Log.deleteMany({});
            const logsToInsert = logsData.map((l: any) => {
                const { id, ...rest } = l;
                return rest;
            });
            await Log.insertMany(logsToInsert);
            console.log('Seeded Logs Data');
        }

        // Seed Blog Posts
        const blogPath = path.join(process.cwd(), 'data', 'blogPosts.json');
        if (fs.existsSync(blogPath)) {
            const blogData = JSON.parse(fs.readFileSync(blogPath, 'utf-8'));
            const posts = blogData.blogPosts || blogData;
            await BlogPost.deleteMany({});
            const postsToInsert = posts.map((p: any) => {
                const { id, ...rest } = p;
                return rest;
            });
            await BlogPost.insertMany(postsToInsert);
            console.log('Seeded Blog Posts');
        }

        // Seed Case Studies
        const caseStudyPath = path.join(process.cwd(), 'data', 'caseStudies.json');
        if (fs.existsSync(caseStudyPath)) {
            const csData = JSON.parse(fs.readFileSync(caseStudyPath, 'utf-8'));
            const studies = csData.caseStudies || csData;
            await CaseStudy.deleteMany({});
            const studiesToInsert = studies.map((cs: any) => {
                const { id, ...rest } = cs;
                return rest;
            });
            await CaseStudy.insertMany(studiesToInsert);
            console.log('Seeded Case Studies');
        }

        // Seed Testimonials
        const testimonialPath = path.join(process.cwd(), 'data', 'testimonials.json');
        if (fs.existsSync(testimonialPath)) {
            const tData = JSON.parse(fs.readFileSync(testimonialPath, 'utf-8'));
            const testimonials = tData.testimonials || tData;
            await Testimonial.deleteMany({});
            const testimonialsToInsert = testimonials.map((t: any) => {
                const { id, ...rest } = t;
                return rest;
            });
            await Testimonial.insertMany(testimonialsToInsert);
            console.log('Seeded Testimonials');
        }

        console.log('Seeding completed successfully');
        process.exit(0);
    } catch (error) {
        console.error('Seeding failed:', error);
        process.exit(1);
    }
};

seedData();
