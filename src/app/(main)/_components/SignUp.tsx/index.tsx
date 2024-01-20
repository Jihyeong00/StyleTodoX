'use client';

import { z } from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import formSchema from "@/app/(main)/_components/SignUp.tsx/schema";
import { S } from './styles';
import { stylex } from '@stylexjs/stylex';

const SignUpForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit: SubmitHandler<{
    email: string;
    password: string;
    confirmPassword: string;
  }> = (data, event) => {
    const { email, password, confirmPassword } = data;
  };

  return (
    <Form {...form}>
      <form
      {...stylex.props(S.form)}
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={'font-bold capitalize'}>email</FormLabel>
              <FormControl>
                <Input placeholder="email" {...field} />
              </FormControl>
              <FormDescription>This is Your Email.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={'font-bold capitalize'}>password</FormLabel>
              <FormControl>
                <Input placeholder="password" {...field} />
              </FormControl>
              <FormDescription>This is your private password.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={'font-bold capitalize'}>
                password Confirm
              </FormLabel>
              <FormControl>
                <Input placeholder="PasswordConfirm" {...field} />
              </FormControl>
              <FormDescription>Check Your PassWord Confirm</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className={'w-full mt-2'}>SignUp</Button>
      </form>
    </Form>
  );
};
export default SignUpForm;
