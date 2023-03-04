import axios from 'axios';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import { AuthContext } from '../../context/AuthContext';
import './register.css';

const Register = () => {
  const [openModal, setOpenModal] = useState(false);
  const [credentials, setCredentials] = useState({
    username: undefined,
    email: undefined,
    password: undefined,
    confirmPassword: undefined,
  });

  const { user, loading, error, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const isAuthPage = true;

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: 'REGISTER_START' });
    try {
      const res = await axios.post('/api/auth/register', {
        username: credentials.username,
        email: credentials.email,
        password: credentials.password,
      });
      dispatch({ type: 'REGISTER_SUCCESS', payload: res.data });
      dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
      navigate('/');
    } catch (err) {
      dispatch({ type: 'REGISTER_FAIL', payload: err.response.data });
    }
  };

  const handleLogIn = (e) => {
    if (user) {
      setOpenModal(true);
    } else {
      navigate('/login');
    }
  };

  return (
    <div>
      <Navbar isAuthPage={isAuthPage} />
      <div className='registration'>
        <div className='info'>
          <h1 className='registrationTitle'>Create Your Account</h1>
          <h3 className='infoText'>Username</h3>
          <input
            type='email'
            id='username'
            onChange={handleChange}
            className='rInput'
          />
          <h3 className='infoText'>Email address</h3>
          <input
            type='text'
            id='email'
            onChange={handleChange}
            className='rInput'
          />
          <h3 className='infoText'>Password</h3>
          <input
            type='password'
            id='password'
            onChange={handleChange}
            className='rInput'
          />
          <h3 className='infoText'>Confirm your password</h3>
          <input
            type='password'
            id='confirmPassword'
            onChange={handleChange}
            className='rInput'
          />
          <button className='registerButton' onClick={handleClick}>
            Register
          </button>
        </div>
        <div className='logIn'>
          <span>
            Already have an account?{' '}
            <a
              onClick={handleLogIn}
              style={{ cursor: 'pointer' }}
              className='signInHere'
            >
              {' '}
              Sign in here
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;
