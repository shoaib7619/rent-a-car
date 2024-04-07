import React, { useContext} from 'react'
import { TbAirConditioning } from "react-icons/tb";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { MyContext } from "../context/CarContex"
import { useNavigate } from 'react-router-dom';

function CarsList() {
    const { car } = useContext(MyContext)

    const nevigate = useNavigate();
    const imgSrc = `./assets/`;

const handleClick = (id) =>{
    nevigate(`/carDetail/${id}`);
}

    return (
        <>
            <div className="flex flex-wrap justify-center">
                {car.map((singleCar) => (
                    <div key={singleCar.id} className="relative flex w-full max-w-[20rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg transition-transform duration-300 hover:shadow-xl hover:scale-105 m-8 mb-10">
                        <div className="relative mx-3 mt-5 overflow-hidden text-white shadow-sg rounded-xl bg-blue-gray-500 bg-clip-border ">
                            <img
                                src={imgSrc + singleCar.image}
                                alt="ui/ux review check" style={{ width: '250%', height: '250px' }} />
                        </div>
                        <div className="p-6">
                            <div className="flex items-center">
                                {singleCar.air_conditioner === 'Yes' && (
                                    <>
                                        <div className="mr-4"><TbAirConditioning style={{ fontSize: '24px' }} /></div>
                                    </>
                                )}
                                <div className="mr-1">{singleCar.seats}</div>
                                <div className="mr-4"><MdAirlineSeatReclineNormal style={{ fontSize: '24px' }} /></div>
                            </div>
                            <div className="flex items-center justify-between mb-3">
                                <h5 className="block font-sans text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900" key={singleCar.id}>
                                {singleCar.name.length > 10 ? singleCar.name.substring(0, 20) + '...' : singleCar.name} 
                                </h5>
                            </div>
                            <div className="block font-sans text-base antialiased font-light leading-relaxed text-gray-700">
                                {singleCar.description.length > 20 ? singleCar.description.substring(0, 90) + '...' : singleCar.description}
                            </div>
                        </div>
                        <h5 className='ml-7'>Rent per hour: {singleCar.rent}</h5>

                        <div className="p-6 pt-3">
                            <button
                                className="block w-full select-none rounded-lg bg-gray-900 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button" onClick={() => handleClick(singleCar.id)}>
                                Reserve
                            </button>
                        </div>
                    </div>
                ))}
            </div>

        </>
    )
}

export default CarsList
