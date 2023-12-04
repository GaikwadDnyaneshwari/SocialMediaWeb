import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { loadUser } from './Actions/User';
import './App.css';
import Account from './Components/Account/Account';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import NewPost from './Components/NewPost/NewPost';
import Register from './Components/Register/Register';
import UpdateProfile from './Components/UpdateProfile/UpdateProfile';
import UpdatePassword from './Components/UpdatePassword/UpdatePassword';
import ForgotPassword from './Components/ForgotPassword/ForgotPassword';
import ResetPassword from './Components/ResetPassword/ResetPassword';
import UserProfile from './Components/UserProfile/UserProfile';
import Search from './Components/Search/Search';
import NotFound from './Components/NotFound/NotFound';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser())
  }, [dispatch]);

  const { isAuthenticated } = useSelector((state) => state.user);

  return (
    <Router >

      {
        isAuthenticated && <Header />
      }

      <Routes>
        <Route path='/' element={isAuthenticated ? <Home /> : <Login />} />
        <Route path='/account' element={isAuthenticated ? <Account /> : <Login />} />
        <Route path='/newpost' element={isAuthenticated ? <NewPost /> : <Login />} />
        <Route path='/register' element={isAuthenticated ? <Account /> : <Register />} />
        <Route path='/update/profile' element={isAuthenticated ? <UpdateProfile /> : < Login />} />
        <Route path='/update/password' element={isAuthenticated ? <UpdatePassword /> : < Login />} />
        <Route path='/forgot/password' element={isAuthenticated ? <ForgotPassword /> : <UpdatePassword />} />
        <Route path='/password/reset/:token' element={isAuthenticated ? <ResetPassword /> : <UpdatePassword />} />

        <Route
          path="/user/:id"
          element={isAuthenticated ? <UserProfile /> : <Login />}
        />

        <Route path="search" element={<Search />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

    </Router>
  );
}

export default App;
