
export function Tabel(){
    return <div className="tabel-auto grid gap-x-4 pt-8">
        <table className="min-w-full border-collapse">
          <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border border-gray-300 text-left"> Order Id </th>
            <th  className="p-2 border border-gray-300 text-left">Status</th>
            <th className="p-2 border border-gray-300 text-left">Transaction Id</th>
            <th className="p-2 border border-gray-300 text-left">Refund Date</th>
            <th className="p-2 border border-gray-300 text-left">Amount</th>
          </tr> 
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border border-gray-300 text-left">1</td>
              <td className="p-2 border border-gray-300 text-left">processing</td>
              <td className="p-2 border border-gray-300 text-left">TRX23423</td>
              <td className="p-2 border border-gray-300 text-left">Today 4:00pm</td>
              <td className="p-2 border border-gray-300 text-left">20,000</td>
              
            </tr>
            <tr>
              <td className="p-2 border border-gray-300 text-left">2</td>
              <td className="p-2 border border-gray-300 text-left">success</td>
              <td className="p-2 border border-gray-300 text-left">TRX879657</td>
              <td className="p-2 border border-gray-300 text-left">Tomorrow 2:45pm</td>
              <td className="p-2 border border-gray-300 text-left">87,098</td>
            </tr>
            <tr>
              <td  className="p-2 border border-gray-300 text-left">3</td>
              <td className="p-2 border border-gray-300 text-left">success</td>
              <td className="p-2 border border-gray-300 text-left">TRX877867</td>
              <td className="p-2 border border-gray-300 text-left">Today 9:45pm</td>
              <td className="p-2 border border-gray-300 text-left">87,898</td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-300 text-left">4</td>
              <td className="p-2 border border-gray-300 text-left">processing</td>
              <td className="p-2 border border-gray-300 text-left">TRX88757</td>
              <td className="p-2 border border-gray-300 text-left">Tomorrow 2:45pm</td>
              <td className="p-2 border border-gray-300 text-left">27,098</td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-300 text-left">5</td>
              <td className="p-2 border border-gray-300 text-left">success</td>
              <td className="p-2 border border-gray-300 text-left">TRX879087</td>
              <td className="p-2 border border-gray-300 text-left">Tomorrow 2:45pm</td>
              <td className="p-2 border border-gray-300 text-left">40,543</td>
            </tr>
          </tbody>
        </table>
    </div> 
}
