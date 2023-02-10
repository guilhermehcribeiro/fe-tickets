import { post } from '../helpers/api';

async function loginUser(data: any) {
  const req = await post('/auth/login', data);
  localStorage.setItem('tickets_token', req?.data?.access_token ?? '');
}

const authService = {
  loginUser,
};

export default authService;
