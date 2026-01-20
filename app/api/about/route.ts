import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import About from '@/models/About';
import { AboutData } from '@/types/about';

const initialAboutData: AboutData = {
    hero: { title1: '', title2: '', cta: { text: '', link: '' } },
    whoWeAre: { heading: '', description: '', counters: [] },
    whyChooseUs: { heading: '', subHeading: '', cards: [] },
    team: { heading: '', subHeading: '', description: '', images: [] },
    aboutImage: '',
    awards: { heading: '', subHeading: '', items: [] },
    portfolioIntro: { heading: '' },
    marqueeLogos: []
};

export async function GET() {
    try {
        await dbConnect();
        let aboutData = await About.findOne().sort({ createdAt: -1 });

        if (!aboutData) {
            return NextResponse.json(initialAboutData);
        }

        return NextResponse.json(aboutData);
    } catch (error) {
        console.error('Database Error:', error);
        return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
    try {
        await dbConnect();
        const body = await request.json();

        // Upsert the single document
        const updated = await About.findOneAndUpdate(
            {},
            body,
            { new: true, upsert: true, setDefaultsOnInsert: true }
        );

        return NextResponse.json({ message: 'Data saved successfully', data: updated });
    } catch (error) {
        console.error('Database Error:', error);
        return NextResponse.json({ error: 'Failed to save data' }, { status: 500 });
    }
}
