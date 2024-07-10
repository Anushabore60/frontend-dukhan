import { useState } from 'react'

import { Revenuecard } from './components/revenuecard'
import { Bluecard } from './components/bluecard'
import { Navbar } from './components/navbar'
import { Sideitems } from './components/sideitems'
import { Button } from './components/button'
import { Tabel } from './components/table'
import { Midelements } from './components/midelements'
import { Sidebar } from './components/sidebar'

function App() {
  
  return (<div>
    <div className='min-h-screen flex'>
      <Sidebar />
     <div className='flex-1 flex flex-col'>
      <Navbar /> 
      <Sideitems />
      <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 col gap-6 pt-10">
        <Bluecard  title={"Next payout"} amount={"2,34,567"} ordercount={"23 orders"} heading={"Next PaymentDate:"} Time={" Today,4:00pm"}/>
         <Revenuecard title={"Amount pending "} amount={"2,34,555"} ordercount={"19 orders"} />
          <Revenuecard title={"Amount processed "} amount={"55,34,667"} />
            <div className='font-sans text-xl md:ml-0 font-semibold pl-8  '>
               Transactions | This month
           <div className=' flex pt-6 cursor-pointer'>
             <Button title={"payouts(22)"}></Button>
           <div className='flex pl-8 cursor-pointer text-white bg-blue-500 rounded-full text-center text-lg pr-8 '>
             <Button title={"Refunds(6)"}></Button>
            </div>
            </div>
        </div>
     </div>
     <Midelements/>
     <Tabel />
     </div>
     </div>
     </div>
  )
}

export default App
