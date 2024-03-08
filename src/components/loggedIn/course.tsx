import React from 'react';
import { Course } from '@prisma/client';
import Image from 'next/image';
import { Redirect } from 'next';
import RedirectButton from './redirectButton';

interface Props {
    course: Course;
}

const course: React.FC<Props> = ({ course }) => {
    return (
        <div className="w-full shadow-lg flex h-56 overflow-clip rounded-xl border-4 relative border-stone-950 bg-[#F0F0F0]">
            <Image
                src={'/htmlCourseImage.svg'}
                width={200}
                height={200}
                alt="course image"
                className="absolute -left-16 -top-8 "
            />
            <div className="  w-[70%] flex flex-col gap-2 justify-end p-5 ">
                <h1 className="font-bold text-5xl">{course.title}</h1>
                <p className="font-medium text-base">{course.description}</p>
            </div>
            <div className="w-[30%] flex flex-col justify-between items-end p-5 pr-10">
                <div className="text-xs font-medium text-[#A8A8A8]">
                    difficulty :{' '}
                    <span className="bg-[#D8D8D8] text-white px-2 py-1 rounded-full">
                        {course.difficulty}
                    </span>
                </div>
                <RedirectButton />
            </div>
        </div>
    );
};

export default course;
