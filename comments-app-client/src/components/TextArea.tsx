import { FC, TextareaHTMLAttributes } from 'react';
import { TailwindUtils } from '../utilities/tailwindUtils';

type Props = TextareaHTMLAttributes<HTMLTextAreaElement>;

const TextArea: FC<Props> = ({ value = '', rows = 3, className, ...props }) => {
  const classes = TailwindUtils.cn(
    'flex-grow border rounded-lg py-2 px-4 border-moderateBlue/50 focus:border-moderateBlue outline-moderateBlue resize-none',
    className,
  );
  return (
    <textarea
      value={value}
      className={classes}
      placeholder="Escribe tu comentario..."
      rows={rows}
      {...props}
    />
  );
};

export default TextArea;
