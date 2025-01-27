import axios from 'axios';
import { UpdateReplyPayload } from '../../../../commons/types/reply';
import { envs } from '../../../../../../utilities/envs';

const updateReply = async (payload: UpdateReplyPayload) => {
  try {
    const { id, ...rest } = payload;
    const { data } = await axios.put(
      `${envs.SERVER_BASE_PATH}/api/v1/reply/${id}`,
      rest,
    );
    return data;
  } catch (error) {
    throw new Error(JSON.stringify(error));
  }
};

export default updateReply;
