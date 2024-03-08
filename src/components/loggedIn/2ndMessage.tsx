'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface dialogProps {
    message: String;
    index: number;
}

const SndMessage: React.FC<dialogProps> = ({ message, index }) => {
    return (
        <motion.div className="flex gap-4  ">
            {index == 0 ? (
                <motion.div
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <Image
                        src="/messanger.png"
                        alt="play"
                        width={60}
                        height={60}
                    />
                </motion.div>
            ) : (
                <div className="w-[60px] h-[60px] "></div>
            )}

            <motion.div
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className=" h-full p-4 max-w-[500px] rounded-3xl shadow-lg bg-white  text-sm font-semibold text-stone-900"
            >
                {message}
            </motion.div>
        </motion.div>
    );
};
export default SndMessage;
