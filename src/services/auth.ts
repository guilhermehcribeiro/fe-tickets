import { post } from '../helpers/api';
import { setCookie } from '../helpers/cookie';
import { getPropDecoded } from '../helpers/jwt';

async function loginUser(data: any) {
  const req = await post('/auth/login', data);
  const expiresAt = getPropDecoded(req?.data?.access_token, 'exp');
  setCookie(
    'tickets_token',
    req?.data?.access_token,
    expiresAt * 1000 - 3 * 3600000
  );
}

const authService = {
  loginUser,
};

export default authService;
