import React from 'react';
import {DUMMY_POSTS} from "@/DUMMY_DATA";
import {notFound} from "next/navigation";
import PaddingContainer from "@/components/layout/padding-container";
import PostHero from "@/components/post/post-hero";
import SocialLink from "@/components/elements/social-link";
import PostBody from "@/components/post/post-body";
import CTACard from "@/components/elements/cta-card";

export const generateStaticParams = async () => {
    return DUMMY_POSTS.map((post) => {
        return {
            slug: post.slug
        }
    })
}

const Page = ({params}: { params: { slug: string } }) => {
    const post = DUMMY_POSTS.find((post) => post.slug === params.slug)
    if (!post) {
        notFound()
    }

    return (
        <PaddingContainer>
            {/* container */}
            <div className="space-y-10">
                {/* Post Hero */}
                <PostHero post={post}/>
                {/* Post body and social share*/}
                <div className="flex flex-col gap-10 md:flex-row">
                    <div className="relative">
                        <div className="sticky flex items-center gap-2 top-20 md:flex-col">
                            <div className="font-medium md:hidden">Compartilhe:</div>
                            <SocialLink
                                isShareURL
                                platform="youtube"
                                link={`https://www.facebook.com/sharer/sharer.php?u=${`${process.env.NEXT_PUBLIC_SITE_URL}/post/${post.slug}`}`}/>
                            <SocialLink
                                isShareURL
                                platform="twitter"
                                link={`https://twitter.com/intent/tweet?url=${`${process.env.NEXT_PUBLIC_SITE_URL}/post/${post.slug}`}`}/>
                            <SocialLink
                                isShareURL
                                platform="linkedin"
                                link={`https://www.linkedin.com/shareArticle?mini=true&url=${`${process.env.NEXT_PUBLIC_SITE_URL}/post/${post.slug}`}`}/>
                        </div>
                    </div>

                    <PostBody body={post.body}/>
                </div>
                {/* CTA Card*/}
                <CTACard/>
            </div>

        </PaddingContainer>
    );
}

export default Page;
