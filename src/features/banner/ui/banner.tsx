import React from 'react';
import { Link } from 'react-router-dom';
import './banner.css';

export const Banner = () => {
  return (
    <section className="banner">
      <div className="container">
        <div className="start-buy">
          <div className="banners">
            <img src="img/pic/rasprodazha1.svg" alt="banner" />
            {/* <img src='img/pic/ad-takamine.svg' alt="banner" /> */}
          </div>
          {/* <button className='btn-start'>
                <Link to='/catalog' >
                   <img src='img/pic/start-buy.svg' alt="banner" />
                   </Link>
                </button> */}
        </div>
      </div>
    </section>
  );
};
