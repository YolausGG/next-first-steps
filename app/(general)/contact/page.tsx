import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Contact',
    description: "This is the company's contact page",
    keywords: ['Contact Page', 'Phone number', 'Email']
};

export default function ContactPage() {

    return (
        <main className="flex flex-col items-center p-24">
            <span className="text-7xl">Contact Page</span>
        </main>
    )
}