'use client'
import {
  AcademicCapIcon,
  BanknotesIcon,
  CheckBadgeIcon,
  ClockIcon,
  ReceiptRefundIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'
import Modal from './Modal'
import { useState } from 'react'

const actions = [

  {
    title: 'Payroll',
    href: '#',
    icon: BanknotesIcon,
    iconForeground: 'text-yellow-700',
    iconBackground: 'bg-yellow-50',
  },
  {
    title: 'Taxes',
    href: '#',
    icon: ReceiptRefundIcon,
    iconForeground: 'text-rose-700',
    iconBackground: 'bg-rose-50',
  },

]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function CatSection() {
  const [modal, setModal] = useState()
  return (
    <div className=" overflow-hidden rounded-lg shadow sm:grid sm:grid-cols-2 flex justify-center">
      {actions.map((action, actionIdx) => (
        <div
          key={action.title}
          className={
            'group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500'
          }
          onClick={() => setModal(true)}
        >
          <div>
            <span
              className={classNames(
                action.iconBackground,
                action.iconForeground,
                'inline-flex rounded-lg p-3 ring-4 ring-white'
              )}
            >
              <action.icon className="h-6 w-6" aria-hidden="true" />
            </span>
          </div>
          <div className="mt-8">
            <h3 className="text-base font-semibold leading-6 text-gray-900">
              <a href={action.href} className="focus:outline-none">
                {/* Extend touch target to entire panel */}
                <span className="absolute inset-0" aria-hidden="true" />
                {action.title}
              </a>
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              Easy access to essential actions
            </p>
          </div>
          <span
            className="pointer-events-none absolute right-6 top-6 text-gray-300 group-hover:text-gray-400"
            aria-hidden="true"
          >
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
            </svg>
          </span>
        </div>
      ))}
      {modal && <Modal modal={modal} setModal={setModal} />}
    </div>
  )
}