import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { Outlet } from '@remix-run/react';

const Public = () => {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = (event: Event) => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='bg-main h-full'>
      <Navbar scrollTop={scrollTop} />
      <div className='overflow-auto scroll-smooth grow'>
        <Outlet />
      </div>
    </div>
  );
};

export default Public;
