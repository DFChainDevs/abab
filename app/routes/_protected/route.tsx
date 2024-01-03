import Navbar from './Navbar';
import { Outlet } from '@remix-run/react';

const Protected = () => {
  return (
    <div className='h-full'>
      <Navbar />
      <div className='overflow-auto scroll-smooth grow'>
        <Outlet />
      </div>
    </div>
  );
};

export default Protected;
