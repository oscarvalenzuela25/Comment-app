import { useState } from 'react';
import Swal from 'sweetalert2';
import useGetUser from '../../../../../../../hooks/useGetUser';

import { formatDistance } from 'date-fns';
import { es } from 'date-fns/locale';
import { TailwindUtils } from '../../../../../../../utilities/tailwindUtils';
import { PostData } from '../../../../../commons/types/comments';

const usePostCard = () => {
  const { currentUser } = useGetUser();
  const [isUpdateMode, setIsUpdateMode] = useState(false);

  const handleToggleUpdateMode = () => {
    setIsUpdateMode((prevState) => !prevState);
  };

  const handleVerifyOwnComment = (comment: PostData) =>
    currentUser.username === comment.user.username;

  const handleDeletePost = (callback: () => void) => {
    Swal.fire({
      title: 'Delete comment',
      text: "Are you sure you want to delete this comment? This will remove the comment and can't be undone.",
      showCancelButton: true,
      cancelButtonText: 'NO, CANCEL',
      cancelButtonColor: TailwindUtils.theme.colors.grayishBlue,
      confirmButtonText: 'YES, DELETE',
      confirmButtonColor: TailwindUtils.theme.colors.softRed,
    }).then((result) => {
      if (result.isConfirmed) {
        callback();
        Swal.fire({
          title: 'Deleted!',
          icon: 'success',
          confirmButtonText: 'Ok',
          confirmButtonColor: TailwindUtils.theme.colors.moderateBlue,
        });
      }
    });
  };

  const handleFormatDistance = (
    laterDate: string | number | Date,
    earlierDate: string | number | Date,
  ): string => {
    return formatDistance(laterDate, earlierDate, {
      locale: es,
      addSuffix: true,
    });
  };

  return {
    isUpdateMode,
    handleToggleUpdateMode,
    handleVerifyOwnComment,
    handleDeletePost,
    handleFormatDistance,
  };
};

export default usePostCard;
