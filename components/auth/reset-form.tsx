'use client';

import { reset } from '@/actions/reset';
import { ResetSchema } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import z from 'zod';
import { FormError } from '../form-error';
import { FormSuccess } from '../form-success';
import { Button } from '../ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { CardWrapper } from './card-wrapper';

export const ResetForm = () => {
	const [isPending, startTansition] = useTransition();
	const [error, setError] = useState<string | undefined>('');
	const [success, setSuccess] = useState<string | undefined>('');

	const form = useForm<z.infer<typeof ResetSchema>>({
		resolver: zodResolver(ResetSchema),
		defaultValues: {
			email: '',
		},
	});

	const onSubmit = (values: z.infer<typeof ResetSchema>) => {
		startTansition(async () => {
			try {
				setError('');
				setSuccess('');

				const res = await reset(values);
				// if (res) {
				// 	setError(res?.error);
				// 	setSuccess(res?.success);
				// }
			} catch (err) {
				console.log(err);
			}
		});
	};

	return (
		<CardWrapper
			headerLabel="Forgot your password?"
			backButtonLabel="Back to login?"
			backButtonHref="/auth/login"
			showSocial
		>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
					<div className="space-y-4">
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormItem>
										<FormLabel>Email</FormLabel>
										<FormControl>
											<Input
												{...field}
												placeholder="john.doe@example.com"
												type="email "
												disabled={isPending}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								</FormItem>
							)}
						/>
					</div>
					<FormError message={error} />
					<FormSuccess message={success} />
					<Button type="submit" className="w-full" disabled={isPending}>
						Send reset Email
					</Button>
				</form>
			</Form>
		</CardWrapper>
	);
};
