import React from 'react';
import {DUMMY_POSTS} from "@/DUMMY_DATA";
import PostContent from "@/components/post/post-content";
import PaddingContainer from "@/components/layout/padding-container";
import PostList from "@/components/post/post-list";

export const generateStaticParams = async () => {
    return DUMMY_POSTS.map((category) => {
        return {
            category: category.slug
        }
    })
}


const Page = ({params}: { params: { category: string } }) => {
    const posts = DUMMY_POSTS.filter((post) => post.category.title.toLowerCase() === params.category)
    const category = DUMMY_POSTS.find((category) => category.slug === params.category)

    return (
        <PaddingContainer>
            <div className="mb-10">
                <h1 className="text-4xl font-semibold">{category?.title}</h1>
                <p className="text-lg text-neutral-600">{category?.description}</p>
            </div>
            <PostList posts={posts}/>
        </PaddingContainer>
    );
}

export default Page;
