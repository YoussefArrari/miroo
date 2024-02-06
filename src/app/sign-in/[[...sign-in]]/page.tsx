'use client';
import { SignIn } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/button';
import Image from 'next/image';

export default function Page() {
    const router = useRouter();

    return (
        <div className="w-sceen h-screen flex flex-col bg-[#f3f3f2]">
            <div className="w-screen h-24  ">
                <div className="w-full h-full flex justify-between items-center px-12 max-w-[1640px] mx-auto  ">
                    <div className="flex items-end gap-1 ">
                        <Image
                            src="/logo.svg"
                            width={40}
                            height={40}
                            alt="logo"
                        />{' '}
                        <span className="text-xl font-bold ">Miroo</span>
                    </div>
                    <Button
                        size="small"
                        content="close"
                        type="icon"
                        onClick={() => {
                            router.push('/');
                        }}
                    />
                </div>
            </div>
            <div className="w-screen h-full  flex justify-center items-center ">
                <SignIn />
            </div>
        </div>
    );
}
