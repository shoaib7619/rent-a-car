import React from 'react'
import Image from '/assets/Banner.jpg';

function Banner() {
  return (
    <>
         <section className='h-full max-h-[640px] mb-8 xl:mb-24'>
      <div className='flex flex-col lg:flex-row'>
        <div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
          <h1 className='text-4xl lg:text-[58px] font-bold leading-none mb-6'>
            <span className='text-blue-700'>Drive</span> Your Dream Car With Us.
          </h1>
          <p className='max-w-[580px] mb-8 '>
          Revolutionize Your Car Rental Experience: Discover Your Ideal Vehicle Effortlessly! Our App Delivers Seamless Searches, Intuitive Features, and Expert Advice. Elevate Your Journey with Smart Navigation, Comprehensive Listings, and Real-time Updates. Whether Renting or Leasing, Empower Your Automotive Adventure Today. Explore the Future of Car Rentals with Us!
          </p>
        </div>
       
        <div className='hidden flex-1 lg:flex justify-end items-end mt-5 pr-5'>
          <img src={Image} alt='' style={{ borderRadius: '20%', height: '500px'  }} />
        </div>
      </div>
    </section>
    </>
  )
}

export default Banner
