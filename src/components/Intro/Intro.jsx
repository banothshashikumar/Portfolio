import React from 'react'
import './Intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll'; 

const Intro = () => {
  return (
    <section id="intro">
        <div className='introContent'>
            <span className='hello'>Hello</span>
            <span className='introtext'>I'm <span className='introName'>Shashi Kumar</span> <br />Student of IIT Guwahti</span>
            <p className='introPara'>I am Shashi Kumar, a Mechanical Engineering student at IIT Guwahati.< br/> My academic background has provided me with a solid foundation in mechanical engineering principles, <br/> I am currently focused on further developing my skills in this field.</p>
            <Link><button className='btn'><img src={btnImg} alt='Hire Me' className='btnImg'/>Hire Me</button></Link>
        </div>
        <img src={bg} alt='Profile' className='bg' />
    </section>
  )
}

export default Intro
