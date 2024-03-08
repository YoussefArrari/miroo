'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

const RedirectButton = () => {
    const router = useRouter();
    return (
        <button
            onClick={() => router.push('/home/1')}
            className="bg-stone-900 px-4 py-2 text-white rounded-full text-sm font-medium"
        >
            Start now
        </button>
    );
};

export default RedirectButton;
