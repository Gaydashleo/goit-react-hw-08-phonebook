
import Loader  from 'components/Loader/Loader';
import { AppBar } from 'components/AppBar/AppBar';
import { Container} from './App.styled';


import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
// import { useDispatch } from 'react-redux';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';



const HomePage = lazy(() =>
  import('pages/HomePage' /* webpackChunkName: "HomePage" */)
);

const LoginPage = lazy(() =>
  import('pages/LoginPage' /* webpackChunkName: "LoginPage" */)
);

const RegisterPage = lazy(() =>
  import('pages/RegisterPage' /* webpackChunkName: "RegisterPage" */)
);

const ContactsPage = lazy(() =>
  import('pages/ContactsPage' /* webpackChunkName: "ContactsPage" */)
);


export function App() {
 
  
    return (
      <Container>
        <AppBar />
      
        <Suspense fallback={<Loader />} />
        <Switch>

          <PublicRoute path='/' exact>
            <HomePage/>
          </PublicRoute>

          <PublicRoute path='/register' restricted redirectTo="/contacts">
            <RegisterPage/>
          </PublicRoute>

                    <PublicRoute path="/login" restricted redirectTo="/contacts">
            <LoginPage />
          </PublicRoute>

          <PrivateRoute path="/contacts" redirectTo="/login">
            <ContactsPage />
          </PrivateRoute>

          </Switch>
        <ToastContainer autoClose={3700} position="top-center" />
      </Container>
    );
  }

