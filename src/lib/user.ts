import { auth } from '@clerk/nextjs';
import { prisma } from './db';

export async function registerUser() {
    const { userId }: { userId: string | null } = auth();
    if (!userId) {
        return new Response('Unauthorized', { status: 401 });
    }
    try {
        const user = await prisma.user.findUnique({
            where: {
                id: userId,
            },
        });
        if (!user) {
            const newUser = await prisma.user.create({
                data: {
                    id: userId,
                },
            });
            return newUser;
        }
    } catch (error) {
        return error;
    }
}
