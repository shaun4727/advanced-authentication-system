import { socialLoginMethod } from '@/actions/login';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Button } from '../ui/button';

export const Social = () => {
	const socialLogin = (provider: 'google' | 'github') => {
		socialLoginMethod(provider);
	};
	return (
		<div className="w-full flex items-center gap-2">
			<Button
				type="button"
				className="w-[48%] "
				size="lg"
				variant="outline"
				onClick={() => socialLogin('google')}
			>
				<FcGoogle className="h-5 w-5" />
			</Button>

			<Button
				className="w-[48%]"
				size="lg"
				variant="outline"
				onClick={() => {
					socialLoginMethod('github');
				}}
			>
				<FaGithub className="h-5 w-5" />
			</Button>
		</div>
	);
};
