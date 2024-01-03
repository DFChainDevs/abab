import logo from '~/assets/images/abab.png';
import Button from '../Button';
import { twMerge } from 'tailwind-merge';
import { useNavigate } from '@remix-run/react';

interface Props {
  scrollTop: number;
}

const Navbar = ({ scrollTop }: Props) => {
  const navigate = useNavigate();
  return (
    <div
      className={twMerge(
        'flex justify-between items-center p-5 bg-primary ease-in-out duration-300 fixed z-50 w-full',
        scrollTop && 'bg-secondary/80'
      )}
    >
      <img src={logo} className='h-10 cursor-pointer' onClick={() => navigate('/')} />

      <div className='flex items-center gap-5'>
        <Button onClick={() => navigate('/auth?t=login')}>Login</Button>
        <Button
          onClick={() => navigate('/auth?t=signup')}
          className='border border-accent rounded hover:bg-accent text-accent hover:text-secondary'
        >
          Join Now
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
