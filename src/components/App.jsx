
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect,  lazy, Suspense } from 'react';
import authOperetions from '../redux/auth/authOperation';
import PrivateRoute from './PrivateRoute';
import  PublicRoute  from './PublicRoute';
import { Loader } from './Loader/Loader';
import  NotFound  from '../components/NotFound/NotFound';

// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


const Layout = lazy(() => import('./Layout')) ;
const HomeView = lazy(() => import('../views/HomeView/HomeView'));
const RegisterView = lazy(() => import('../views/RegisterView/RegisterView'),);
const LoginView = lazy(() => import('../views/LoginView/LoginView'),);
const ContactsView = lazy(() => import('../views/ContactsView/ContactsView'),);

export function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(state => state.auth.isRefreshing);

    useEffect(() => {
    dispatch(authOperetions.refreshCurrentUser());
  }, [dispatch])

    return (
    <>
      <Suspense fallback={<Loader />} >
          {!isRefreshing && (
          <Routes>
            <Route path="/" element={<Layout />} >
                <Route index element={<HomeView />} />
                <Route element={<PublicRoute />} >
              <Route path='/register' element={<RegisterView/>}/>
                  <Route path="/login" element={<LoginView />} />
                </Route>
                <Route element={<PrivateRoute />} >
                  <Route path="/contacts" element={<ContactsView />} />
                </Route>
                </Route>
              <Route path="*" element={<NotFound />}/>
          </Routes>
                )}
        </Suspense>
        
        {/* <ToastContainer autoClose={3700} position="top-center" /> */}
 
        </>
    );
  }

