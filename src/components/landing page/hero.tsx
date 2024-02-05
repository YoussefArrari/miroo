import React from 'react';
import { Button } from '../button';
import Image from 'next/image';

const Hero: React.FC = () => {
    return (
        <div className="w-screen h-screen bg-[#e8e8e6] flex justify-center flex-col items-center gap-12 ">
            <Image
                src="/sticker1.svg"
                width={260}
                height={100}
                alt="text highlight"
                className="absolute left-0 bottom-0 z-0"
            />
            <Image
                src="/sticker2.svg"
                width={260}
                height={100}
                alt="text highlight"
                className="absolute right-0 bottom-[30%] z-0"
            />
            {/* H1 text*/}
            <div className="text-center text-black text-6xl font-bold relative">
                <Image
                    src="/highlight.svg"
                    width={100}
                    height={100}
                    alt="text highlight"
                    className="absolute -bottom-16 -left-28 z-0"
                />
                <Image
                    src="/highlight2.svg"
                    width={100}
                    height={100}
                    alt="text highlight"
                    className="absolute -top-16 -right-28 z-0"
                />
                <div className="text-blue-600 pb-4">Free Education</div>
                <div>
                    <span>For Every Student</span>
                    <br />
                    <span>From Anywhere</span>
                </div>
            </div>

            {/* sub text  */}
            <div className="text-center text-black text-base font-medium">
                we’re developers with the mission to provide a word-class
                <br />
                education fro anyone, anywhere.
            </div>

            {/* button */}
            <Button size="large" content="Start Learning" type="primary" />
        </div>
    );
};
export default Hero;
