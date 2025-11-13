import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Button } from '../ui/button';

export const Social = () => {
	return (
		<div className="w-full flex items-center gap-2">
			<Button className="w-[48%] " size="lg" variant="outline" onClick={() => {}}>
				<FcGoogle className="h-5 w-5" />
			</Button>
			<Button className="w-[48%]" size="lg" variant="outline" onClick={() => {}}>
				<FaGithub className="h-5 w-5" />
			</Button>
		</div>
	);
};
