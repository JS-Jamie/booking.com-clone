import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';
import './login.css';
import Navbar from '../../components/navbar/Navbar';

const Login = () => {
  const [openModal, setOpenModal] = useState(false);
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { user, loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const isAuthPage = true;

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: 'LOGIN_START' });
    try {
      const res = await axios.post('/auth/login', credentials);
      dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
      navigate('/');
    } catch (error) {
      dispatch({ type: 'LOGIN_FAILURE', payload: error.response.data });
    }
  };

  const handleRegister = (e) => {
    if (user) {
      setOpenModal(true);
    } else {
      navigate('/register');
    }
  };

  return (
    <div>
      <Navbar isAuthPage={isAuthPage} />
      <div className='login'>
        <div className='loginSection'>
          <h1 className='logInTitle'> Sign In</h1>
          <h3 className='username'>Username</h3>
          <input
            type='text'
            id='username'
            onChange={handleChange}
            className='lInput'
          />
          <h3 className='password'>Password</h3>
          <input
            type='password'
            id='password'
            onChange={handleChange}
            className='lInput'
          />
          <button disabled={loading} onClick={handleClick} className='lButton'>
            Sign in
          </button>
          {error && <span>{error.message}</span>}
        </div>
        <div className='register'>
          <span className='registerText'>
            Haven't registered yet?{' '}
            <a onClick={handleRegister} className='registerHere'>
              Register Here
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
