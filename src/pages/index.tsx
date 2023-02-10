import { memo } from 'react';
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes as Routers,
} from 'react-router-dom';

import Layout from '../components/Layout';
import ProtectedRoute from '../components/ProtectedRoute';

import Dashboard from './private/Dashboard';
import Login from './public/Login';
import Register from './public/Register';

const Routes = () => (
  <Layout>
    <BrowserRouter>
      <Routers>
        <Route path='/' element={<Navigate to='/login' replace />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route
          path='/dashboard'
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routers>
    </BrowserRouter>
  </Layout>
);

export default memo(Routes);
