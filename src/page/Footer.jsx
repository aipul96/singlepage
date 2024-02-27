import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-row gap-12  '>
      <div className='mt-4 mb-4'>
        <h2>CATEGORIES</h2>
        <p>Web Builder</p>
        <p>Hosting</p>
        <p>Data Center</p>
        <p>Robotic-Automation</p>
      </div>
      <div className='mt-4 mb-4'>
        <h1>CONTACT</h1>
        <p>Web Builder</p>
        <p>Hosting</p>
        <p>Data Center</p>
        <p>About</p>
      </div>
      <div className=' flex flex-col items-center justify-center mt-4 mb-4'>
        <p >United States</p>
      </div>
    </div>
  )
}

export default Footer