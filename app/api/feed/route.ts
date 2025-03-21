import { NextResponse } from "next/server";

export async function GET() {
    try {
        console.log("Fetching live feed from NewsAPI...");

        const API_KEY = process.env.API_KEY;
        const API_URL = `https://finnhub.io/api/v1/news?category=general&token=${API_KEY}`;

        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }

        const data = await response.json();

        interface NewsItem {
            id: string;
            headline: string;
            summary: string;
            url: string;
            source: string;
            image?: string;
            datetime: number;
        }

        interface FormattedNewsItem {
            id: string;
            title: string;
            description: string;
            url: string;
            source: string;
            image: string | null;
            datetime: string;
        }

        const formattedData: FormattedNewsItem[] = data.map((item: NewsItem) => ({
            id: item.id,
            title: item.headline,
            description: item.summary || "No description available.",
            url: item.url,
            source: item.source,
            image: item.image || null, // Some articles may not have an image
            datetime: new Date(item.datetime * 1000).toLocaleString(), // Convert timestamp to readable format
        }));

        return NextResponse.json({ success: true, data: formattedData }, { status: 200 });

    } catch (error) {
        console.error("Error fetching finance feed:", error);
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
        return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
    }
}