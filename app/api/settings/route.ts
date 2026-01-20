import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const settingsFilePath = path.join(process.cwd(), 'data', 'settings.json');

export async function GET() {
    try {
        const fileContent = fs.readFileSync(settingsFilePath, 'utf8');
        const settings = JSON.parse(fileContent);
        return NextResponse.json(settings);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch settings' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { maintenance } = body;

        if (!maintenance) {
            return NextResponse.json({ error: 'Invalid settings data' }, { status: 400 });
        }

        const fileContent = fs.readFileSync(settingsFilePath, 'utf8');
        const settings = JSON.parse(fileContent);

        const updatedSettings = {
            ...settings,
            maintenance: {
                ...settings.maintenance,
                ...maintenance
            }
        };

        fs.writeFileSync(settingsFilePath, JSON.stringify(updatedSettings, null, 2));

        return NextResponse.json(updatedSettings);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to update settings' }, { status: 500 });
    }
}
