import { useState } from 'react';
import { motion } from 'framer-motion';

interface orderProps {
    exerciseId: string;
    options: string[];
    correctAnswer: string;
    verifyAnswer: (arg: boolean | null) => void;
}

const Order: React.FC<orderProps> = ({
    exerciseId,
    options,
    correctAnswer,
    verifyAnswer,
}) => {
    const [selectedOrder, setSelectedOrder] = useState<string[]>([]);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [isSelect, setIsSelect] = useState<string[]>([]);

    const handleOrder = (index: number, option: string) => {
        setIsSelect((prevSelect) => {
            const updatedSelect = prevSelect.includes(option)
                ? prevSelect.filter((item) => item !== option)
                : [...prevSelect, option];

            return updatedSelect;
        });

        setSelectedOrder((prevOrder) => {
            const newOrder = prevOrder.includes(option)
                ? prevOrder
                : [...prevOrder, option];

            return newOrder;
        });
    };

    const checkAnswer = () => {
        if (selectedOrder.join(' ') === correctAnswer) {
            setIsCorrect(true);
            verifyAnswer(true);
        } else {
            setIsCorrect(false);
            verifyAnswer(false);
        }
    };
    const handleItemClick = (option: string) => {
        setIsSelect((prev) =>
            prev.includes(option)
                ? prev.filter((item) => item !== option)
                : [...prev, option]
        );
        setSelectedOrder((prev) =>
            prev.includes(option)
                ? prev.filter((item) => item !== option)
                : [...prev, option]
        );
    };
    return (
        <motion.div className="flex flex-col items-center gap-2 " layout>
            <div className="w-full border-b-2 mb-6 flex gap-4 z-40 justify-center h-20 py-4">
                {isSelect.map((option, index) => (
                    <motion.div
                        layoutId={option}
                        key={option} // Use option as key for consistency
                        className="relative z-40"
                    >
                        <div
                            onClick={() => handleItemClick(option)}
                            className={`border py-2 px-4 relative bg-white z-20 rounded-xl cursor-pointer font-normal ${
                                selectedOrder.includes(option)
                                    ? 'bg-gray-100'
                                    : ''
                            }`}
                        >
                            {option}
                        </div>
                        <div className="absolute top-0 bg-gray-200 z-10 rounded-xl left-0 w-full h-full" />
                    </motion.div>
                ))}
            </div>

            <div className="flex gap-4">
                {options.map((option, index) => (
                    <div key={index} className="relative">
                        {!isSelect.includes(option) && (
                            <motion.div
                                layoutId={option}
                                onClick={() => {
                                    handleOrder(index, option);
                                }}
                                className={` border py-2 px-4 relative bg-white z-20  rounded-xl cursor-pointer font-normal
                        ${selectedOrder.includes(option) ? 'bg-gray-100' : ''}`}
                            >
                                {option}
                            </motion.div>
                        )}
                        {isSelect.includes(option) && (
                            <div
                                className={`  py-2 px-4 relative z-20 bg-transparent  rounded-xl text-transparent cursor-pointer font-normal
                        ${selectedOrder.includes(option) ? 'bg-gray-200' : ''}`}
                            >
                                {option}
                            </div>
                        )}
                        <div className="absolute top-1 bg-gray-200  z-10  rounded-xl left-0 w-full h-full" />
                    </div>
                ))}
            </div>

            <div className="flex  w-full justify-end gap-4 mt-4">
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => {
                        setSelectedOrder([]);
                        verifyAnswer(null);
                        setIsCorrect(null);
                        setIsSelect([]); // Simplified
                    }}
                    className="bg-stone-100 px-4 py-2 rounded-lg"
                >
                    Reset
                </motion.button>
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={checkAnswer}
                    className="bg-blue-500 px-4 py-2 rounded-lg"
                >
                    Check
                </motion.button>
            </div>

            {/* Uncomment if needed
            {isCorrect !== null && (
                <div className="mt-4 text-stone-900">
                    {isCorrect ? 'Correct' : 'Try again'}
                </div>
            )}
            */}
        </motion.div>
    );
};

export default Order;
