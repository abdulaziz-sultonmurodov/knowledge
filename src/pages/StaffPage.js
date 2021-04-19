import React from 'react'
import { FaTelegramPlane, FaInstagram } from 'react-icons/fa';
import '../styles/staff.css'

const StaffPage = () => {
    return (
        <>
            <h1 className='text-center'>Staff Members</h1>

            <div className='staff-holder flex justify-evenly align-center m-100 flex-wrap'>

                <div className='staff-container w-percent-30 flex justify-between align-center'> 
                    <div className='flex flex-col justify-between my-20'>
                        <img className='border-percent-50 w-150 h-150' src="https://images.pexels.com/photos/5648107/pexels-photo-5648107.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                        <div className='flex justify-evenly align-center mt-20 font-25'>
                            <FaTelegramPlane />
                            <FaInstagram />
                        </div>
                    </div>
                    <div className='ml-30'>
                        <p>Lorem, ipsum dolor.</p>
                        <p>Lorem ipsum dolor sit.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis deserunt maxime magni ea. Atque ut nam perferendis at eius laudantium?</p>
                    </div>
                </div>

                <div className='staff-container w-percent-30 flex justify-between align-center'> 
                    <div className='flex flex-col justify-between my-20'>
                        <img className='border-percent-50 w-150 h-150' src="https://images.pexels.com/photos/5648107/pexels-photo-5648107.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                        <div className='flex justify-evenly align-center mt-20 font-25'>
                            <FaTelegramPlane />
                            <FaInstagram />
                        </div>
                    </div>
                    <div className='ml-30'>
                        <p>Lorem, ipsum dolor.</p>
                        <p>Lorem ipsum dolor sit.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis deserunt maxime magni ea. Atque ut nam perferendis at eius laudantium?</p>
                    </div>
                </div>

                <div className='staff-container w-percent-30 flex justify-between align-center'> 
                    <div className='flex flex-col justify-between my-20'>
                        <img className='border-percent-50 w-150 h-150' src="https://images.pexels.com/photos/5648107/pexels-photo-5648107.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                        <div className='flex justify-evenly align-center mt-20 font-25'>
                            <FaTelegramPlane />
                            <FaInstagram />
                        </div>
                    </div>
                    <div className='ml-30'>
                        <p>Lorem, ipsum dolor.</p>
                        <p>Lorem ipsum dolor sit.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis deserunt maxime magni ea. Atque ut nam perferendis at eius laudantium?</p>
                    </div>
                </div>
             
                
            </div>
        </>
    )
}

export default StaffPage
