import BlogListClient from '@/components/BlogListClient';
import dbConnect from '@/lib/db';
import BlogPost from '@/models/BlogPost';

// Disable caching for dynamic data
export const dynamic = 'force-dynamic';

async function getBlogPosts() {
	try {
		await dbConnect();
		const posts = await BlogPost.find({}).sort({ date: -1 }).lean();
		// Convert _id and dates to serializable format
		return posts.map(post => ({
			...post,
			_id: post._id.toString(),
			date: post.date instanceof Date ? post.date.toISOString() : post.date,
			createdAt: post.createdAt instanceof Date ? post.createdAt.toISOString() : post.createdAt,
			updatedAt: post.updatedAt instanceof Date ? post.updatedAt.toISOString() : post.updatedAt,
		}));
	} catch (error) {
		console.error('Failed to fetch blog posts:', error);
		return [];
	}
}

export default async function Blog() {
	const blogPosts = await getBlogPosts();
	return (
		<BlogListClient initialPosts={blogPosts} />
	);
}
