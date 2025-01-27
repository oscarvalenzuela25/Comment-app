import React, { ButtonHTMLAttributes, FC, JSX } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { TailwindUtils } from '../utilities/tailwindUtils';

const buttonVariants = cva(
  'flex items-center text-base font-bold gap-1.5 transition-colors duration-300',
  {
    variants: {
      variant: {
        primary: 'text-moderateBlue hover:text-lightGrayishBlue',
        error: 'text-softRed hover:text-paleRed',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
);

type Props = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    label: string;
    startIcon?: JSX.Element;
    endIcon?: JSX.Element;
  };

const IconButton: FC<Props> = ({
  variant,
  className,
  label,
  startIcon,
  endIcon,
  ...props
}) => {
  const classes = TailwindUtils.cn(buttonVariants({ variant }), className);

  return (
    <button className={classes} {...props}>
      {startIcon} {label} {endIcon}
    </button>
  );
};

export default IconButton;
