import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { UpdateReplyPayload } from '../../../../commons/types/reply';
import updateReply from '../service/updateReply';

type Args = {
  payload: UpdateReplyPayload;
};

const useUpdateReply = () => {
  const queryClient = useQueryClient();

  const { isPending, mutate: handleUpdateReply } = useMutation({
    mutationFn: ({ payload }: Args) => updateReply(payload),
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
    handleUpdateReplyIsLoading: isPending,
    handleUpdateReply,
  };
};

export default useUpdateReply;
