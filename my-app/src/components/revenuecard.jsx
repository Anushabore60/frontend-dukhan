
export function Revenuecard ({
    title,
    amount,
    ordercount
}){

    return <div>
            <div className=" bg-white rounded-lg shadow-lg pb-10 pt-6 pl-5 pr-5 ">
               <div className="flex justifContent items-center">
            <div className="  text-gray font-md">
               {title}
               </div>
               <div className="pl-2">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" /></svg>
               </div>
              
             </div>
              <div className="flex justify-between pt-5 items-center">
               <div className="font-bold text-2xl">
                {amount}
               </div>
              <div className=" flex font-sm text-blue-700 underline-offset-2">
                {ordercount}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
              </div>
             </div>
            </div>
         </div>
            
        
       
    
}
