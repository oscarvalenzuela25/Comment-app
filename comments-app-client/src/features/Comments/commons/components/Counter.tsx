import { FC } from 'react';

type Props = {
  likes: number;
  min?: number;
  max?: number;
  handleIncrement: VoidFunction;
  handleDecrement: VoidFunction;
};

const Counter: FC<Props> = ({
  likes,
  min,
  max,
  handleIncrement,
  handleDecrement,
}) => {
  let handleIncrementCounter: VoidFunction | undefined = handleIncrement;
  let handleDecrementCounter: VoidFunction | undefined = handleDecrement;
  if (max !== undefined && max < likes) handleIncrementCounter = undefined;
  if (min !== undefined && min > likes) handleDecrementCounter = undefined;

  return (
    <div className="flex flex-col items-center rounded-lg bg-lightGray gap-2 font-bold px-2 py-1 h-min">
      <button
        onClick={handleIncrementCounter}
        className="text-lightGrayishBlue hover:text-moderateBlue transition-all duration-300"
      >
        +
      </button>
      <p className="text-moderateBlue">{likes}</p>
      <button
        onClick={handleDecrementCounter}
        className="text-lightGrayishBlue hover:text-moderateBlue transition-all duration-300"
      >
        -
      </button>
    </div>
  );
};

export default Counter;
