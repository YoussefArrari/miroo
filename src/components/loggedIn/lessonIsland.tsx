'use client';

import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from '@/components/ui/hover-card';
import Image from 'next/image';
import Lesson from './lesson';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface lessonIslandProps {
    title: string;
    lessonId: string;
    index: number;
    length: number;
}

const LessonIsland: React.FC<lessonIslandProps> = ({
    title,
    lessonId,
    index,
    length,
}) => {
    const space = [
        'left-[10px]',
        'left-[26px]',
        'left-[14px]',
        'left-[5px]',
        'left-[20px]',
        'left-[5px]',
    ];
    const active = false;
    length = length - 1;
    const [isOpened, setIsOpened] = useState(false);

    function closeLesson() {
        setIsOpened(false);
    }
    return (
        <div className={`cursor-pointer w-fit  `}>
            <div className={` h-full relative ${space[index]}`}>
                {index == 0 && (
                    <>
                        <motion.div
                            onClick={() => {
                                setIsOpened(true);
                            }}
                            whileTap={{ scale: 0.9 }}
                            className="shadow-md  text-sm font-semibold  p-2 relative -ml-3 bg-white -mb-3 z-30 rounded-xl"
                        >
                            Start Here
                        </motion.div>
                        <HoverCard>
                            <HoverCardTrigger>
                                <>
                                    <div className=" w-16 h-16 rounded-full relative z-20 bg-[#5260DD]">
                                        <Image
                                            src="/play.png"
                                            width={40}
                                            height={40}
                                            alt="play button"
                                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                                        />
                                    </div>
                                    <div className="bg-[#3743AE] absolute w-16 h-16 -bottom-1 rounded-full" />
                                </>
                            </HoverCardTrigger>
                            <HoverCardContent>
                                <div className="space-y-1">
                                    <h4 className="text-sm font-semibold">
                                        Lesson {index + 1 + ' : '} {title}
                                    </h4>
                                    <p className="text-sm">
                                        display the lesson content here
                                    </p>
                                </div>
                            </HoverCardContent>
                        </HoverCard>
                    </>
                )}
                {index !== 0 && index != length && (
                    <HoverCard>
                        <HoverCardTrigger>
                            <>
                                <div className=" w-16 h-16 rounded-full relative z-20 bg-[#E5E5E5]">
                                    <Image
                                        src="/course.png"
                                        width={30}
                                        height={30}
                                        alt="play button"
                                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                                    />
                                </div>
                                <div className="bg-[#AFAFAF] absolute w-16 h-16 -bottom-1 rounded-full" />
                            </>
                        </HoverCardTrigger>
                        <HoverCardContent>
                            <div className="space-y-1">
                                <h4 className="text-sm font-semibold">
                                    Lesson {index + 1 + ' : '} {title}
                                </h4>
                                <p className="text-sm">
                                    display the lesson content here
                                </p>
                            </div>
                        </HoverCardContent>
                    </HoverCard>
                )}
                {/*index !== 0 && index == length / 2 && (
                    <HoverCard>
                        <HoverCardTrigger>
                            <>
                                <div className=" w-16 h-16 rounded-full relative z-20 ">
                                    <Image
                                        src="/chest.png"
                                        width={70}
                                        height={70}
                                        alt="play button"
                                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                                    />
                                </div>
                            </>
                        </HoverCardTrigger>
                        <HoverCardContent>
                            <div className="space-y-1">
                                <h4 className="text-sm font-semibold">
                                    Lesson {index + 1 + ' : '} {title}
                                </h4>
                                <p className="text-sm">
                                    display the lesson content here
                                </p>
                            </div>
                        </HoverCardContent>
                    </HoverCard>
                )*/}
                {index !== 0 && index == length && (
                    <HoverCard>
                        <HoverCardTrigger>
                            <>
                                {' '}
                                <div className=" w-16 h-16 rounded-full relative z-20 bg-[#E5E5E5]">
                                    <Image
                                        src="/end.png"
                                        width={40}
                                        height={40}
                                        alt="play button"
                                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                                    />
                                </div>
                                <div className="bg-[#AFAFAF] absolute w-16 h-16 -bottom-1 rounded-full" />
                            </>
                        </HoverCardTrigger>
                        <HoverCardContent>
                            <div className="space-y-1">
                                <h4 className="text-sm font-semibold">
                                    Lesson {index + 1 + ' : '} {title}
                                </h4>
                                <p className="text-sm">
                                    display the lesson content here
                                </p>
                            </div>
                        </HoverCardContent>
                    </HoverCard>
                )}
            </div>
            <AnimatePresence>
                {isOpened && (
                    <Lesson
                        closeLesson={setIsOpened}
                        lessonId={lessonId}
                        lessonTitle={title}
                    />
                )}
            </AnimatePresence>
        </div>
    );
};

export default LessonIsland;
