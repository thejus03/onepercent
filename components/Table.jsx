'use client'
import { useEffect, useState } from "react"
import Image from "next/image";

export default function Table() {
  const [MASData, setMASData] = useState(null)
  const [dayb4MASData, setdayb4MASData] = useState(null)
  const fetchMASData = async () => {
    const response = await fetch('/api/MAS', { method: "GET" })
    const jsonData = await response.json()
    console.log(jsonData.response)
    setMASData(jsonData.response?.elements[0])
    setdayb4MASData(jsonData.dayb4response?.elements[0])
  }

  const greengraph = 'https://s.yimg.com/ny/api/res/1.2/.YvCLYPydMEFPNuasPUG1g--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MA--/https://s.yimg.com/os/creatr-uploaded-images/2021-10/4c16eec0-2c06-11ec-bff1-a9ed77417304'
  const redgraph = 'https://s.yimg.com/ny/api/res/1.2/U1O9ZKGgaJ5SBXvhfBWW3g--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MA--/https://s.yimg.com/os/creatr-uploaded-images/2021-11/d7ea50a0-4933-11ec-af1f-b7925ba50a95'
  useEffect(() => {
    fetchMASData()
  }, [])
  const interest_rate_difference = MASData?.sora - dayb4MASData?.sora
  const sora_index_difference = MASData?.sora_index - dayb4MASData?.sora_index

  return (
    <div className="px-4 flex mt-2 justify-center sm:px-6 lg:px-8 w-[100%]">
    
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
              <tbody className="border-b border-gray-200">

                <tr>
                  <td className="border-r border-gray-200 whitespace-nowrap py-1 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                    {MASData?.sora.toFixed(3)}
                  </td>
                  <td className="whitespace-nowrap py-1 pl-4 pr-3 text-sm text-gray-900">{MASData?.sora_index.toFixed(3)}</td>
                </tr>

                <tr>
                  <td className={`border-r  border-gray-200 whitespace-nowrap py-1 pl-4 pr-3 text-sm font-medium sm:pl-0 ${interest_rate_difference > 0 ? 'text-green-500' : 'text-red-400'}`}>
                    <div className="flex flex-row">
                    {interest_rate_difference.toFixed(3)}
                    <img className="ml-2" src={interest_rate_difference > 0 ? greengraph: redgraph} width={40} height={40}/>
                    </div>
                  </td>
                  <td className={` whitespace-nowrap py-1 pl-4 pr-3 text-sm ${sora_index_difference > 0 ? 'text-green-500' : 'text-red-400'}`}>
                  <div className="flex flex-row">
                    {sora_index_difference.toFixed(3)}
                    <img className='ml-2' src={interest_rate_difference > 0 ? greengraph: redgraph} width={40} height={40}/>
                    </div>
                  </td>
                </tr>

              </tbody>
            </table>
          
    </div>
  )
}
