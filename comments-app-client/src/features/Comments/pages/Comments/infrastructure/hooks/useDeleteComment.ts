import { useMutation, useQueryClient } from '@tanstack/react-query';
import deleteComment from '../service/deleteComment';
import { toast } from 'sonner';

type Args = {
  commentId: number;
};

const useDeleteComment = () => {
  const queryClient = useQueryClient();

  const { isPending, mutate: handleDeleteComment } = useMutation({
    mutationFn: ({ commentId }: Args) => deleteComment(commentId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['getComments'],
        exact: false,
      });
    },
    onError: () => {
      toast.error('Error al eliminar el comentario');
    },
  });

  return {
    handleDeleteCommentIsLoading: isPending,
    handleDeleteComment,
  };
};

export default useDeleteComment;
