import * as z from 'zod';

export const NewPasswordSchema = z.object({
	password: z.string().min(6, {
		message: 'Minimum of 6 characters required',
	}),
});

export const LoginSchema = z.object({
	email: z.email({ message: 'Please provide valid email address' }),
	password: z.string().min(1, {
		message: 'Password is required',
	}),
});
export const ResetSchema = z.object({
	email: z.email({ message: 'Please provide valid email address' }),
});

export const RegisterSchema = z.object({
	email: z.email({ message: 'Please provide valid email address' }),
	password: z.string().min(6, {
		message: 'Minimum 6 character is required',
	}),
	name: z.string().min(1, {
		message: 'Name is required',
	}),
});
