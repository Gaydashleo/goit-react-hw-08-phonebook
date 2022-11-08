import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect,  lazy, Suspense } from 'react';
import authOperetions from 'redux/auth/authOperations';
import { Loader } from './Loader/Loader';
import {PrivateRoute} from './PrivateRoute';
import {PublicRoute} from './PublicRoute';
import  NotFound  from '../components/NotFound/NotFound';

const Layout = lazy(() => import('./Layout')) ;
const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage'));

export function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(state => state.auth.isRefreshing);
  
  useEffect(() => {
    dispatch(authOperetions.refreshCurrentUser());
  }, [dispatch])

   return (
    <>
      <Suspense fallback={<Loader />}>
        {!isRefreshing && (
<Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PublicRoute><HomePage /></PublicRoute>} />
          <Route path="/register" element={<PublicRoute restricted><RegisterPage /></PublicRoute>}></Route>
          <Route path="/login" element={<PublicRoute restricted><LoginPage /></PublicRoute>}></Route>
          <Route path="/contacts" element={<PrivateRoute ><ContactsPage /></PrivateRoute>}></Route>
          <Route path="*" element={<PublicRoute><NotFound /></PublicRoute>}></Route>
        </Route>
      </Routes>
        ) }
        
      </Suspense>
    </>  
)
  
}; 

  