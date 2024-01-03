import { Link } from '@remix-run/react';
import Button from '~/components/Button';
import FormInput from '~/components/FormInput';

const Signup = () => {
  return (
    <>
      <h1 className='text-xl font-bold'>Create ABAB account</h1>

      <div className='flex flex-col gap-3'>
        <FormInput label={'Email'} required placeholder='Enter Email...' />
        <FormInput label={'Email Verification Code'} required placeholder='Enter Code...' />
        <FormInput label={'Password'} required placeholder='Enter Password...' />
        <FormInput label={'Nickname'} required placeholder='Enter Nickname...' />
        <FormInput label={'Invite Code'} placeholder='Enter Invite Code...' />
      </div>

      <div className='flex flex-col gap-3'>
        <h2 className='text-lg font-semibold'>Bank Information</h2>
        <p className='font-semibold'>Only for Indonesian: 🔵BANK</p>
        <FormInput label={'bank Name'} placeholder='Enter Bank Name...' />
        <FormInput label={'bank Account Number'} placeholder='Enter Bank Account Number...' />
        <FormInput label={'bank Owner Name'} placeholder='Enter Bank Owner Name...' />
      </div>

      <Button className='bg-accent/80 hover:bg-accent rounded text-primary-text'>Sign Up</Button>

      <small className='text-xs mx-auto'>
        Have a ABAB account?{' '}
        <Link to='/auth?t=login' className='hover:text-accent ease-in-out duration-300 text-center'>
          Login to your account
        </Link>
      </small>
    </>
  );
};

export default Signup;
