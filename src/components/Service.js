import React from 'react'

export default function Service({ service }) {
    const { id, name, description, image } = service;

  return (
    <>
          <ul className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16">
              <li key={id}>
                  <div className="flex items-center gap-x-6">
                      <img className="h-16 w-16 rounded-full" src={`http://127.0.0.1:8000${image}`} alt="" />
                      <div>
                          <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{name}</h3>
                          <p className="text-sm font-semibold leading-6 text-indigo-600">{description}</p>
                      </div>
                  </div>
              </li>
          </ul>
    </>
  )
}
