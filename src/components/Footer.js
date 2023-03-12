import React from 'react';

import LogoWhite from '../assets/img/logo-white.svg';


const Footer = () => {
  return <footer className='bg-primary py-12'>
    <div className='container mx-auto text-white flex justify-between'>
      <a href="/">
        <img className='w-[160px] h-[33px]' src={LogoWhite} alt="" set="" />
      </a>
      Copyright &copy; 2023. All rights reserved.
    </div>
  </footer>;
};

export default Footer;
