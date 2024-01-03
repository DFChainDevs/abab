import { useSearchParams } from '@remix-run/react';
import apes from '~/assets/images/apes.png';
import logoWithText from '~/assets/images/logo-with-text.png';
import Signup from './Signup';
import Login from './Login';
import Forgot from './Forgot';

const Auth = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const type = searchParams.get('t');
  return (
    <div className='flex gap-10 items-center px-32 py-20 h-screen'>
      <div className='flex items-center gap-5 max-w-[50%]'>
        <img src={apes} alt='Apes' className='w-[50%]' />

        <div className='border-2 border-primary-text rounded-md p-5 w-[50%]'>
          <img src={logoWithText} alt='Logo With Text' />
        </div>
      </div>

      <div className='bg-secondary rounded-md p-10 text-primary-text grow flex flex-col gap-10 max-h-full overflow-y-auto'>
        {type === 'signup' ? <Signup /> : type === 'forgot' ? <Forgot /> : <Login />}
      </div>
    </div>
  );
};

export default Auth;
