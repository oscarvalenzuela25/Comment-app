import { useState } from 'react';
import useGetUser from '../../../../../hooks/useGetUser';
import useCreateComment from '../infrastructure/hooks/useCreateComment';
import useUpdateComment from '../infrastructure/hooks/useUpdateComment';
import useDeleteComment from '../infrastructure/hooks/useDeleteComment';
import {
  Comments,
  PostData,
  UpdateCommentPayload,
} from '../../../commons/types/comments';

const useCommentsHandler = () => {
  const [newCommentContent, setNewCommentContent] = useState('');
  const [commentContentSelected, setCommentContentSelected] = useState<
    string | null
  >(null);
  const { currentUser } = useGetUser();
  const { handleCreateCommentIsLoading, handleCreateComment } =
    useCreateComment();
  const { handleUpdateCommentIsLoading, handleUpdateComment } =
    useUpdateComment();
  const { handleDeleteCommentIsLoading, handleDeleteComment } =
    useDeleteComment();

  const handleMapComment = (comment: Comments): PostData => {
    return {
      id: comment.id,
      content: comment.content,
      createdAt: comment.createdAt,
      score: comment.score,
      user: {
        image: comment.user.image,
        username: comment.user.username,
      },
    };
  };

  const handleChangeNewCommentContent = (value: string) => {
    setNewCommentContent(value);
  };

  const handleSetCommentContentSelected = (
    _commentId: number,
    value: string,
  ) => {
    setCommentContentSelected(value);
  };

  const handleSubmitNewComment = () => {
    const payload = {
      content: newCommentContent,
      username: currentUser.username,
    };
    handleCreateComment({ payload });
    setNewCommentContent('');
  };

  const handleUpdateScoreComment = (comment: PostData, newScore: number) => {
    if (newScore >= 0) {
      const payload: UpdateCommentPayload = {
        id: comment.id,
        score: newScore,
      };
      handleUpdateComment({ payload });
    }
  };

  const handleUpdateContentComment = (comment: PostData) => {
    const payload: UpdateCommentPayload = {
      id: comment.id,
      content: commentContentSelected || '',
    };
    handleUpdateComment({ payload });
  };

  const handleDeleteCommentById = (comment: PostData) => {
    handleDeleteComment({ commentId: comment.id });
  };

  return {
    newCommentContent,
    commentContentSelected,
    handleCreateCommentIsLoading,
    handleUpdateCommentIsLoading,
    handleDeleteCommentIsLoading,
    handleMapComment,
    handleChangeNewCommentContent,
    handleSetCommentContentSelected,
    handleSubmitNewComment,
    handleUpdateScoreComment,
    handleUpdateContentComment,
    handleDeleteCommentById,
  };
};

export default useCommentsHandler;
