import { FC } from 'react';
import Avatar from '../../../commons/components/Avatar';
import Button from '../../../../../components/Button';
import TextArea from '../../../../../components/TextArea';
import useGetUser from './../../../../../hooks/useGetUser';

type Props = {
  type: 'reply' | 'comment';
  content: string;
  isLoading: boolean;
  handleChangeContent: (text: string) => void;
  handleSubmit: VoidFunction;
};

const ActionCard: FC<Props> = ({
  type,
  content,
  isLoading,
  handleChangeContent,
  handleSubmit,
}) => {
  const { currentUser } = useGetUser();
  const buttonLabel = type === 'reply' ? 'REPLY' : 'SEND';

  return (
    <div className="flex p-5 bg-white rounded-lg mt-2">
      <div className="flex gap-5 w-full">
        <Avatar size="medium" src={currentUser.avatar} />
        <TextArea
          value={content}
          onChange={(e) => handleChangeContent(e.target.value)}
        />
        <Button
          onClick={handleSubmit}
          disabled={!content}
          isLoading={isLoading}
        >
          {buttonLabel}
        </Button>
      </div>
    </div>
  );
};

export default ActionCard;
