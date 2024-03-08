'use client';
import { Button } from '../button';
import { useRouter } from 'next/navigation';

export default function Gobacktohome({ title }: { title: string }) {
    const router = useRouter();

    return (
        <div className=" border-b-2 border-stone-200 pb-4 flex justify-between text-stone-300">
            <Button
                size="small"
                content="close"
                type="icon"
                onClick={() => {
                    router.push('/home');
                }}
            />
            <h1 className="text-2xl  font-bold">{title}</h1>
            <div></div>
        </div>
    );
}
