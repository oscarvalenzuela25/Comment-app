import { useMutation, useQueryClient } from '@tanstack/react-query';
import { UpdateCommentPayload } from '../../../../commons/types/comments';
import updateComment from '../service/updateComment';
import { toast } from 'sonner';

type Args = {
  payload: UpdateCommentPayload;
};

const useUpdateComment = () => {
  const queryClient = useQueryClient();

  const { isPending, mutate: handleUpdateComment } = useMutation({
    mutationFn: ({ payload }: Args) => updateComment(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['getComments'],
        exact: false,
      });
    },
    onError: () => {
      toast.error('Error al actualizar el comentario');
    },
  });

  return {
    handleUpdateCommentIsLoading: isPending,
    handleUpdateComment,
  };
};

export default useUpdateComment;
