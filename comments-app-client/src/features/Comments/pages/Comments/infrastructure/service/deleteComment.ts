import axios from 'axios';
import { envs } from '../../../../../../utilities/envs';

const deleteComment = async (commentId: number) => {
  try {
    const { data } = await axios.delete(
      `${envs.SERVER_BASE_PATH}/api/v1/comment/${commentId}`,
    );
    return data;
  } catch (error) {
    throw new Error(JSON.stringify(error));
  }
};

export default deleteComment;
