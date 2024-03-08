'use client';
import { Dialog } from '@prisma/client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface dialogProps {
    dialog: Dialog;
}

const DialogContent: React.FC<dialogProps> = ({ dialog }) => {
    const [showQuestion, setShowQuestion] = useState(true);
    return (
        <motion.div className="flex gap-4 ">
            <motion.div layout>
                <Image src="/messanger.png" alt="play" width={60} height={60} />
            </motion.div>
            <motion.div
                layout
                className=" h-full border p-4 max-w-[500px] rounded-3xl shadow-lg"
            >
                {dialog.content}
            </motion.div>
        </motion.div>
    );
};
export default DialogContent;
