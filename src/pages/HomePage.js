import React from 'react'
import Courses from '../components/Courses'
import '../styles/homepage.css'

const HomePage = () => {
    return (
        <>
        <div className='relative'>
            <div className='home-container background-repeat-none background-position-center background-size-cover filter-brightness-30'>
            </div>
            <div className='home-position white absolute left-percent-40 top-percent-30 text-spacing text-center'>
                <h1 className='font-40 m-0'>Education Centre</h1>
                <p className='font-19 mt-10 mb-50'>kaskd kasodk osa sdo dko</p>
                <a href='/'><button className='button-home bg-blue text-spacing b-radius-20 outline-none border-none py-10 px-50 white font-22 pointer'>Enroll</button></a>
            </div>
        </div>

        <Courses />
        </>
    )
}

export default HomePage
