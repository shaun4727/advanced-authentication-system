import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const font = Poppins({
	subsets: ['latin'],
	weight: ['600'],
});

export const metadata: Metadata = {
	title: 'Advanced Authentication System',
	description: 'A well managed authentication',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={cn('antialiased', font.className)}>{children}</body>
		</html>
	);
}
