'use client';

import { Icons } from '@repo/main/components/common/icons';
import { Alert, AlertIcon, AlertTitle } from '@repo/main/components/ui/alert';
import { Checkbox } from '@repo/main/components/ui/checkbox';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@repo/main/components/ui/form';
import { Input } from '@repo/main/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { RiErrorWarningFill } from '@remixicon/react';
import { Button } from '@repo/main/components/ui/button';
import { AlertCircle, Eye, EyeOff, LoaderCircleIcon } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { getSigninSchema, SigninSchemaType } from '../forms/signin-schema';

export default function Page() {
    const router = useRouter();
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const form = useForm<SigninSchemaType>({
        resolver: zodResolver(getSigninSchema()),
        defaultValues: {
            email: 'razzaghi.mahdi80@gmail.com',
            password: 'demo123',
            rememberMe: false,
        },
    });

    async function onSubmit(values: SigninSchemaType) {
        setIsProcessing(true);
        setError(null);

        try {
            router.push('/admin');
        } catch (err) {
            setError(
                err instanceof Error
                    ? err.message
                    : 'خطای غیرمنتظره‌ای رخ داد. لطفاً دوباره تلاش کنید.',
            );
        } finally {
            setIsProcessing(false);
        }
    }

    return (
        <div dir="rtl" className="flex justify-center items-center h-screen">
            <div className="max-w-md w-full p-6 mx-auto border border-gray-500 rounded-3xl">
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="block w-full space-y-5"
                    >
                        <div className="space-y-1.5 pb-3">
                            <h1 className="text-2xl font-semibold tracking-tight text-center">
                                ورود به حساب کاربری
                            </h1>
                        </div>

                        <Alert size="sm" close={false}>
                            <AlertIcon>
                                <RiErrorWarningFill className="text-primary" />
                            </AlertIcon>
                            <AlertTitle className="text-accent-foreground leading-6">
                                برای ورود آزمایشی از ایمیل{' '}
                                <span className="text-mono font-semibold">demo@kt.com</span>{' '}
                                و رمز عبور{' '}
                                <span className="text-mono font-semibold">demo123</span>{' '}
                                استفاده کنید.
                            </AlertTitle>
                        </Alert>

                        <div className="flex flex-col gap-3.5">
                            <Button variant="outline" type="button">
                                <Icons.googleColorful className="size-5! opacity-100!" />
                                ورود با گوگل
                            </Button>
                        </div>

                        <div className="relative py-1.5">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t" />
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-background px-2 text-muted-foreground">
                                    یا
                                </span>
                            </div>
                        </div>

                        {error && (
                            <Alert variant="destructive">
                                <AlertIcon>
                                    <AlertCircle />
                                </AlertIcon>
                                <AlertTitle>{error}</AlertTitle>
                            </Alert>
                        )}

                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>ایمیل</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="ایمیل خود را وارد کنید"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <div className="flex justify-between items-center gap-2.5">
                                        <FormLabel>رمز عبور</FormLabel>
                                        <Link
                                            href="/reset-password"
                                            className="text-sm font-semibold text-foreground hover:text-primary"
                                        >
                                            رمز عبور را فراموش کرده‌اید؟
                                        </Link>
                                    </div>

                                    <div className="relative">
                                        <Input
                                            placeholder="رمز عبور خود را وارد کنید"
                                            type={passwordVisible ? 'text' : 'password'}
                                            {...field}
                                        />

                                        <Button
                                            type="button"
                                            variant="ghost"
                                            mode="icon"
                                            size="sm"
                                            onClick={() => setPasswordVisible(!passwordVisible)}
                                            className="absolute end-0 top-1/2 -translate-y-1/2 h-7 w-7 me-1.5 bg-transparent!"
                                            aria-label={
                                                passwordVisible
                                                    ? 'مخفی کردن رمز عبور'
                                                    : 'نمایش رمز عبور'
                                            }
                                        >
                                            {passwordVisible ? (
                                                <EyeOff className="text-muted-foreground" />
                                            ) : (
                                                <Eye className="text-muted-foreground" />
                                            )}
                                        </Button>
                                    </div>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <div className="flex items-center space-x-2">
                            <FormField
                                control={form.control}
                                name="rememberMe"
                                render={({ field }) => (
                                    <>
                                        <Checkbox
                                            id="remember-me"
                                            checked={field.value}
                                            onCheckedChange={(checked) =>
                                                field.onChange(!!checked)
                                            }
                                        />
                                        <label
                                            htmlFor="remember-me"
                                            className="text-sm leading-none text-muted-foreground"
                                        >
                                            مرا به خاطر بسپار
                                        </label>
                                    </>
                                )}
                            />
                        </div>

                        <div className="flex flex-col gap-2.5">
                            <Button type="submit" disabled={isProcessing}>
                                {isProcessing && (
                                    <LoaderCircleIcon className="size-4 animate-spin" />
                                )}
                                ورود
                            </Button>
                        </div>

                        <p className="text-sm text-muted-foreground text-center">
                            حساب کاربری ندارید؟{' '}
                            <Link
                                href="/signup"
                                className="text-sm font-semibold text-foreground hover:text-primary"
                            >
                                ثبت‌نام
                            </Link>
                        </p>
                    </form>
                </Form>
            </div>
        </div>
    );
}
