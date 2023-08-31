import React from 'react';
import PaddingContainer from "@/components/layout/padding-container";
import siteConfig from "@/config/site";
import Link from "next/link";
import SocialLink from "@/components/elements/social-link";

const Footer = () => {
    return (
        <div className="py-8 mt-10 border-t">
            <PaddingContainer>
                <div>
                    <h2 className="text-3xl font-bold">{siteConfig.siteName}</h2>
                    <p className="max-w-md mt-2 text-lg text-neutral-700">{siteConfig.description}</p>
                </div>

                {/* Social and currentAt */}
                <div className="mt-6 flex justify-between gap-4">
                    <div>
                        <div className="font-medium text-lg">Link</div>
                        <div className="flex items-center gap-2 text-neutral-600 mt-2">
                            <SocialLink platform="twitter" link={siteConfig.socialLinks.twitter}/>
                            <SocialLink platform="instagram" link={siteConfig.socialLinks.instagram}/>
                            <SocialLink platform="github" link={siteConfig.socialLinks.github}/>
                            <SocialLink platform="youtube" link={siteConfig.socialLinks.youtube}/>
                            <SocialLink platform="linkedin" link={siteConfig.socialLinks.linkedin}/>
                        </div>
                    </div>
                    <div>
                        <div className="text-sm text-neutral-400">Currently At</div>
                        <div className="bg-white shadow-md rounded-md py-2 px-3 flex items-center gap-2">
                            <div className="bg-emerald-400 rounded-full w-2 h-2"/>
                            {siteConfig.currentAt}
                        </div>
                    </div>
                </div>
                {/* Bottom Section */}
                <div className="flex py-3 border-t gap-4 flex-wrap items-center justify-between mt-16">
                    <div className="text-sm text-neutral-400">
                        All rights reserved | Copyright {new Date().getFullYear()}
                    </div>
                    <div className="text-sm">
                        2023
                    </div>
                </div>
            </PaddingContainer>
        </div>
    );
}

export default Footer;
