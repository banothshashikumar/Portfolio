import React from 'react';
import './Works.css';
import Portfolio1 from '../../assets/portfolio-1.png';
import Portfolio2 from '../../assets/portfolio-2.png';
import Portfolio3 from '../../assets/portfolio-3.png';
import Portfolio4 from '../../assets/portfolio-4.png';
import Portfolio5 from '../../assets/portfolio-5.png';
import Portfolio6 from '../../assets/portfolio-6.png';

const Works = () => {
  return (
    <section id='works'>
        <div className='worksTitle'>My Portfolio</div>
        <span className='worksDesc'>
            I pay attention to the smallest details and ensure that my work is pixel-perfect. I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence.
        </span>
        <div className="worksImgs">
            <img src={Portfolio1} alt='Portfolio 1' className='worksImg'/>
            <img src={Portfolio2} alt='Portfolio 2' className='worksImg'/>
            <img src={Portfolio3} alt='Portfolio 3' className='worksImg'/>
            <img src={Portfolio4} alt='Portfolio 4' className='worksImg'/>
            <img src={Portfolio5} alt='Portfolio 5' className='worksImg'/>
            <img src={Portfolio6} alt='Portfolio 6' className='worksImg'/>
        </div>
        <div className='workBtn'>See More</div>
    </section>
  );
}

export default Works;
