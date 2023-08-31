import React from 'react';
import {Post} from "@/types/collection";
import PostContent from "@/components/post/post-content";
import Image from "next/image";

interface PostHeroProps {
    post: Post;
}

const PostHero = ({post}: PostHeroProps) => {
    return (
        <div>
            <PostContent post={post} isPostPage/>
            <Image className="rounded-md object-cover h-[300px] md:h-[500px] mt-6" src={post.image} alt={post.title} width={1280} height={500}/>
        </div>
    );
}

export default PostHero;
