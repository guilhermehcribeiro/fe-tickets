import { post } from '../helpers/api';

async function createUser(data: any) {
  const req = await post('/user', data);
  return req?.data;
}

const userService = {
  createUser,
};

export default userService;
