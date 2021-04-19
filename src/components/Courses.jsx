import React from 'react'
import '../styles/courses.css'

const Courses = () => {
    return (
        <>
            
            <div className='flex flex-col justify-center align-center m-50'>
                <h1 className='mt-50 mb-10 text-spacing'>Courses</h1>
                <p className='m-0'>The best courses ever</p>
            </div>
            <div className='m-50'>

                <div className='position-courses w-percent-30 flex flex-col text-center m-50'>
                    <img className='w-percent-100' src="https://ichef.bbci.co.uk/news/976/cpsprodpb/14BA6/production/_110220948_students8.jpg" alt=""/>
                    <h2 className='mt-10 mb-5'>Lorem ipsum dolor sit.</h2>
                    <p className='m-0'>Lorem, ipsum.</p>
                    <p className='my-20'>Lorem ipsum dolor sit.</p>
                </div>

            </div>


        </>
    )
}

export default Courses
