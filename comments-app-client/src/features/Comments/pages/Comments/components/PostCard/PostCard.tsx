import { FC } from 'react';
import Counter from '../../../../commons/components/Counter';
import Avatar from '../../../../commons/components/Avatar';
import IconButton from '../../../../../../components/IconButton';
import Pill from '../../../../commons/components/Pill';
import Button from '../../../../../../components/Button';
import TextArea from '../../../../../../components/TextArea';
import ReplyIcon from '../../../../../../icons/ReplyIcon';
import DeleteIcon from '../../../../../../icons/DeleteIcon';
import UpdateIcon from '../../../../../../icons/UpdateIcon';
import usePostCard from './hooks/usePostCard';
import { PostData } from '../../../../commons/types/comments';
import useGetUser from '../../../../../../hooks/useGetUser';

type Props = {
  post: PostData;
  postSelected: string | null;
  handleUpdatePostIsLoading: boolean;
  handleShowReply?: VoidFunction;
  handleUpdateScore: (post: PostData, newScore: number) => void;
  handleUpdateContentPost: (post: PostData) => void;
  handleDeleteById: (post: PostData) => void;
  handleSetContentSelected: (postId: number, content: string) => void;
};

const PostCard: FC<Props> = ({
  post,
  postSelected,
  handleUpdatePostIsLoading,
  handleShowReply,
  handleUpdateScore,
  handleUpdateContentPost,
  handleDeleteById,
  handleSetContentSelected,
}) => {
  const { avatarList } = useGetUser();
  const {
    isUpdateMode,
    handleToggleUpdateMode,
    handleVerifyOwnComment,
    handleDeletePost,
    handleFormatDistance,
  } = usePostCard();

  const isYourComment = handleVerifyOwnComment(post);

  return (
    <div className="flex p-5 bg-white rounded-lg mt-3">
      <div className="flex gap-5 w-full">
        <Counter
          likes={post.score}
          min={0}
          handleIncrement={() => handleUpdateScore(post, post.score + 1)}
          handleDecrement={() => handleUpdateScore(post, post.score - 1)}
        />

        <div className="flex flex-col gap-4 w-full">
          {/* Header Card */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Avatar src={avatarList[post.user.image]} />
              <p className="text-base font-bold text-grayishBlue">
                {post.user.username}
              </p>
              {isYourComment && <Pill>you</Pill>}
              <p className="text-base text-grayishBlue">
                {handleFormatDistance(post.createdAt, new Date())}
              </p>
            </div>

            {isYourComment ? (
              <div className="flex gap-4 align-center">
                <IconButton
                  onClick={() => handleDeletePost(() => handleDeleteById(post))}
                  label="Delete"
                  variant="error"
                  startIcon={<DeleteIcon className="fill-current" />}
                />
                <IconButton
                  onClick={() => {
                    handleSetContentSelected(post.id, post.content);
                    handleToggleUpdateMode();
                  }}
                  label="Edit"
                  startIcon={<UpdateIcon className="fill-current" />}
                />
              </div>
            ) : (
              <>
                {!post.replyingTo && (
                  <IconButton
                    onClick={handleShowReply}
                    label="Reply"
                    startIcon={<ReplyIcon className="fill-current" />}
                  />
                )}
              </>
            )}
          </div>

          {/* Body Card */}
          {isUpdateMode ? (
            <div className="flex flex-col gap-2">
              <TextArea
                value={postSelected || ''}
                onChange={(e) =>
                  handleSetContentSelected(post.id, e.target.value)
                }
              />
              <div className="flex justify-end">
                <Button
                  isLoading={handleUpdatePostIsLoading}
                  disabled={!postSelected}
                  onClick={() => {
                    handleUpdateContentPost(post);
                    handleToggleUpdateMode();
                  }}
                >
                  UPDATE
                </Button>
              </div>
            </div>
          ) : (
            <p className="text-base text-grayishBlue">{post.content}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostCard;
