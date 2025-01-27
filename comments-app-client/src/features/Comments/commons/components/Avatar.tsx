import { FC, ImgHTMLAttributes } from 'react';
import imgAvatar from './../../../../assets/avatars/image-amyrobson.png';
import { cva, type VariantProps } from 'class-variance-authority';
import { TailwindUtils } from '../../../../utilities/tailwindUtils';

const avatarVariants = cva('rounded-full h-min', {
  variants: {
    size: {
      small: 'w-8',
      medium: 'w-10',
      large: 'w-12',
    },
  },
  defaultVariants: {
    size: 'small',
  },
});

type AvatarProps = ImgHTMLAttributes<HTMLImageElement> &
  VariantProps<typeof avatarVariants>;

const Avatar: FC<AvatarProps> = ({ size, src, className, ...props }) => {
  const classes = TailwindUtils.cn(avatarVariants({ size }), className);
  return (
    <img alt="avatar" src={src || imgAvatar} className={classes} {...props} />
  );
};

export default Avatar;
