import { notFound } from 'next/navigation';
import BlogPostClient from '@/components/BlogPostClient';
import blogPostsData from '@/data/blogPosts.json';

const allBlogPosts = blogPostsData.blogPosts;

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    // Find current blog post
    const currentIndex = allBlogPosts.findIndex(post => post.slug === slug);
    if (currentIndex === -1) {
        return notFound();
    }

    const currentPost = allBlogPosts[currentIndex];

    // Get previous and next blog posts
    const prevPost = currentIndex > 0 ? allBlogPosts[currentIndex - 1] : null;
    const nextPost = currentIndex < allBlogPosts.length - 1 ? allBlogPosts[currentIndex + 1] : null;

    // Get related blog posts (same category, excluding current)
    const relatedPosts = allBlogPosts
        .filter((post, index) => index !== currentIndex && post.category === currentPost.category)
        .slice(0, 3);

    return (
        <BlogPostClient 
            post={currentPost}
            relatedPosts={relatedPosts}
            prevPost={prevPost}
            nextPost={nextPost}
        />
    );
}

// Generate static params for all blog posts
export async function generateStaticParams() {
    return allBlogPosts.map((post) => ({
        slug: post.slug,
    }));
}
