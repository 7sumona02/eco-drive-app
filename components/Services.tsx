import React from 'react'

const Services = () => {
  return (
<div className="max-w-[85rem] md:h-[45rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
<div className="max-w-2xl mx-auto text-center pb-10 lg:mb-14">
    <h2 className="text-2xl text-jet font-bold md:text-4xl md:leading-tight">Services</h2>
    <p className="mt-1 text-gray-600">Whatever your status, our offers evolve according to your needs.</p>
  </div>
  <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-12">
    <div>
      <svg className="shrink-0 size-9 text-gray-800" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="10" height="14" x="3" y="8" rx="2"/><path d="M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4"/><path d="M8 18h.01"/></svg>
      <div className="bg-gradient-to-r from-gray-200 via-gray-50 to-transparent h-0.5 mt-6">
        <div className="bg-gray-400 w-9 h-0.5"></div>
      </div>
      <div className="mt-5">
        <h3 className="text-lg font-semibold text-gray-800">Responsive</h3>
        <p className="mt-1 text-gray-600">Responsive, and mobile-first project on the web</p>
      </div>
    </div>
    <div>
      <svg className="shrink-0 size-9 text-gray-800" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 7h-9"/><path d="M14 17H5"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/></svg>
      <div className="bg-gradient-to-r from-gray-200 via-gray-50 to-transparent h-0.5 mt-6">
        <div className="bg-gray-400 w-9 h-0.5"></div>
      </div>
      <div className="mt-5">
        <h3 className="text-lg font-semibold text-gray-800">Customizable</h3>
        <p className="mt-1 text-gray-600">Components are easily customized and extendable</p>
      </div>
    </div>
    <div>
      <svg className="shrink-0 size-9 text-gray-800" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
      <div className="bg-gradient-to-r from-gray-200 via-gray-50 to-transparent h-0.5 mt-6">
        <div className="bg-gray-400 w-9 h-0.5"></div>
      </div>
      <div className="mt-5">
        <h3 className="text-lg font-semibold text-gray-800">Documentation</h3>
        <p className="mt-1 text-gray-600">Every component and plugin is well documented</p>
      </div>
    </div>
    <div>
      <svg className="shrink-0 size-9 text-gray-800" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"/><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"/></svg>
      <div className="bg-gradient-to-r from-gray-200 via-gray-50 to-transparent h-0.5 mt-6">
        <div className="bg-gray-400 w-9 h-0.5"></div>
      </div>
      <div className="mt-5">
        <h3 className="text-lg font-semibold text-gray-800">24/7 Support</h3>
        <p className="mt-1 text-gray-600">Contact us 24 hours a day, 7 days a week</p>
      </div>
    </div>
  </div>
</div>
  )
}

export default Services
