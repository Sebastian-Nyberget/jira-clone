"use client";

import { z } from 'zod';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { 
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
 } from '@/components/ui/card'
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';

import { registerSchema } from '../schemas';
import { useRegister } from '../api/use-register';

export const SignUpCard = () => {
  const { mutate, isPending } = useRegister();

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  
  const onSubmit = (values: z.infer<typeof registerSchema>) => {
    mutate({ json: values });
  }; 

    return (
        <Card className='w-full h-full md:w[487px] border-none shadow-none'>
          <CardHeader className='flex items-center justify-center text-center p-7'>
            <CardTitle className='text-2xl'>
                Registrer deg
            </CardTitle>
            <CardDescription>
              Ved å registrere deg godtar du vår {" "}
              <Link href="/privacy">
                <span className='text-blue-700'>Personvernerklæring</span>
              </Link>{" "}
              and{" "}
              <Link href="/vilkår">
                <span className='text-blue-700'>Vilkår for Bruk</span>
              </Link>
            </CardDescription>
          </CardHeader>
          <div className='px-7'>
            <Separator />
          </div>
          <CardContent className='p-7'>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
              <FormField 
                  name="name"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                        {...field}
                          type='text'
                          placeholder='Navn'
                          />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField 
                  name="email"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                        {...field}
                          type='email'
                          placeholder='Email adresse'
                          />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField 
                  name="password"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                        {...field}
                          type='password'
                          placeholder='Passord'
                          />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                  )}
                />
                <Button disabled={isPending} size="lg" className='w-full'>
                  Registrer
                </Button>
              </form>
            </Form>
          </CardContent>
          <div className='px-7'>
            <Separator />
          </div>
          <CardContent className='p-7 flex flex-col gap-y-4'>
            <Button
              disabled={isPending} 
              variant={'secondary'}
              size="lg"
              className='w-full'
            >
                <FcGoogle className='mr-2 size-5'/>
                Login with Google
            </Button>
            <Button
              disabled={isPending} 
              variant={'secondary'}
              size="lg"
              className='w-full'
            >
                <FaFacebook className='mr-2 size-5' />
                Login with Facebook
            </Button>
          </CardContent>
          <div className='px-7'>
            <Separator />
          </div>
          <CardContent className='p-7 flex items-center justify-center'>
            <p>
              Har du allerede en bruker?
              <Link href="/sign-in">
                <span className='text-blue-700'>&nbsp;Login</span>
              </Link>
            </p>
          </CardContent>
        </Card>
    );
};