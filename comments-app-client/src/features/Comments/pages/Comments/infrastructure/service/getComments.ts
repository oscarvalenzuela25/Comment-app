import axios from 'axios';
import { envs } from '../../../../../../utilities/envs';
import { Comments } from '../../../../commons/types/comments';

const getComments = async () => {
  try {
    console.log(envs.SERVER_BASE_PATH);

    const { data } = await axios.get<Comments[]>(
      `${envs.SERVER_BASE_PATH}/api/v1/comments`,
    );

    return data;
  } catch (error) {
    throw new Error(JSON.stringify(error));
  }
};

export default getComments;
