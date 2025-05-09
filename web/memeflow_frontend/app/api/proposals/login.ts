import { cookies } from 'next/headers';
cookies().set('mf_auth', JSON.stringify(user), { httpOnly: true, path: '/' });
