import { useMutation, useQueryClient } from '@tanstack/react-query';
import createReply from '../service/createReply';
import { toast } from 'sonner';
import { NewReplyPayload } from '../../../../commons/types/reply';

type Args = {
  payload: NewReplyPayload;
};

const useCreateReply = () => {
  const queryClient = useQueryClient();

  const { isPending, mutate: handleCreateReply } = useMutation({
    mutationFn: ({ payload }: Args) => createReply(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['getComments'],
        exact: false,
      });
      toast.success('Comentario creado existosamente!');
    },
    onError: () => {
      toast.error('Error al crear el comentario');
    },
  });

  return {
    handleCreateReplyIsLoading: isPending,
    handleCreateReply,
  };
};

export default useCreateReply;
