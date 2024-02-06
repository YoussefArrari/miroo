'use client';
import Image from 'next/image';
import { Button } from '../button';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

const Nav: React.FC = () => {
    const { user, isLoaded } = useUser();
    const router = useRouter();
    const handleClick = () => {
        router.push('/home');
    };
    return (
        <div className="fixed  backdrop-blur-lg z-40 top-0 h-24  border-b border-[#e8e8e8] w-screen">
            <div className="w-full h-full flex justify-between items-center px-12 max-w-[1640px] mx-auto ">
                <div className="flex items-end gap-1 ">
                    <Image src="/logo.svg" width={40} height={40} alt="logo" />
                    <span className="text-xl font-bold ">Miroo</span>
                </div>
                <div className="flex gap-10 text-xs font-medium">
                    <div className="cursor-pointer">Courses</div>
                    <div className="cursor-pointer">Features</div>
                    <div className="cursor-pointer">About</div>
                    <div className="cursor-pointer">Contact</div>
                </div>
                <div className="flex gap-6">
                    {user && (
                        <>
                            <Button
                                size="small"
                                content="go to Dashboard"
                                type="primary"
                                onClick={handleClick}
                            />
                        </>
                    )}
                    {isLoaded == false && (
                        <Button size="small" content="Loading" type="loading" />
                    )}
                    {isLoaded == true && user == null && (
                        <>
                            {' '}
                            <Button
                                size="small"
                                content="Sign Up"
                                type="secondary"
                                onClick={() => router.push('/sign-up')}
                            />
                            <Button
                                size="small"
                                content="Log In"
                                type="primary"
                                onClick={() => router.push('/sign-in')}
                            />
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Nav;
