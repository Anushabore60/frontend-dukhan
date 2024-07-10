import Divider from '@mui/material/Divider';

export function Bluecard({
    title,
    amount,
    ordercount,
    heading,
    Time
}) {
    return (
        <div className="shadow-lg rounded-lg ">
            <div className="bg-[#146EB4] hover:bg-[#0E4F82] rounded-t-lg pt-10 pl-10 pr-5 pb-4">
                <div className="flex items-center">
                    <div className="text-white font-md">
                        {title}
                    </div>
                    <div className="pl-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                        </svg>
                    </div>
                </div>
                <div className="flex justify-between pt-5 items-center">
                    <div className="font-bold text-2xl text-white">
                        {amount}
                    </div>
                    <div className="flex font-sm text-blue-700 underline-offset-2 text-white">
                        {ordercount}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                </div>
            </div>
            <Divider />
            <div className="flex justify-between items-center bg-[#0E4F82] text-white pt-6 pr-2 pl-10 pb-4 rounded-b-lg">
                <span>{heading}</span>
                <span>{Time}</span>
            </div>
        </div>
    );
}


  