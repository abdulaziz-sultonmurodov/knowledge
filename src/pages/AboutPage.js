import React from 'react'
import '../styles/about.css'

const AboutPage = () => {
    return (
        <>
            <div className='about-container flex m-100 justify-between align-center flex-wrap'>
                <div className='about-position w-percent-40'>
                    <h1>About Us</h1>
                    <p className='font-15 line-h-24'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam beatae nobis perspiciatis totam accusamus aut, sint nesciunt, veritatis quasi ipsum facilis cupiditate molestias, unde quia odio porro praesentium mollitia numquam placeat voluptatibus. Non adipisci accusantium fugit eaque est animi alias consectetur cupiditate fugiat nostrum, vitae possimus inventore sapiente itaque similique.
                    </p>
                    <p className='font-15 line-h-24'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam beatae nobis perspiciatis totam accusamus aut, sint nesciunt, veritatis quasi ipsum facilis cupiditate molestias, unde quia odio porro praesentium mollitia numquam placeat voluptatibus. Non adipisci accusantium fugit eaque est animi alias consectetur cupiditate fugiat nostrum, vitae possimus inventore sapiente itaque similique.
                    </p>
                </div>
                <div className='about-position w-percent-40'>
                    <img className='about-position w-percent-100' src='https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt=''></img>
                </div>
            </div>
        </>
    )
}

export default AboutPage
