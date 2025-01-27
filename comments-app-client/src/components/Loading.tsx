import { FC, PropsWithChildren } from 'react';

type Props = PropsWithChildren & {
  isLoading: boolean;
};

const Loading: FC<Props> = ({ isLoading, children }) => {
  if (!isLoading) return <>{children}</>;

  return (
    <div className="flex items-center justify-center h-96">
      <div className="flex items-center justify-center space-x-2">
        <div className="w-4 h-4 rounded-full animate-pulse dark:bg-moderateBlue"></div>
        <div className="w-4 h-4 rounded-full animate-pulse dark:bg-moderateBlue"></div>
        <div className="w-4 h-4 rounded-full animate-pulse dark:bg-moderateBlue"></div>
      </div>
    </div>
  );
};

export default Loading;
