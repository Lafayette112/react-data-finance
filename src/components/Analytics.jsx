import React from 'react';
import Laptop from '../assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4' id='dashboard'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={Laptop} alt='notebook' />
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
                <p className='text-start'>Data dashboards are designed to connect and help extract important information from a wide variety of different data sources, services, and APIs. This information is displayed in a single, unified view via visuals such as charts, figures, graphs, and tables. An organization can have a different customizable dashboard for each department and even a dashboard for each individual project, which helps provide granular monitoring of very specific KPIs.</p>
                <button className='bg-[#242424] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-[#00df9a]'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Analytics