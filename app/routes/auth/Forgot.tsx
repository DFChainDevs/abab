import { Link } from '@remix-run/react';
import Button from '~/components/Button';
import FormInput from '~/components/FormInput';

const Forgot = () => {
  return (
    <>
      <h1 className='text-xl font-bold'>Forgot your password</h1>

      <div className='flex flex-col gap-3'>
        <FormInput label={'Email'} required placeholder='Enter Email...' />
        <FormInput label={'Email Verification Code'} required placeholder='Enter Code...' />
        <FormInput label={'Password'} required placeholder='Enter Password...' />
        <FormInput label={'Confirm Password'} required placeholder='Confirm Password...' />
      </div>

      <Button className='bg-accent/80 hover:bg-accent rounded text-primary-text'>Confirm</Button>

      <small className='text-xs mx-auto'>
        Have a ABAB account?{' '}
        <Link to='/auth?t=login' className='hover:text-accent ease-in-out duration-300 text-center'>
          Login to your account
        </Link>
      </small>
    </>
  );
};

export default Forgot;
