import React from 'react'

function About() {
  return (
    <>
      
      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4" style={{textAlign: 'justify'}}>
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white pb-4">About Us</h1>
                    <p className="font-normal text-base leading-6 text-gray-600 dark:text-white">        Welcome to our car rental service! We have been providing reliable and affordable car rental solutions for many years. Our mission is to make your travel experience enjoyable and hassle-free.At our car rental agency, we understand the importance of quality service and customer satisfaction. Whether you need a car for a business trip, vacation, or any other occasion, we have a wide range of vehicles to suit your needs.        Our team is dedicated to providing exceptional customer service and ensuring that you have a positive experience from start to finish. We strive to exceed your expectations and make renting a car easy and convenient.        Thank you for choosing our car rental service. We look forward to serving you and helping you with all of your transportation needs.</p>
                </div>
                <div className="w-full lg:w-8/12">
                    <img className="w-full h-full" src="https://i.ibb.co/FhgPJt8/Rectangle-116.png" alt="A group of People" />
                </div>
            </div>
    
            <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white pb-4">Our Story</h1>
                    <p className="font-normal text-base leading-6 text-gray-600 dark:text-white">        Welcome to our car rental service! Our story begins with a passion for providing reliable and affordable transportation solutions to our customers.        Founded on the principles of integrity, excellence, and customer satisfaction, we have grown to become a trusted name in the car rental industry. Our commitment to quality service and attention to detail sets us apart from the competition. Over the years, we have served countless customers and helped them make their travel experiences memorable. From family vacations to business trips, we strive to meet the diverse needs of our clients and exceed their expectations. As we continue to grow and expand our services, our dedication to providing exceptional customer service remains unwavering. We look forward to serving you and helping you with all of your transportation needs.</p>
                </div>
                <div className="w-full lg:w-8/12 lg:pt-8">
                    <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src="https://i.ibb.co/FYTKDG6/Rectangle-118-2.png" alt="Alexa featured Image" />
                            <img className="md:hidden block" src="https://i.ibb.co/zHjXqg4/Rectangle-118.png" alt="Alexa featured Image" />
                            <p className="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">Alexa</p>
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src="https://i.ibb.co/fGmxhVy/Rectangle-119.png" alt="Olivia featured Image" />
                            <img className="md:hidden block" src="https://i.ibb.co/NrWKJ1M/Rectangle-119.png" alt="Olivia featured Image" />
                            <p className="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">Olivia</p>
                     </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src="https://i.ibb.co/Pc6XVVC/Rectangle-120.png" alt="Liam featued Image" />
                            <img className="md:hidden block" src="https://i.ibb.co/C5MMBcs/Rectangle-120.png" alt="Liam featued Image" />
                            <p className="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">Liam</p>
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src="https://i.ibb.co/7nSJPXQ/Rectangle-121.png" alt="Elijah featured image" />
                            <img className="md:hidden block" src="https://i.ibb.co/ThZBWxH/Rectangle-121.png" alt="Elijah featured image" />
                            <p className="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">Elijah</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
  )
}

export default About

