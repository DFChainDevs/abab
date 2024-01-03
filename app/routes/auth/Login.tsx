import { Link, useNavigate } from '@remix-run/react';
import Button from '~/components/Button';
import FormInput from '~/components/FormInput';

const Login = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1 className='text-xl font-bold'>Log in to your account</h1>

      <div className='flex flex-col gap-3'>
        <FormInput label={'Email'} required placeholder='Enter Email...' />
        <FormInput label={'Password'} required placeholder='Enter Password...' type='password' />

        <Link
          to='/auth?t=forgot'
          className='text-xs hover:text-accent ml-auto ease-in-out duration-300'
        >
          Forgot Password?
        </Link>
      </div>

      <Button
        className='bg-accent/80 hover:bg-accent rounded text-primary-text'
        onClick={() => navigate('/trade')}
      >
        Sign In
      </Button>

      <small className='text-xs mx-auto'>
        Need a ABAB account?{' '}
        <Link
          to='/auth?t=signup'
          className='hover:text-accent ease-in-out duration-300 text-center'
        >
          Create an account
        </Link>
      </small>
    </>
  );
};

export default Login;
