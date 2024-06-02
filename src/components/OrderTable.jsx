
export const TableTop = () => {
        return(
                <thead className="bg-gray-200 rounded-lg font-light text-[#4D4D4D] text-left">
                    <tr>
                        <th className="font-medium px-2 py-2 tracking-wider rounded-l">Order ID</th>
                        <th className="font-medium px-2 py-2 tracking-wider">Status</th>
                        <th className="font-medium px-2 py-2 tracking-wider">Trasaction ID</th>
                        <th className="font-medium px-2 py-2 tracking-wider">Refund Date</th>
                        <th className="text-right font-medium px-2 py-2 tracking-wider rounded-r">Order Amount</th>
                    </tr>
                </thead>
        )
}

export const OrderTable = ({OrderID, Status, TrasID, RefundDate, Amount}) => {
    return(
            <tr className="px-2">
                <td className="text-[#146EB4] font-medium px-2 py-2 tracking-wider ">
                    {OrderID}
                </td>
                <td className="px-2 py-2 tracking-wider">
                    {Status}
                </td>
                    <td className="px-2 py-2 tracking-wider">
                    {TrasID}
                </td>
                <td className="px-2 py-2 tracking-wider">
                    {RefundDate}
                </td>
                <td className="text-right px-2 py-2 tracking-wider">
                    {Amount}
                </td>
            </tr>
            
    )
}


// <table className='min-w-full'>
//       <colgroup>
//         <col className="w-1/5"/>
//         <col className="w-1/5"/>
//         <col className="w-1/5"/>
//         <col className="w-1/5"/>
//         <col className="w-1/5"/>
//       </colgroup>
//         <TableTop/>
//         <tbody>
//           <OrderTable OrderID={'#281209'} TrasID={'TRX123456'} RefundDate={'Today, 8:45 PM'} Status={'Successful'} Amount={'₹1125.00'}/>
//         </tbody>
//       </table>