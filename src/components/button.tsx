interface Props {
    size: string;
    content: string;
    type?: string;
}

export const Button: React.FC<Props> = ({ size, content, type }) => {
    return (
        <>
            {size == 'small' && type == 'primary' && (
                <div className="w-fit h-fit relative ">
                    <button className="bg-blue-600 z-20 relative  text-white px-6 rounded-full py-2 text-xs font-semibold">
                        {content}
                    </button>
                    <div className="z-10 w-full h-full  absolute top-1 bg-blue-800 rounded-full" />
                </div>
            )}
            {size == 'large' && type == 'primary' && (
                <div className="w-fit h-fit relative ">
                    <button className="bg-blue-600 z-20 relative  text-white px-10 rounded-full py-2 text-base font-semibold">
                        {content}
                    </button>
                    <div className="z-10 w-full h-full  absolute top-1 bg-blue-800 rounded-full" />
                </div>
            )}
            {size == 'small' && type == 'secondary' && (
                <button
                    className=" text-stone-900  text-xs font-medium hover:underline"
                    type="button"
                >
                    {content}
                </button>
            )}
        </>
    );
};
