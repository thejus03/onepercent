'use client'
import Image from 'next/image'
import Modal from './Modal'
import { useEffect, useState } from 'react'
import { getServices } from '@/utils/supabase/actions'


export default function Card() {
    const [currentCard, setCurrentCard] = useState('')
    const [modal, setModal] = useState(false)
    const [serviceList, setServiceList] = useState([])

    useEffect(() => {
        const fetchServices = async () => {
            const services = await getServices()
            setServiceList(services)
            console.log(services[0].category)
        }
        fetchServices()
    }, [])

    return (
        <div className='space-y-4'>
            <div className='px-[70px] py-[30px] bg-gray-800 rounded-2xl'>
                <p className='text-xl ml-3  font-bold text-white mb-6'>💲Financial Services</p>
                <ul role="list" className="w-full gap-2 space-y-2 ">
                    {serviceList.map((service, i) =>
                        <li key={service.html_id} id={service.category == 'finance' ? service.html_id : i} className={`${service.category == 'finance' ? '' : 'hidden'} w-full md:w-[40vw] divide-y divide-gray-200 rounded-lg bg-white shadow`} onClick={() => setModal({ title: service.title, desc: service.description })}>
                            <div className="flex w-full items-center justify-between space-x-6 p-6">
                                <div className="flex-1">
                                    <div className="flex items-center space-x-3">
                                        <h3 className="truncate text-sm font-medium text-gray-900">{service.title}</h3>
                                    </div>
                                    <p className="max-w-[85%] text-sm text-gray-500 flex flex-wrap">{service.description.length > 100 ? service.description.slice(0, 100) + '...' : service.description}</p>
                                </div>
                                <Image width={40} height={40} className="h-15 w-15 flex-shrink-0 rounded-full bg-transparent p-2" src={`/${service.provider_id.toLowerCase()}.png`} alt="" />
                            </div>
                        </li>
                    )}
                </ul>
            </div>
            <div className='px-[70px] py-[30px] bg-gray-800 rounded-2xl'>
                <p className='text-xl ml-3 font-bold text-white mb-6'>💪🏻Manpower Services</p>
                <ul role="list" className="w-full gap-2 space-y-2 ">
                    {serviceList.map((service, i) =>
                        <li key={service.html_id} id={service.category == 'manpower' ? service.html_id : i} className={`${service.category == 'manpower' ? '' : 'hidden'} w-full md:w-[40vw] divide-y divide-gray-200 rounded-lg bg-white shadow`} onClick={() => setModal({ title: service.title, desc: service.description })}>
                            <div className="flex w-full items-center justify-between space-x-6 p-6">
                                <div className="flex-1 truncate">
                                    <div className="flex items-center space-x-3">
                                        <h3 className="truncate text-sm font-medium text-gray-900">{service.title}</h3>
                                    </div>
                                    <p className="truncate text-sm text-gray-500 flex flex-wrap">{service.description}</p>
                                </div>
                                <Image width={40} height={40} className="h-15 w-15 flex-shrink-0 rounded-full bg-transparent p-2" src={`/${service.provider_id.toLowerCase()}.png`} alt="" />
                            </div>
                        </li>
                    )}
                </ul>
            </div>
            <div className='px-[70px] py-[30px] bg-gray-800 rounded-2xl'>
                <p className='text-xl ml-3 font-bold text-white mb-6'>🏢 Infrastructure Services</p>
                <div role="list" className="w-full gap-2 space-y-2 ">
                    {serviceList.map((service, i) =>
                        <div key={service.html_id} id={service.category == 'infrastructure' ? service.html_id : i} className={`${service.category == 'infrastructure' ? '' : 'hidden'}  w-full md:w-[40vw] divide-y divide-gray-200 rounded-lg bg-white shadow`} onClick={() => setModal({ title: service.title, desc: service.description })}>
                            <div className="flex w-full items-center justify-between space-x-6 p-6">
                                <div className="flex-1 truncate">
                                    <div className="flex items-center space-x-3">
                                        <h3 className="truncate text-sm font-medium text-gray-900">{service.title}</h3>

                                    </div>
                                    <p className="truncate text-sm text-gray-500 flex flex-wrap">{service.description}</p>
                                </div>
                                <Image width={40} height={40} className="h-15 w-15 flex-shrink-0 rounded-full bg-transparent p-2" src={`/${service.provider_id.toLowerCase()}.png`} alt="" />
                            </div>
                        </div>
                    )}
                </div>
            </div>
            {modal && <Modal modal={modal} setModal={setModal} />}

        </div>
    )
}

