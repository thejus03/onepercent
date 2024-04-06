'use client'
import Image from 'next/image'
import Modal from './Modal'
import { useState } from 'react'

const people = [
    {
        name: 'MAS',
        title: 'Regional Paradigm Technician',
        role: 'Admin',
        email: 'janecooper@example.com',
        telephone: '+1-202-555-0170',
        imageUrl: '/mas.png',
    },
    {
        name: 'IRAS',
        title: 'Regional Paradigm Technician',
        role: 'Admin',
        email: 'janecooper@example.com',
        telephone: '+1-202-555-0170',
        imageUrl: '/mas.png',
    },
    {
        name: 'URA',
        title: 'Regional Paradigm Technician',
        role: 'Admin',
        email: 'janecooper@example.com',
        telephone: '+1-202-555-0170',
        imageUrl: '/mas.png',
    },

]

export default function Card() {
    const [currentCard, setCurrentCard] = useState('')
    const [modal,setModal]= useState(false)
    return (
        <div className='space-y-4'>
            <div className='px-[70px] py-[30px] bg-gray-800 rounded-2xl'>
            <p className='text-xl ml-3 font-bold text-white mb-6'>💲Financial Services</p>
            <ul role="list" className="w-full gap-2 space-y-2 ">
                {people.map((person) => (
                    <li key={person.name} className=" w-full md:w-[40vw] divide-y divide-gray-200 rounded-lg bg-white shadow" onClick={() => setModal(true)}>
                        <div className="flex w-full items-center justify-between space-x-6 p-6">
                            <div className="flex-1 truncate">
                                <div className="flex items-center space-x-3">
                                    <h3 className="truncate text-sm font-medium text-gray-900">{person.name}</h3>
                                    <span className="inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                                        {person.role}
                                    </span>
                                </div>
                                <p className="truncate text-sm text-gray-500 flex flex-wrap">{person.title}</p>
                            </div>
                            <Image width={40} height={40} className="h-10 w-10 flex-shrink-0 rounded-full bg-transparent" src={person.imageUrl} alt="" />
                        </div>
                    </li>
                ))}
            </ul>
            </div>
            <div className='px-[70px] py-[30px] bg-gray-800 rounded-2xl'>
            <p className='text-xl ml-3 font-bold text-white mb-6'>💪🏻Manpower Services</p>
            <ul role="list" className="w-full gap-2 space-y-2 ">
                {people.map((person) => (
                    <li key={person.name} className=" w-full md:w-[40vw] divide-y divide-gray-200 rounded-lg bg-white shadow" onClick={() => setModal(true)}>
                        <div className="flex w-full items-center justify-between space-x-6 p-6">
                            <div className="flex-1 truncate">
                                <div className="flex items-center space-x-3">
                                    <h3 className="truncate text-sm font-medium text-gray-900">{person.name}</h3>
                                    <span className="inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                                        {person.role}
                                    </span>
                                </div>
                                <p className="truncate text-sm text-gray-500 flex flex-wrap">{person.title}</p>
                            </div>
                            <Image width={40} height={40} className="h-10 w-10 flex-shrink-0 rounded-full bg-transparent" src={person.imageUrl} alt="" />
                        </div>
                    </li>
                ))}
            </ul>
            </div>
            <div className='px-[70px] py-[30px] bg-gray-800 rounded-2xl'>
            <p className='text-xl ml-3 font-bold text-white mb-6'>🏢 Infrastructure Services</p>
            <ul role="list" className="w-full gap-2 space-y-2 ">
                {people.map((person) => (
                    <li key={person.name} className=" w-full md:w-[40vw] divide-y divide-gray-200 rounded-lg bg-white shadow" onClick={() => setModal(true)}>
                        <div className="flex w-full items-center justify-between space-x-6 p-6">
                            <div className="flex-1 truncate">
                                <div className="flex items-center space-x-3">
                                    <h3 className="truncate text-sm font-medium text-gray-900">{person.name}</h3>
                                    <span className="inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                                        {person.role}
                                    </span>
                                </div>
                                <p className="truncate text-sm text-gray-500 flex flex-wrap">{person.title}</p>
                            </div>
                            <Image width={40} height={40} className="h-10 w-10 flex-shrink-0 rounded-full bg-transparent" src={person.imageUrl} alt="" />
                        </div>
                    </li>
                ))}
            </ul>
            </div>
            {modal && <Modal setModal={setModal} />}

        </div>
    )
}
