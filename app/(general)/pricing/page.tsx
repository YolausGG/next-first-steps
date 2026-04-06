import { Metadata } from "next";


export const metadata: Metadata = {
    title: 'Pricing Page',
    description: 'Pricing Page',
    keywords: ['pricing']
};

export default function PracingPage() {

    return (
        <main className="flex flex-col items-center p-24">
            <span className="text-7xl">Pricing Page</span>
        </main>
    )
}