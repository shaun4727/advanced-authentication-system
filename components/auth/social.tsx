import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Button } from '../ui/button';

export const Social = () => {
	return (
		<div className="w-full flex flex-col items-center gap-y-2">
			<Button className="w-full" size="lg" variant="default" onClick={() => {}}>
				<FcGoogle className="h-5 w-5" />
			</Button>
			<Button className="w-full" size="lg" variant="auth" onClick={() => {}}>
				<FaGithub className="h-5 w-5" />
			</Button>
		</div>
	);
};
