import axios from 'axios';
import { envs } from '../../../../../../utilities/envs';

const deleteReply = async (replyId: number) => {
  try {
    const { data } = await axios.delete(
      `${envs.SERVER_BASE_PATH}/api/v1/reply/${replyId}`,
    );
    return data;
  } catch (error) {
    throw new Error(JSON.stringify(error));
  }
};

export default deleteReply;
