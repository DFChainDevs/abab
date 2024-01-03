import { MouseEventHandler, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props {
  className?: string;
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

const Button = ({ className, children, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        'px-4 py-2 text-secondary-text font-semibold hover:text-primary-text ease-in-out duration-300',
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
