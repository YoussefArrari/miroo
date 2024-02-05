import Image from 'next/image';
import { Button } from '../button';
const Nav: React.FC = () => {
    return (
        <div className="absolute z-40 top-0 h-24  border-b-2 border-[#DDDDDC] w-screen">
            <div className="w-full h-full flex justify-between items-center px-12 max-w-[1640px] mx-auto ">
                <div className="flex items-end gap-1 ">
                    <Image src="/logo.svg" width={40} height={40} alt="logo" />
                    <span className="text-xl font-bold ">Miroo</span>
                </div>
                <div className="flex gap-10 text-xs font-medium">
                    <div className="cursor-pointer">Courses</div>
                    <div className="cursor-pointer">Features</div>
                    <div className="cursor-pointer">About</div>
                    <div className="cursor-pointer">Contact</div>
                </div>
                <div className="flex gap-6">
                    <Button size="small" content="Sign Up" type="secondary" />
                    <Button size="small" content="Log In" type="primary" />
                </div>
            </div>
        </div>
    );
};

export default Nav;
