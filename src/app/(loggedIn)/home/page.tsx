import { UserButton } from '@clerk/nextjs';

import { registerUser } from '../../../lib/user';

export default async function Home() {
    const user = await registerUser();
    return (
        <div className="h-screen w-screen flex justify-center items-center">
            <h1 className="text-4xl">Welcome to your new app!</h1>
            <UserButton afterSignOutUrl="/" showName={true} />
        </div>
    );
}
