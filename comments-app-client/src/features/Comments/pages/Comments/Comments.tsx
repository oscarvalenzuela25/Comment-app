import { FC } from 'react';
import CommentContainer from './components/CommentContainer';
import useComments from './hooks/useComments';
import ActionCard from './components/ActionCard';
import Loading from '../../../../components/Loading';
import useCommentsHandler from './hooks/useCommentsHandler';

const Comments: FC = () => {
  const { endOfPageRef, commentsData, commentsIsLoading } = useComments();

  const {
    newCommentContent,
    handleCreateCommentIsLoading,
    handleChangeNewCommentContent,
    handleSubmitNewComment,
  } = useCommentsHandler();

  return (
    <div className="flex justify-center">
      <div className="w-1/2 flex flex-col py-14">
        <Loading isLoading={commentsIsLoading}>
          <>
            {commentsData.map((comment) => (
              <CommentContainer comment={comment} key={comment.id} />
            ))}
            <ActionCard
              type="comment"
              content={newCommentContent}
              isLoading={handleCreateCommentIsLoading}
              handleChangeContent={handleChangeNewCommentContent}
              handleSubmit={handleSubmitNewComment}
            />
            <div ref={endOfPageRef} />
          </>
        </Loading>
      </div>
    </div>
  );
};

export default Comments;
