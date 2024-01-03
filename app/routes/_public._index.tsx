import type { MetaFunction } from '@remix-run/node';
import { Link, useNavigate } from '@remix-run/react';
import banner1 from '~/assets/images/banner-1.png';
import banner2 from '~/assets/images/banner-2.png';
import banner3 from '~/assets/images/banner-3.png';
import banner4 from '~/assets/images/banner-4.png';
import banner5 from '~/assets/images/banner-5.png';
import banner6 from '~/assets/images/banner-6.png';
import banner7 from '~/assets/images/banner-7.png';
import logoWithText from '~/assets/images/logo-with-text.png';
import Button from '~/components/Button';

export const meta: MetaFunction = () => {
  return [{ title: 'ABAB' }, { name: 'description', content: 'Abab New Trading Experience' }];
};

export default function Index() {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col'>
      <div className='h-screen w-full relative overflow-hidden flex items-center gap-5 py-5 px-20'>
        <img
          src={banner1}
          alt='Banner 1'
          className='absolute left-0 top-0 w-full blur-md origin-center scale-105 opacity-50'
        />

        <img src={banner1} alt='Banner 1' className='z-10 max-w-[50%]' />

        <div className='flex flex-col gap-5'>
          <h1 className='text-accent text-5xl z-10 font-bold'>Earn Unlimited Income In Minutes</h1>

          <p className='z-10 text-white font-semibold text-lg'>
            Thriving to become one of the best trading platforms in the world, ABAB is committed to
            providing our customers with the best trading experience.
          </p>

          <Button
            className='bg-accent/80 hover:bg-accent rounded text-primary-text z-10 uppercase'
            onClick={() => navigate('/auth?t=login')}
          >
            Get Started For Free
          </Button>
        </div>
      </div>

      <Link to='/login'>
        <img src={banner2} className='h-screen w-full' />
      </Link>

      <img src={banner3} className='h-screen w-full' />
      <img src={banner4} className='h-screen w-full' />
      <img src={banner5} className='h-screen w-full' />
      <img src={banner6} className='h-screen w-full' />
      <img src={banner7} className='h-screen w-full' />

      <div className='flex justify-center gap-20 p-10 text-primary-text'>
        <div className='flex flex-col gap-2'>
          <img src={logoWithText} alt='Logo With Text' width={175} />
          <small className='text-xs'>© 2023 ABAB. All rights reserved.</small>
        </div>

        <div className='flex flex-col gap-5'>
          <p className='text-lg font-bold'>Support</p>

          <div className='flex flex-col gap-2'>
            <Link className='hover:text-accent ease-in-out duration-300' to='/obligations'>
              VIP Obligations
            </Link>
            <Link className='hover:text-accent ease-in-out duration-300' to='/privacy-policy'>
              Privacy Policy
            </Link>
            <Link className='hover:text-accent ease-in-out duration-300' to='/abusing-policy'>
              Abusing Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
