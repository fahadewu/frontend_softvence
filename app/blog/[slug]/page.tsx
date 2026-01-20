import { notFound } from 'next/navigation';
import BlogPostClient from '@/components/BlogPostClient';
import dbConnect from '@/lib/db';
import BlogPost from '@/models/BlogPost';

// Force dynamic rendering since we are fetching from DB
export const dynamic = 'force-dynamic';

async function getBlogPost(slug: string) {
    try {
        await dbConnect();
        const post = await BlogPost.findOne({ slug }).lean();
        if (!post) return null;

        // Serialize
        return {
            ...post,
            _id: post._id.toString(),
            date: post.date instanceof Date ? post.date.toISOString() : post.date,
            createdAt: post.createdAt instanceof Date ? post.createdAt.toISOString() : post.createdAt,
            updatedAt: post.updatedAt instanceof Date ? post.updatedAt.toISOString() : post.updatedAt,
        };
    } catch (error) {
        return null;
    }
}

async function getRelatedPosts(category: string, currentSlug: string) {
    try {
        await dbConnect();
        const posts = await BlogPost.find({
            category,
            slug: { $ne: currentSlug }
        }).limit(3).lean();

        return posts.map(post => ({
            ...post,
            _id: post._id.toString(),
            date: post.date instanceof Date ? post.date.toISOString() : post.date,
            createdAt: post.createdAt instanceof Date ? post.createdAt.toISOString() : post.createdAt,
            updatedAt: post.updatedAt instanceof Date ? post.updatedAt.toISOString() : post.updatedAt,
        }));
    } catch (error) {
        return [];
    }
}

async function getPrevNextPosts(slug: string) {
    // In a real DB, typically sort by date and find > or < current date.
    // For simplicity, we might just fetch all and find index, or query by date.
    // Let's fetch all sorted by date to preserve the "ordering" logic of JSON for now, or improve it.
    // Fetching all IDs/Slugs might be efficient enough for small blog.
    try {
        await dbConnect();
        const allPosts = await BlogPost.find({}, 'slug title').sort({ date: -1 }).lean();
        const currentIndex = allPosts.findIndex(p => p.slug === slug);

        if (currentIndex === -1) return { prevPost: null, nextPost: null };

        const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
        const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

        return {
            prevPost: prevPost ? { ...prevPost, _id: prevPost._id.toString() } : null,
            nextPost: nextPost ? { ...nextPost, _id: nextPost._id.toString() } : null
        };
    } catch (error) {
        return { prevPost: null, nextPost: null };
    }
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    const currentPost = await getBlogPost(slug);
    if (!currentPost) {
        return notFound();
    }

    const relatedPosts = await getRelatedPosts(currentPost.category, slug);
    const { prevPost, nextPost } = await getPrevNextPosts(slug);

    return (
        <BlogPostClient
            post={currentPost}
            relatedPosts={relatedPosts}
            prevPost={prevPost}
            nextPost={nextPost}
        />
    );
}

export async function generateStaticParams() {
    // Optional: Pre-render some paths if needed, or stick to dynamic
    try {
        await dbConnect();
        const posts = await BlogPost.find({}, 'slug').lean();
        return posts.map((post) => ({
            slug: post.slug,
        }));
    } catch (e) {
        return [];
    }
}
