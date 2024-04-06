import React from 'react'
import Table from './Table'

export const RightBar = () => {
    return (
        <div className='sm:flex flex-col items-center justify-center gap-3 lg:min-w-0 hidden min-w-[50vw] mt-1'>
                <Table />
       
            <div className='space-y-4 bg-gradient-to-b from-gray-700 mt-8 to-gray-800 w-[80%] p-8 rounded-xl shadow-lg'>
                <h2 className='font-bold text-white'>📣UPDATED UI</h2>
                <p className=' text-gray-400'>Learn how to use our new UI</p>
                <p className=' text-gray-200'>Discover the latest updates, services, and initiatives from the [Government Name]. Our mission is to serve and empower citizens, residents, and businesses, fostering a thriving and inclusive community.</p>
            </div>
            <div className='space-y-4  bg-gradient-to-b from-gray-700 mx-8 to-gray-800 w-[80%] p-8 rounded-xl shadow-lg'>
                <h2 className='font-bold text-white'>🪙NEW 2024 BUDGET ANALYSIS</h2>
                <p className=' text-gray-400'>Analytics by govTech personnel</p>
                <p className=' text-gray-200'>Breakdown how you and your business can capitalize in government funding!</p>
            </div>

        </div>
    )
}
