import { useMutation, useQueryClient } from '@tanstack/react-query';
import createComment from '../service/createComment';
import { CreateCommentPayload } from '../../../../commons/types/comments';
import { toast } from 'sonner';

type Args = {
  payload: CreateCommentPayload;
};

const useCreateComment = () => {
  const queryClient = useQueryClient();

  const { isPending, mutate: handleCreateComment } = useMutation({
    mutationFn: ({ payload }: Args) => createComment(payload),
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
    handleCreateCommentIsLoading: isPending,
    handleCreateComment,
  };
};

export default useCreateComment;
