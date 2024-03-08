'use client';
import { motion } from 'framer-motion';
import { Skeleton } from './ui/skeleton';
interface Props {
    size: string;
    content: string;
    type?: string;
    onClick?: () => void;
}
import Image from 'next/image';

export const Button: React.FC<Props> = ({ size, content, type, onClick }) => {
    return (
        <>
            {size == 'small' && type == 'primary' && (
                <motion.div
                    whileTap={{ scale: 0.95 }}
                    className="w-fit h-fit relative "
                    onClick={onClick}
                >
                    <button className="bg-[#5260DD] z-20 relative  text-white px-6 rounded-full py-2 text-xs font-semibold">
                        {content}
                    </button>
                    <div className="z-10 w-full h-full  absolute top-1 bg-[#424db2] rounded-full" />
                </motion.div>
            )}
            {size == 'large' && type == 'primary' && (
                <motion.div
                    whileTap={{ scale: 0.98 }}
                    className="w-fit h-fit relative "
                >
                    <button className="bg-[#5260DD] z-20 relative  text-white px-10 rounded-full py-2 text-base font-semibold">
                        {content}
                    </button>
                    <div className="z-10 w-full h-full  absolute top-1 bg-[#424db2] rounded-full" />
                </motion.div>
            )}
            {size == 'large' && type == 'primaryDiasbled' && (
                <motion.div
                    whileTap={{ scale: 0.98 }}
                    className="w-fit h-fit relative "
                >
                    <button className="bg-[#E1E1E1] z-20 relative  text-[#A6A6A6] px-10 rounded-full py-2 text-base font-semibold">
                        {content}
                    </button>
                    <div className="z-10 w-full h-full  absolute top-1 bg-[#A6A6A6] rounded-full" />
                </motion.div>
            )}
            {size == 'small' && type == 'secondary' && (
                <motion.button
                    whileTap={{ scale: 0.95 }}
                    className=" text-stone-900  text-xs font-medium hover:underline"
                    type="button"
                    onClick={onClick}
                >
                    {content}
                </motion.button>
            )}
            {size == 'large' && type == 'icon' && (
                <motion.button
                    whileTap={{ scale: 0.95 }}
                    className=" text-stone-900  text-xs font-medium hover:underline"
                    type="button"
                    onClick={onClick}
                >
                    <Image
                        src={`/${content}.svg`}
                        width={20}
                        height={20}
                        alt="arrow"
                    />
                </motion.button>
            )}
            {size == 'small' && type == 'icon' && (
                <motion.button
                    whileTap={{ scale: 0.95 }}
                    className=" text-stone-900  text-xs font-medium hover:underline"
                    type="button"
                    onClick={onClick}
                >
                    <Image
                        src={`/${content}.svg`}
                        width={20}
                        height={20}
                        alt="arrow"
                    />
                </motion.button>
            )}

            {size == 'small' && type == 'loading' && (
                <Skeleton className="w-[150px] h-[40px] rounded-full bg-stone-300" />
            )}
        </>
    );
};
