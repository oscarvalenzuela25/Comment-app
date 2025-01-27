import { FC, PropsWithChildren } from 'react';
import { TailwindUtils } from '../../../../utilities/tailwindUtils';

type Props = PropsWithChildren & {
  className?: string;
};

const Pill: FC<Props> = ({ children, className }) => {
  const classes = TailwindUtils.cn(
    'bg-moderateBlue text-white font-bold px-2 py-1 text-xs',
    className,
  );
  return <div className={classes}>{children}</div>;
};

export default Pill;
