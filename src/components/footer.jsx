import React from 'react'
import '../styles/footer.css'
import { FaTelegramPlane, FaInstagram, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

const Footer = () => {
    return (
        <>

        <footer className='w-percent-100 white flex flex-col flex-wrap'>

            <div className='flex  mx-50 py-50 flex-wrap'>
            <div className='footer-container flex w-percent-25 justify-center'>
                <div className='flex flex-col'>
                    {/* <img src="" alt=""/> */} <h1 className='uppercase pointer'>Knowledge</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, eveniet.</p>
                </div>
                </div>
                <div className='footer-container flex w-percent-25 justify-center'>
                <div className='flex flex-col'>
                    <ul className='list-style-none lightGrey'>
                        <li className='white font-19 mb-30 uppercase'>home</li>
                        <li className='font-17 my-10 pointer'>home</li>
                        <li className='font-17 my-10 pointer'>home</li>
                        <li className='font-17 my-10 pointer'>home</li>
                        <li className='font-17 my-10 pointer'>home</li>
                    </ul>
                </div>
                </div>
                <div className='footer-container flex w-percent-25 justify-center'>
                <div className='flex flex-col'>
                    <ul className='list-style-none lightGrey'>
                        <li className='white font-19 mb-30 uppercase'>home</li>
                        <li className='font-17 my-10 pointer'>home</li>
                        <li className='font-17 my-10 pointer'>home</li>
                        <li className='font-17 my-10 pointer'>home</li>
                        <li className='font-17 my-10 pointer'>home</li>
                    </ul>
                </div>
                </div>
                <div className='footer-container flex w-percent-25 justify-center'>
                <div className='flex flex-col '>
                <ul className='list-style-none lightGrey'>
                        <li className='white font-19 mb-30 uppercase'>Contact</li>
                    <div className='pointer flex'>
                        <FaPhoneAlt className=' mr-10 my-10 font-19 pointer' />
                        <a href='/' className='font-17 my-10 pointer lightGrey text-decoration-none'>+998 97 443 00 26</a>
                    </div>
                    <div className='flex pointer hover-white'>
                        <FaMapMarkerAlt className='my-10 mr-10 font-19 pointer hover-white' />
                        <a href='/' className='font-17 my-10 pointer lightGrey text-decoration-none hover-white'>Address</a>
                    </div>
                    <div className='flex'>
                        <FiMail  className='ml-0 mt-10 pointer font-25' />
                        <FaTelegramPlane  className='ml-20 mt-10 pointer font-25' />
                        <FaInstagram  className='ml-20 mt-10 pointer font-25' />
                    </div>
                    </ul>
                </div>
                </div>
                
            </div>

            <div className='flex justify-center my-20'>
                <p>Lorem ipsum dolor, sit amet consectetur</p>
            </div>
        </footer>  

        </>
    )
}

export default Footer
