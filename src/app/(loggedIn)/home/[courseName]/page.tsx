import { Unit } from '@prisma/client';
import { getCourse, getUnits, getLessons } from '../../../../lib/course';
import { Course } from '@prisma/client';
import Gobacktohome from '../../../../components/loggedIn/gobacktohome';
import { Lesson } from '@prisma/client';
import LessonIsland from '../../../../components/loggedIn/lessonIsland';

export default async function Home({
    params,
}: {
    params: { courseName: string };
}) {
    const units = (await getUnits(params.courseName)) as Unit[];
    const course = (await getCourse(params.courseName)) as Course;
    async function getUnitLessons(unitId: string) {
        const lessons = (await getLessons(unitId)) as Lesson[];
        const sortedLessons = lessons.sort(
            (lessonA, lessonB) => lessonA.id - lessonB.id
        );

        return sortedLessons;
    }

    return (
        <div className="h-screen w-screen pl-72 bg-[#FAF9F8] overflow-x-hidden ">
            <div className="flex flex-col p-6 h-full w-[70%]  ">
                <Gobacktohome title={course.title} />
                {units.map(async (unit, index) => {
                    const lessons = await getUnitLessons(unit.id.toString());

                    return (
                        <div key={index} className="h-fit w-full">
                            <div className="w-full  h-fit rounded-xl bg-[#5260DD] p-4 flex flex-col gap-2  my-2 text-white ">
                                <div className="text-xl font-semibold">
                                    Unit {index + 1}
                                </div>

                                <div className=" text-sm font-normal">
                                    {unit.title}
                                </div>
                            </div>
                            <div className="flex flex-col gap-5 items-center p-4 ">
                                {lessons.map((lesson, index) => {
                                    return (
                                        <LessonIsland
                                            key={index}
                                            index={index}
                                            lessonId={lesson.id.toString()}
                                            title={lesson.title}
                                            length={lessons.length}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
