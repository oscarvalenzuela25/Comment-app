import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import deleteReply from '../service/deleteReply';

type Args = {
  replyId: number;
};

const useDeleteReply = () => {
  const queryClient = useQueryClient();

  const { isPending, mutate: handleDeleteReply } = useMutation({
    mutationFn: ({ replyId }: Args) => deleteReply(replyId),
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
    handleDeleteReplyIsLoading: isPending,
    handleDeleteReply,
  };
};

export default useDeleteReply;
