'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SignOutButton } from '@clerk/nextjs';
const SideNav: React.FC = () => {
    const navTabs = [
        { name: 'home', link: '/home' },
        { name: 'Courses', link: '/courses' },
        { name: 'Notes', link: '/notes' },
        { name: 'Practice', link: '/practice' },
        { name: 'Profile', link: '/profile' },
    ];
    const pathname = usePathname();

    const isTabHighlighted = (tabLink: string) => {
        // Extract the first segment of the pathname
        const pathSegments = pathname.split('/');
        const tabPath = pathSegments[1];
        // Check if the tab's link matches the first segment of the pathname
        return tabLink === `/${tabPath}`;
    };

    return (
        <div className="w-[288px]  h-screen  absolute p-4 left-5 ">
            <div className="w-full h-full bg-[#171718] rounded-2xl shadow-xl flex flex-col p-2 justify-between">
                <div className="w-full h-[10%]  flex items-center justify-center ">
                    {' '}
                    <div className="flex items-end gap-1 text-white cursor-pointer ">
                        <Image
                            src="/logo.svg"
                            width={50}
                            height={50}
                            alt="logo"
                        />
                        <span className="text-2xl font-bold ">Miroo</span>
                    </div>
                </div>
                <div className="w-full h-[60%] pr-4  pt-8">
                    <ul className="flex flex-col gap-2  ">
                        {navTabs.map((tab, index) => (
                            <Link
                                href={tab.link}
                                key={index}
                                className="w-full flex justify-end  "
                            >
                                <li className="text-white text-base relative w-[80%]  font-semibold cursor-pointer  p-2 flex justify-start pl-4 ">
                                    <div className="flex gap-2 z-40">
                                        {' '}
                                        <Image
                                            src={`/icons/${tab.name}.png `}
                                            width={25}
                                            height={20}
                                            alt="logo"
                                        />
                                        {tab.name}
                                    </div>
                                    {isTabHighlighted(tab.link) && (
                                        <motion.div
                                            transition={{
                                                type: 'spring',
                                                stiffness: 60,
                                            }}
                                            layoutId="active"
                                            className="absolute top-0 left-0 rounded-2xl h-full w-full z-10 bg-[#5260DD] "
                                        />
                                    )}
                                </li>
                            </Link>
                        ))}
                    </ul>
                </div>
                <div className="w-full h-[20%]  items-end justify-center pb-4 p-2 flex">
                    <SignOutButton>
                        <motion.div
                            whileTap={{ scale: 0.97 }}
                            className="relative w-[80%] cursor-pointer"
                        >
                            <div className="text-black  z-40 relative bg-white flex justify-center wf-full  p-2  rounded-2xl font-semibold text-sm items-center">
                                LogOut
                            </div>
                            <div className="z-10 w-full h-full  absolute top-1 bg-[#c2c2c2] rounded-full" />
                        </motion.div>
                    </SignOutButton>
                </div>
            </div>
        </div>
    );
};

export default SideNav;
