import React from 'react';
import './Skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';


const Skills = () => {
  return (
  <section id='skills'>
    <span className='skillTitle'>What I do</span>
    <span className='skillDesc'>I am a B.Tech graduate in Mechanical Engineering with a solid foundation in core mechanical principles. My degree has provided me with both theoretical knowledge and practical experience. I am now ready to apply my skills in a professional environment. </span>
    <div className='skillBars'>

        <div className='skillBar'>
            <img src={UIDesign} alt='UIDesign' className='skillBarImg' />
            <div className='skillBarText'>
                <h2>UI/UX design</h2>
                <p> 
Memory updated
I am currently focused on UI/UX design, aiming to create intuitive and engaging user experiences.</p>
            </div>
        </div>

        <div className='skillBar'>
            <img src={WebDesign} alt='WebDesign' className='skillBarImg' />
            <div className='skillBarText'>
                <h2>Website design</h2>
                <p>I am currently focused on website design, aiming to create visually appealing and user-friendly websites.</p>
            </div>
        </div>

        <div className='skillBar'>
            <img src={AppDesign} alt='AppDesign' className='skillBarImg' />
            <div className='skillBarText'>
                <h2>App design</h2>
                <p>I am currently focused on app design, striving to develop intuitive and engaging mobile applications.</p>
            </div>
        </div>

    </div>
  </section>
  )
}

export default Skills
