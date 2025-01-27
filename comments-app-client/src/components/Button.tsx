import { ButtonHTMLAttributes, FC } from 'react';
import { TailwindUtils } from '../utilities/tailwindUtils';
import { cva } from 'class-variance-authority';
import Spinner from './Spinner';

const buttonVariants = cva('text-bold py-2 px-6 rounded-lg h-min', {
  variants: {
    variant: {
      base: 'bg-moderateBlue hover:bg-lightGrayishBlue hover:text-veryLightGray text-white',
      disabled:
        'bg-lightGrayishBlue text-veryLightGray hover:bg-lightGrayishBlue/70 hover:text-veryLightGray/70',
      isLoading:
        'bg-lightGrayishBlue text-veryLightGray hover:bg-lightGrayishBlue/70 hover:text-veryLightGray/70',
    },
  },
  defaultVariants: {
    variant: 'base',
  },
});

type Props = { isLoading?: boolean } & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<Props> = ({
  isLoading = false,
  disabled = false,
  className,
  children,
  ...props
}) => {
  let variant: 'base' | 'isLoading' | 'disabled' = 'base';
  if (disabled) {
    variant = 'disabled';
  }
  if (isLoading) {
    variant = 'isLoading';
  }

  const classes = TailwindUtils.cn(buttonVariants({ variant }), className);
  return (
    <button disabled={disabled || isLoading} className={classes} {...props}>
      {isLoading ? <Spinner /> : <>{children}</>}
    </button>
  );
};

export default Button;
