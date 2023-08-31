export interface SiteConfig {
    siteName: string;
    description: string;
    currentAt: string;
    socialLinks: {
        twitter: string;
        youtube: string;
        github: string;
        linkedin: string;
        instagram: string;
    }
}

const siteConfig: SiteConfig = {
    siteName: "Explorer",
    currentAt: "Italy",
    description: "Um blog sobre uma mente não entendida que mergulha no profundo dos questionamentos sobre si e do completo existente.",
    socialLinks: {
        github: "https://github.com/",
        instagram: "https://www.instagram.com/",
        linkedin: "https://www.linkedin.com/",
        twitter: "https://www.twitter.com/",
        youtube: "https://www.youtube.com/"
    }
}

export default siteConfig;
