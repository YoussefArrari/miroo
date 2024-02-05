import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import './globals.css';
import Nav from '@/components/landing page/nav';

const inter = Rubik({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Nav />
                {children}
            </body>
        </html>
    );
}
