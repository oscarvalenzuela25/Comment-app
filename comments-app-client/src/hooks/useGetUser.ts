import amyrobson from '../assets/avatars/image-amyrobson.png';
import juliusomo from '../assets/avatars/image-juliusomo.png';
import maxblagun from '../assets/avatars/image-maxblagun.png';
import ramsesmiron from '../assets/avatars/image-ramsesmiron.png';

const useGetUser = () => {
  const avatarList: Record<string, string> = {
    'image-amyrobson.png': amyrobson,
    'image-juliusomo.png': juliusomo,
    'image-maxblagun.png': maxblagun,
    'image-ramsesmiron.png': ramsesmiron,
  };

  const currentUser = {
    username: 'juliusomo',
    avatar: avatarList['image-juliusomo.png'],
  };

  return {
    currentUser,
    avatarList,
  };
};

export default useGetUser;
