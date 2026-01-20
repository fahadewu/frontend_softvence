export interface AboutData {
    hero: {
        title1: string;
        title2: string;
        cta: {
            text: string;
            link: string;
        };
    };
    whoWeAre: {
        heading: string;
        description: string;
        counters: {
            label: string;
            value: number;
            suffix: string;
            isPrimary?: boolean;
        }[];
    };
    whyChooseUs: {
        heading: string;
        subHeading: string;
        cards: {
            id: string;
            title: string;
            description: string;
            image: string;
        }[];
    };
    team: {
        heading: string;
        subHeading: string;
        description: string;
        images: string[];
    };
    aboutImage: string;
    awards: {
        heading: string;
        subHeading: string;
        items: {
            title: string;
            type: 'fiverr' | 'upwork' | 'clutch';
        }[];
    };
    portfolioIntro: {
        heading: string;
    };
    marqueeLogos: string[];
}
