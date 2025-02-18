import { FC } from 'react';

type Props = {
  width?: number;
  height?: number;
  className?: string;
};

const UpdateIcon: FC<Props> = ({ width, height, className }) => {
  return (
    <svg width={width || 14} height={height || 14} className={className}>
      <path d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z" />
    </svg>
  );
};

export default UpdateIcon;
