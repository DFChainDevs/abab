import React from 'react';
import { twMerge } from 'tailwind-merge';

interface Props {
  label: string;
  type?: 'text' | 'password' | 'email';
  textClass?: string;
  inputClass?: string;
  required?: boolean;
  placeholder?: string;
}

const FormInput = ({
  label,
  type = 'text',
  textClass,
  inputClass,
  required,
  placeholder,
}: Props) => {
  return (
    <div className='flex flex-col gap-1'>
      <p className={twMerge(textClass)}>
        {label} {required && <span className='text-red-600'>*</span>}
      </p>
      <input
        placeholder={placeholder}
        className={twMerge(
          'appearance-none bg-transparent p-2 border border-[#444444]/60 rounded hover:border focus:border-[#444444] placeholder:text-[#444444]',
          inputClass
        )}
        type={type}
        required={required}
      />
    </div>
  );
};

export default FormInput;
