import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MyContext } from "../context/CarContex";
import { Roller } from "react-awesome-spinners";
import Contact from '../components/Contact'

function CarDetail() {
  const { id } = useParams();
  const { car } = useContext(MyContext);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    setLoading(true);
    const carDetail = car.find((car) => car.id === parseInt(id));
    if (carDetail) {
      setLoading(false);
    }
  }, [car, id]);

  const imgSrc = `/assets/`;
  const carDetail = car.find((car) => car.id === parseInt(id));

  return (
    <>
      {loading && (
        <div className="spinner-overlay">
          <Roller />
        </div>
      )}
      <div className='container ml-6 mt-9 pr-8 '>
        <section className='border border-gray-200 rounded-lg p-6 m-4'>
          <div className='container mx-auto min-h-[800px] mb-14'>
            <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between'>
              <div>
                <h1 className='text-2xl font-semibold m-2'>{carDetail.name}</h1>
                <h3 className='text-lg mb-2 mt-1 m-2'>{carDetail.address}</h3>
              </div>
              <div className='mb-4 lg:mb-0 flex gap-x-2 text-sm'>
                <div className='bg-green-500 text-white px-3 rounded-full'>{carDetail.country}</div>
                <div className='bg-violet-500 text-white px-3 rounded-full'>{carDetail.available}</div>
              </div>
            </div>
            <div className='flex flex-col items-start gap-8 lg:flex-row'>
              <div className='max-w-[768px]'>
                <div className='mb-8 ml-8 mt-5 rounded-xl'>
                  <img src={imgSrc + carDetail.image} alt='no image' style={{ width: '600px', height: '350px', }} className='rounded-xl' />
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <div className='text-3xl font-semibold text-violet-900 pb-6' style={{ marginRight: "4rem" }}>
                    <span style={{ marginRight: ".5rem" }}>Rent:</span>
                    {carDetail.rent}/hr
                  </div>
                </div>
                <div>{carDetail.description}</div>
                <h1 className='font-bold mt-4 ml-6'>Specifications</h1>
                <ul className='list-disc pl-8 ml-8'>
                  <li>Air Conditioner: {carDetail.air_conditioner}</li>
                  <li>Seats: {carDetail.seats}</li>
                  <li>Engine Power: {carDetail.engine_power}</li>
                  <li>Engine Type: {carDetail.engine_type}</li>
                  <li>Model: {carDetail.model}</li>
                </ul>
              </div>
              <Contact/>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default CarDetail;
