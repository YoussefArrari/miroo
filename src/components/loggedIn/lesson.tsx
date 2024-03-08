import { Button } from '../button';
import { motion, AnimatePresence } from 'framer-motion';
import { getDialogs } from '../../lib/course';
import { useEffect, useState } from 'react'; // Import useState for state management
import { Dialog } from '@prisma/client';
import DialogContent from './dialogContent';
import SndMessage from './2ndMessage';
import Order from './order';

interface lessonProps {
    lessonId: string;
    lessonTitle: string;
    closeLesson: (arg: boolean) => void;
}

const Lesson: React.FC<lessonProps> = ({
    lessonId,
    lessonTitle,
    closeLesson,
}) => {
    // Create state variable for dialogs using useState
    const [dialogs, setDialogs] = useState<Dialog[] | null>(null); // Initialize with null

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedDialogs = await getDialogs(lessonId);
                setDialogs(fetchedDialogs); // Update state with fetched dialogs
            } catch (error) {
                console.error('Error fetching dialogues:', error);
            }
        };

        fetchData();
    }, [lessonId]);
    interface QAProps {
        exerciseId: string;
        options: string[];
        correctAnswer: string;
    }
    interface orderProps {
        exerciseId: string;
        options: string[];
        correctAnswer: string;
    }

    const messages = [
        'Hello, I am the second message',
        'Hello, I am the third message',
        'Hello, I am the fourth message',
        'Hello, I am the fifth message',
        'Hello, I am the sixth message',
    ] as string[];
    const exercise = {
        exerciseId: '1',
        options: ['Hypertext', 'CSS', 'Markup', 'Python', 'Language'],
        correctAnswer: 'Hypertext Markup Language',
    } as QAProps;
    const chapters = [
        'HTML stands for Hypertext Markup Language. Its the standard markup language used to create and design web pages.',

        'what does HTML stand for?',
        exercise,
    ];
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const verifyAnswer = (arg: any) => {
        setIsCorrect(arg);
    };
    const [currentMessage, setCurrentMessage] = useState(0);
    /*useEffect(() => {
        const fetchData = async () => {
            try {
                // Simulate loading delay
                await new Promise((resolve) => setTimeout(resolve, 3000)); // Wait for 3 seconds

                const fetchedDialogs = await getDialogs(lessonId);
                setDialogs(fetchedDialogs);
            } catch (error) {
                console.error('Error fetching dialogues:', error);
                setDialogs(null); // Set to null or a placeholder array on error
            }
        };

        fetchData();
    }, [lessonId]);*/

    const [currentDialog, setCurrentDialog] = useState(0);
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="w-screen h-screen bg-white cursor-auto absolute top-0 left-0 z-40 overflow-clip flex items-center justify-center"
        >
            {/*Header of the lesson content here*/}
            <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className=" w-[80%] h-16   flex items-center gap-10 justify-center absolute top-0  "
            >
                {/* leaving button*/}
                <Button
                    size="small"
                    content="close"
                    type="icon"
                    onClick={() => {
                        closeLesson(false);
                    }}
                />
                {/* progress bar*/}

                <div className="w-[80%] h-2 relative  bg-[#E5E5E5] rounded-full">
                    <div className="w-20 h-2 bg-[#5260DD] rounded-full"></div>
                </div>
            </motion.div>

            {/*Lesson content here*/}
            <AnimatePresence>
                <motion.div className=" w-full h-full flex justify-center items-center ">
                    <div className="w-[40%]  flex flex-col items-start justify-center h-screen gap-4  ">
                        {/*dialogs ? ( // Conditionally render dialogs only if they exist
                            dialogs.map((dialog: Dialog, index: number) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                    className="w-[80%]  absolute   flex items-center gap-10 justify-center"
                                >
                                    {currentDialog === index && (
                                        <DialogContent dialog={dialog} />
                                    )}
                                </motion.div>
                            ))
                        ) : (
                            // Display a loading indicator or message if dialogs haven't been fetched yet
                            <p>Loading dialogs...</p>
                        )*/}

                        {chapters.map((chapter, index) => (
                            <div key={index} className="w-full">
                                {typeof chapter === 'string' ? (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.6,
                                            delay: 0.4,
                                        }}
                                        className=""
                                    >
                                        {currentMessage >= index && (
                                            <SndMessage
                                                message={chapter}
                                                index={index}
                                            />
                                        )}
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.6,
                                            delay: 0.4,
                                        }}
                                        layout
                                    >
                                        {currentMessage >= index && (
                                            <Order
                                                {...chapter}
                                                verifyAnswer={verifyAnswer}
                                            />
                                        )}
                                    </motion.div>
                                )}
                            </div>
                        ))}
                    </div>
                </motion.div>
            </AnimatePresence>
            {/*Footer with next button here*/}
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`w-full h-28 absolute bottom-0  border-t ${
                    isCorrect === null
                        ? 'bg-stone-100'
                        : isCorrect
                          ? 'bg-green-300'
                          : 'bg-red-300'
                }`}
            >
                <div className="h-full flex justify-end items-center max-w-[1200px] w-[90%]">
                    <button
                        content="Next"
                        onClick={() => {
                            setCurrentMessage(currentMessage + 1);
                        }}
                    >
                        Next
                    </button>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Lesson;
