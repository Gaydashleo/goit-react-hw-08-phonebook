import React, { Suspense, lazy,useEffect } from 'react';
import { Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { AppBar } from 'components/AppBar/AppBar';
import { Container} from './App.styled';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';

import { authOperations } from './redux/auth';

const HomeView = lazy(() =>import('./views/HomeView'));
const RegisterView = lazy(() =>import('./views/RegisterView'),);
const LoginView = lazy(() =>import('./views/LoginView'),);
const ContactsView = lazy(() =>import('./views/ContactsView'),);
 
export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
  dispatch(authOperations.getCurrentUser());
  }, [dispatch]);
  
    return (
      <Container>
        <AppBar />
      
        <Suspense fallback={<p>Loading...</p>} >
        <Routes>

          <PublicRoute path='/' exact>
            <HomeView/>
          </PublicRoute>

          <PublicRoute
            path='/register'
            restricted redirectTo="/contacts">
            <RegisterView/>
          </PublicRoute>

          <PublicRoute
            path="/login"
            restricted redirectTo="/contacts">
            <LoginView />
          </PublicRoute>

          <PrivateRoute
            path="/contacts"
            redirectTo="/login">
            <ContactsView />
          </PrivateRoute>

          </Routes>
          </Suspense>
        <ToastContainer autoClose={3700} position="top-center" />
      </Container>
    );
  }

