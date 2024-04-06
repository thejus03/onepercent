'use client'
import { useEffect, useState } from "react"


export default function Table() {
  const [MASData, setMASData] = useState(null)
  const [dayb4MASData, setdayb4MASData] = useState(null)
  const fetchMASData = async () => {
    const response = await fetch('/api/MAS', { method: "GET" })
    const jsonData = await response.json()
    console.log(jsonData.response.elements[0])
    setMASData(jsonData.response?.elements[0])
    setdayb4MASData(jsonData.dayb4response?.elements[0])
  }

  useEffect(() => {
    fetchMASData()
  }, [])
  const interest_rate_difference = MASData?.sora - dayb4MASData?.sora
  const sora_index_difference = MASData?.sora_index - dayb4MASData?.sora_index

  return (
    <div className="px-4 flex justify-center sm:px-6 lg:px-8  py-8 w-[100%]">
    
            <table>
              <thead className="divide-y">
                <tr>
                  <th scope="col" className="py-1 border-r border-gray-200 pl-4 pr-3 text-left text-md font-semibold text-gray-900 sm:pl-0">
                    Sora average
                  </th>
                  <th scope="col" className="px-3 py-1 text-left text-md font-semibold text-gray-900">
                    Sora Index
                  </th>
                </tr>
              </thead>
              <tbody>

                <tr>
                  <td className="whitespace-nowrap py-1 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                    {MASData?.sora.toFixed(3)}
                  </td>
                  <td className="whitespace-nowrap py-1 pl-4 pr-3 text-sm text-gray-500">{MASData?.sora_index.toFixed(3)}</td>
                </tr>

                <tr>
                  <td className={`whitespace-nowrap py-1 pl-4 pr-3 text-sm font-medium sm:pl-0 ${interest_rate_difference > 0 ? 'text-green-500' : 'text-red-400'}`}>
                    {interest_rate_difference.toFixed(3)}
                  </td>
                  <td className={`whitespace-nowrap py-1 pl-4 pr-3 text-sm ${sora_index_difference > 0 ? 'text-green-500' : 'text-red-400'}`}>
                    {sora_index_difference.toFixed(3)}
                  </td>
                </tr>

              </tbody>
            </table>
          
    </div>
  )
}
