
export function Midelements(){
    return <div className="flex justify-between font-sans p-6">
        <div className="w-80 h-10 shadow-md rounded-md text-center outline-none  ">
            <input 
            type="text"
            className="outline-none"
            placeholder="Order Id,Transaction Id"
            /> 
            <img src="" />
         </div>
        <div className=" flex  w-20 h-5 bg-gray-100 outline-none shadow-sm cursor-pointer pr-8 ">
         Sort
      <div className="flex pl-2">
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" /></svg>
     </div>
     <div className=" flex pl-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
           <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" /></svg>
    </div>
        </div>
    </div>
}