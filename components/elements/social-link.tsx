import React from 'react';
import {Facebook, Github, Linkedin, Twitch, Twitter, Youtube} from "lucide-react";
import Link from "next/link";

const SocialLink = ({platform, link, isShareURL}: { platform: string, link: string, isShareURL?: boolean }) => {

    const getIcon = (platform: string) => {
        switch (platform) {
            case "Facebook":
                return <Facebook size="18"/>
            case "twitter":
                return <Twitter size="18"/>
            case "youtube":
                return <Youtube size="18"/>
            case "linkedin":
                return <Linkedin size="18"/>
            case "github":
                return <Github size="18"/>
        }
    }

    return (
        <div>
            <Link href={link}>
                <div className={`${isShareURL ? 
                    "py-2 px-3 bg-neutral-200 rounded-md text-neutral-600 hover:bg-neutral-600 hover:text-neutral-100 duration-100 ease-in-out transition-colors" : ""}`}>
                    {getIcon(platform)}
                </div>
            </Link>
        </div>
    );
}

export default SocialLink;
