import { FC } from 'react';
import PostCard from './PostCard';
import ActionCard from './ActionCard';
import useCommentsHandler from '../hooks/useCommentsHandler';
import useReplies from '../hooks/useReplies';
import { Comments } from '../../../commons/types/comments';

type Props = {
  comment: Comments;
};

const CommentContainer: FC<Props> = ({ comment }) => {
  const replies = comment?.replies || [];
  const hasReplies = replies.length > 0;

  const {
    commentContentSelected,
    handleUpdateCommentIsLoading,

    handleMapComment,
    handleSetCommentContentSelected,
    handleUpdateScoreComment,
    handleUpdateContentComment,
    handleDeleteCommentById,
  } = useCommentsHandler();
  const {
    showNewReply,
    newContentReply,
    repliesContent,
    handleUpdateReplyIsLoading,
    handleCreateReplyIsLoading,

    handleMapReply,
    handleToggleNewReply,
    handleChangeNewReplyContent,
    handleSetCommentIdSelected,
    handleSetRepliesContentSelected,
    handleSubmitNewReply,
    handleUpdateScoreReply,
    handleUpdateContentReply,
    handleDeleteReplyById,
  } = useReplies();

  return (
    <div className="flex flex-col">
      <PostCard
        post={handleMapComment(comment)}
        postSelected={commentContentSelected}
        handleUpdatePostIsLoading={handleUpdateCommentIsLoading}
        handleShowReply={() => {
          handleToggleNewReply();
          handleSetCommentIdSelected(comment.id);
        }}
        handleUpdateScore={handleUpdateScoreComment}
        handleDeleteById={handleDeleteCommentById}
        handleSetContentSelected={handleSetCommentContentSelected}
        handleUpdateContentPost={handleUpdateContentComment}
      />
      {showNewReply && (
        <ActionCard
          type="reply"
          content={newContentReply}
          isLoading={handleCreateReplyIsLoading}
          handleChangeContent={handleChangeNewReplyContent}
          handleSubmit={() => {
            handleSubmitNewReply();
            handleToggleNewReply();
          }}
        />
      )}
      {hasReplies && (
        <div className="flex">
          <div className="w-1 bg-lightGray mx-9 mt-3"></div>
          <div className="flex flex-col w-full">
            {replies.map((reply) => (
              <PostCard
                key={reply.id}
                post={handleMapReply(reply)}
                postSelected={repliesContent[reply.id]}
                handleUpdatePostIsLoading={handleUpdateReplyIsLoading}
                handleUpdateScore={handleUpdateScoreReply}
                handleDeleteById={handleDeleteReplyById}
                handleSetContentSelected={handleSetRepliesContentSelected}
                handleUpdateContentPost={handleUpdateContentReply}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CommentContainer;
