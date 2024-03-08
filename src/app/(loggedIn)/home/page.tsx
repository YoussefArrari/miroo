import { getCourses } from '../../../lib/course';
import { registerUser } from '../../../lib/user';

import { Course } from '@prisma/client';
import CourseCard from '@/components/loggedIn/course';

export default async function Home() {
    const user = await registerUser();
    const courses = (await getCourses()) as Course[];
    return (
        <div className="h-screen w-screen pl-72 ">
            <div className="flex flex-col p-6 h-full w-[70%] gap-4 ">
                {courses.map((course, index) => (
                    <CourseCard course={course} key={index} />
                ))}
            </div>
        </div>
    );
}
