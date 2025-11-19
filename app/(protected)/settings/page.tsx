'use client';

import { settings } from '@/actions/action';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { SettingsSchema } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSession } from 'next-auth/react';
import { useState, useTransition } from 'react';
import { Form, useForm } from 'react-hook-form';
import z from 'zod';

const SettingsPage = () => {
	const [isPending, startTransition] = useTransition();
	const { update } = useSession();
	const [error, setError] = useState<string | undefined>();
	const [success, setSuccess] = useState<string | undefined>();

	const form = useForm<z.infer<typeof SettingsSchema>>({
		resolver: zodResolver(SettingsSchema),
		defaultValues: {
			name: '',
		},
	});

	const onSubmit = (values: z.infer<typeof SettingsSchema>) => {
		startTransition(() => {
			settings(values)
				.then((data) => {
					if (data?.success) {
						update();
						setSuccess(data.success);
					}

					if (data?.error) {
						setError(data.error);
					}
				})
				.catch(() => setError('Something went wrong!'));
		});
	};

	return (
		<Card className="w-[600px]">
			<CardHeader>
				<p className="text-2xl font-semibold text-center">Settings</p>
			</CardHeader>
			<CardContent>
				<Form {...form}>
					<form className="space-y-6" onClick={form.handleSubmit(onSubmit)}>
						<FormField
							control={form.control}
							name="name"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Name</FormLabel>
									<FormControl>
										<Input {...field} placeholder="John Doe" disabled={isPending} />
									</FormControl>
								</FormItem>
							)}
						/>
					</form>
				</Form>
			</CardContent>
		</Card>
	);
};

export default SettingsPage;
