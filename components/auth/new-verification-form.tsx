'use client';

import { BeatLoader } from 'react-spinners';
import { CardWrapper } from './card-wrapper';

export const NewVerificationForm = () => {
	return (
		<CardWrapper
			headerLabel="Confirming your verification"
			backButtonLabel="Back to login"
			backButtonHref="/auth/login"
		>
			<div className="flex items-center w-full justify-center">
				<BeatLoader />
			</div>
		</CardWrapper>
	);
};
