import axios from 'axios';
import { envs } from '../../../../../../utilities/envs';
import { UpdateCommentPayload } from '../../../../commons/types/comments';

const updateComment = async (payload: UpdateCommentPayload) => {
  try {
    const { id, ...rest } = payload;
    const { data } = await axios.put(
      `${envs.SERVER_BASE_PATH}/api/v1/comment/${id}`,
      rest,
    );
    return data;
  } catch (error) {
    throw new Error(JSON.stringify(error));
  }
};

export default updateComment;
