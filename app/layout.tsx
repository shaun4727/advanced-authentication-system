import { auth } from '@/auth';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { SessionProvider } from 'next-auth/react';
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

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const session = await auth();

	return (
		<SessionProvider session={session}>
			<html lang="en">
				<body className={cn('antialiased', font.className)}>{children}</body>
			</html>
		</SessionProvider>
	);
}
