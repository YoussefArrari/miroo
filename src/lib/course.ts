'use server';

import { auth } from '@clerk/nextjs';
import { prisma } from './db';

export async function getCourses() {
    const { userId }: { userId: string | null } = auth();
    if (!userId) {
        return new Response('Unauthorized', { status: 401 });
    }

    try {
        const courses = await prisma.course.findMany();
        return courses;
    } catch (error) {
        return error;
    }
}
export async function getCourse(courseId: string) {
    const { userId }: { userId: string | null } = auth();
    if (!userId) {
        return new Response('Unauthorized', { status: 401 });
    }

    let num = parseInt(courseId);
    if (isNaN(num)) {
        return new Response('Invalid course id', { status: 400 });
    }

    try {
        const course = await prisma.course.findUnique({
            where: {
                id: num,
            },
        });
        return course;
    } catch (error) {
        return error;
    }
}

export async function getUnits(courseId: string) {
    const { userId }: { userId: string | null } = auth();
    if (!userId) {
        return new Response('Unauthorized', { status: 401 });
    }

    let num = parseInt(courseId);
    if (isNaN(num)) {
        return new Response('Invalid course id', { status: 400 });
    }

    try {
        const units = await prisma.unit.findMany({
            where: {
                courseId: num,
            },
        });
        return units;
    } catch (error) {
        return error;
    }
}

export async function getLessons(courseId: string) {
    const { userId }: { userId: string | null } = auth();
    if (!userId) {
        return new Response('Unauthorized', { status: 401 });
    }

    let num = parseInt(courseId);
    if (isNaN(num)) {
        return new Response('Invalid course id', { status: 400 });
    }

    try {
        const lessons = await prisma.lesson.findMany({
            where: {
                unitId: num,
            },
        });
        return lessons;
    } catch (error) {
        return error;
    }
}
export async function getDialogs(lessonId: string) {
    let num = parseInt(lessonId);
    if (isNaN(num)) {
        return { error: 'Invalid lesson id', status: 400 };
    }

    try {
        const dialogs = await prisma.dialog.findMany({
            where: {
                lessonId: num,
            },
        });
        return dialogs;
    } catch (error) {
        // Log the error for detailed debugging
        console.error(error);
        return {
            error: 'An error occurred while fetching dialogues',
            status: 500,
        };
    }
}
