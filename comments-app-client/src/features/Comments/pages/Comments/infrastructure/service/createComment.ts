import axios from 'axios';
import { envs } from '../../../../../../utilities/envs';
import { CreateCommentPayload } from '../../../../commons/types/comments';

const createComment = async (payload: CreateCommentPayload) => {
  try {
    const { data } = await axios.post(
      `${envs.SERVER_BASE_PATH}/api/v1/comment`,
      payload,
    );
    return data;
  } catch (error) {
    throw new Error(JSON.stringify(error));
  }
};

export default createComment;
