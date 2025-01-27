import axios from 'axios';
import { NewReplyPayload } from '../../../../commons/types/reply';
import { envs } from '../../../../../../utilities/envs';

const createReply = async (payload: NewReplyPayload) => {
  try {
    const { data } = await axios.post(
      `${envs.SERVER_BASE_PATH}/api/v1/reply`,
      payload,
    );
    return data;
  } catch (error) {
    throw new Error(JSON.stringify(error));
  }
};

export default createReply;
