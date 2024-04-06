'use client'
import { useEffect, useState } from "react"


export default function Table() {
  const [MASData, setMASData] = useState([])
  const [dayb4MASData, setdayb4MASData] = useState([])
  const fetchMASData = async () => {
    const response = await fetch('/api/MAS', { method: "GET" })
    const jsonData = await response.json()
    console.log(jsonData.response.elements[0].sora)
    setMASData(jsonData.response.elements[0])
    setdayb4MASData(jsonData.dayb4response?.elements[0])
  }

  useEffect(() => {
    fetchMASData()
  }, [])
  const interest_rate_difference = MASData.sora - dayb4MASData.sora
  const sora_index_difference = MASData.sora_index - dayb4MASData.sora_index

  return (
    <div className="px-4 sm:px-6 lg:px-8 bg-white rounded-l-xl py-8 w-[50%]">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">DAILY MAS DATA</h1>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full p-2 divide-y divide-gray-300">
              <thead>
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                    Sora average
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Sora Index
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">

                <tr>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                    {MASData.sora?.toFixed(3)}
                  </td>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-500">{MASData.sora_index?.toFixed(3)}</td>
                </tr>

                <tr>
                  <td className={`whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium sm:pl-0 ${interest_rate_difference > 0 ? 'text-green-500' : 'text-red-400'}`}>
                    {interest_rate_difference.toFixed(3)}
                  </td>
                  <td className={`whitespace-nowrap py-4 pl-4 pr-3 text-sm ${sora_index_difference > 0 ? 'text-green-500' : 'text-red-400'}`}>
                    {sora_index_difference.toFixed(3)}
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
