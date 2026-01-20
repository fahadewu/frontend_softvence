import mongoose, { Schema } from 'mongoose';

const BlogPostSchema = new Schema({
    slug: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    excerpt: { type: String, default: '' },
    content: { type: String, default: '' },
    category: { type: String, default: '' },
    readingTime: { type: String, default: '' },
    image: { type: String, default: '' },
    author: { type: String, default: 'Softvence Team' },
    date: { type: Date, default: Date.now },
    tags: [{ type: String }]
}, { timestamps: true });

export default mongoose.models.BlogPost || mongoose.model('BlogPost', BlogPostSchema);
