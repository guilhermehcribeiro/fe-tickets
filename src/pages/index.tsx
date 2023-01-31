import { memo } from 'react';
import { BrowserRouter, Route, Routes as Routers } from 'react-router-dom';

import Layout from '../components/Layout';

import Login from './public/Login';
import Register from './public/Register';

const Routes = () => (
  <Layout>
    <BrowserRouter>
      <Routers>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routers>
    </BrowserRouter>
  </Layout>
);

export default memo(Routes);
