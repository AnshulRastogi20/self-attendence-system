'use client';

import { signIn } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function SignIn() {
    const router = useRouter();

    const handleGoogleSignIn = async () => {
        try {
            const result = await signIn('google', {
                redirect: true,
                callbackUrl: '/',
            });
        } catch (error) {
            console.error('Error signing in:', error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-md">
                <div className="text-center">
                    <h2 className="mt-6 text-3xl font-bold text-gray-900">
                        Sign in to your account
                    </h2>
                    <p className="mt-2 text-sm text-gray-600">
                        Use your Google account to continue
                    </p>
                </div>

                <div className="mt-8">
                    <button
                        onClick={handleGoogleSignIn}
                        className="w-full flex items-center justify-center gap-3 px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        <Image
                            src="/google.svg"
                            alt="Google Logo"
                            width={20}
                            height={20}
                        />
                        Sign in with Google
                    </button>
                </div>
            </div>
        </div>
    );
}