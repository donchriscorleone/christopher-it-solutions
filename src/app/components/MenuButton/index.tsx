"use client";

import { Dialog, Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import {
  Bars3Icon
} from '@heroicons/react/16/solid'
import { useState, Fragment } from 'react';

export default function NavMenuButton({ items }: { items?: Array<any>}) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 text-gray-700 hover:text-black focus:outline-none"
      >
        <span className='sr-only'>Menu button</span>
        <Bars3Icon className='size-5 fill-black'/>
      </button>


    {/* Drawer with Transition */}
    <Transition show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={setIsOpen}>
          
          {/* Background overlay with blur */}
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" aria-hidden="true" />
          </Transition.Child>

          {/* Sliding Panel */}
          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="fixed inset-y-0 left-0 flex max-w-full">

                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-300"
                  enterFrom="-translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-200"
                  leaveFrom="translate-x-0"
                  leaveTo="-translate-x-full"
                >
                  <Dialog.Panel className="w-64 bg-white shadow-xl p-6 flex flex-col">
                    
                    {/* Close Button */}
                    <button
                      onClick={() => setIsOpen(false)}
                      className="self-end mb-6 hover:text-black focus:outline-none"
                    >
                      {/* X icon */}
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>

                    {/* Navigation Links */}
                    <nav className="flex flex-col gap-4">
                      {items?.map(item => {
                        return (
                          <a key={`nav menu item - ${item.label}`} href={item.href} className="text-lg font-semibold hover:text-red-600">
                            {item.label}
                          </a>
                        )
                      })}
                    </nav>

                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>

        </Dialog>
      </Transition>
    </>
  )
}
