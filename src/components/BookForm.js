import React, { useContext } from 'react';

import AdultsDropdown from '../components/AdultsDropdown';
import KidsDropdown from '../components/KidsDropdown';
import CheckIn from '../components/CheckIn';
import CheckOut from '../components/CheckOut';
import { RoomContext } from '../context/RoomContext';


const BookForm = () => {
  const {handleClick} = useContext(RoomContext)
  return <form className='h-[300px] bg-green-100 w-full lg:h-[70px]'>
    <div className='flex flex-col w-full h-full lg:flex-row'>
      <div className='flex-1 border border-r-0'>
        <CheckIn />
      </div>
      <div className='flex-1 border border-r-0'>
        <CheckOut />
      </div>
      <div className='flex-1 border border-r-0'>
        <AdultsDropdown />
      </div>
      <div className='flex-1 border border-r-0'>
        <KidsDropdown />
      </div>
      <button onClick={(e) => handleClick(e)} type='submit' className='btn btn-primary font-semibold'>Check now</button>
    </div>
  </form>;
};

export default BookForm;
