import * as z from 'zod';

export const LoginSchema = z.object({
	email: z.email({ message: 'Please provide valid email address' }),
	password: z.string().min(1, {
		message: 'Password is required',
	}),
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
