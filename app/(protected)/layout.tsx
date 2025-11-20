import { Navbar } from './_components/navbar';

interface ProtectedLayoutProps {
	children: React.ReactNode;
}

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
	return (
		<div className="p-5 w-full flex flex-col gap-y-10 items-center justify-center bg-[radial-gradient(ellipse_at_top,_#38bdf8,_#1e3a8a)]">
			<Navbar />
			{children}
		</div>
	);
};

export default ProtectedLayout;
