'use server';

import { getUserByEmail } from '@/data/user';
import { sendPasswordResetEmail } from '@/lib/mail';
import { generatePasswordResetToken } from '@/lib/tokens';
import { ResetSchema } from '@/schemas';
import z from 'zod';

export const reset = async (values: z.infer<typeof ResetSchema>) => {
	const validationFields = ResetSchema.safeParse(values);
	if (!validationFields.success) {
		return { error: 'Invalid email!' };
	}
	const { email } = validationFields.data;

	const existingUser = await getUserByEmail(email);
	if (!existingUser) {
		return { error: 'Email not found!' };
	}
	const PasswordResetToken = await generatePasswordResetToken(email);
	await sendPasswordResetEmail(PasswordResetToken.email, PasswordResetToken.token);
	return { success: 'Reset email sent!' };
};
