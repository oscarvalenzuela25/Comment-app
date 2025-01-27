import { useState } from 'react';
import useGetUser from '../../../../../hooks/useGetUser';
import { PostData, Reply } from '../../../commons/types/comments';
import useCreateReply from '../infrastructure/hooks/useCreateReply';
import { NewReplyPayload } from '../../../commons/types/reply';
import useUpdateReply from '../infrastructure/hooks/useUpdateReply';
import useDeleteReply from '../infrastructure/hooks/useDeleteReply';

const useReplies = () => {
  const [showNewReply, setShowNewReply] = useState(false);
  const [newContentReply, setNewContentReply] = useState('');
  const [commentIdSelected, setCommentIdSelected] = useState<number | null>(
    null,
  );
  const [repliesContent, setRepliesContent] = useState<Record<number, string>>(
    {},
  );
  const { currentUser } = useGetUser();
  const { handleCreateReplyIsLoading, handleCreateReply } = useCreateReply();
  const { handleUpdateReplyIsLoading, handleUpdateReply } = useUpdateReply();
  const { handleDeleteReplyIsLoading, handleDeleteReply } = useDeleteReply();

  const handleSetCommentIdSelected = (commentId: number) => {
    setCommentIdSelected(commentId);
  };

  const handleMapReply = (reply: Reply): PostData => {
    return {
      id: reply.id,
      content: reply.content,
      createdAt: reply.createdAt,
      score: reply.score,
      user: {
        image: reply.user.image,
        username: reply.user.username,
      },
      replyingTo: reply.replyingTo,
    };
  };

  const handleToggleNewReply = () => {
    setShowNewReply((prevState) => !prevState);
  };

  const handleChangeNewReplyContent = (value: string) => {
    setNewContentReply(value);
  };

  const handleSetRepliesContentSelected = (replyId: number, value: string) => {
    setRepliesContent((prevState) => ({
      ...prevState,
      [replyId]: value,
    }));
  };

  const handleSubmitNewReply = () => {
    const payload: NewReplyPayload = {
      username: currentUser.username,
      commentId: commentIdSelected || 0,
      content: newContentReply,
    };
    handleCreateReply({ payload });
  };

  const handleUpdateScoreReply = (reply: PostData, newScore: number) => {
    if (newScore >= 0) {
      const payload = {
        id: reply.id,
        score: newScore,
      };
      handleUpdateReply({ payload });
    }
  };

  const handleUpdateContentReply = (reply: PostData) => {
    const payload = {
      id: reply.id,
      content: repliesContent[reply.id],
    };
    handleUpdateReply({ payload });
  };

  const handleDeleteReplyById = (reply: PostData) => {
    handleDeleteReply({ replyId: reply.id });
  };

  return {
    showNewReply,
    newContentReply,
    commentIdSelected,
    repliesContent,
    handleCreateReplyIsLoading,
    handleUpdateReplyIsLoading,
    handleDeleteReplyIsLoading,
    handleMapReply,
    handleToggleNewReply,
    handleChangeNewReplyContent,
    handleSetCommentIdSelected,
    handleSetRepliesContentSelected,
    handleSubmitNewReply,
    handleUpdateScoreReply,
    handleUpdateContentReply,
    handleDeleteReplyById,
  };
};

export default useReplies;
