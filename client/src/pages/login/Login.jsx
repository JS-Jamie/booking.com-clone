import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import './login.css';
import axios from 'axios';
import Navbar from '../../components/navbar/Navbar';

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

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

  return (
    <div>
      <Navbar />

      <div className='login'>
        <div className='emailSection'>
          <h3>Username</h3>
          <input
            type='text'
            id='username'
            onChange={handleChange}
            className='lInput'
          />
          <h3>Password</h3>
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
        <div className='accessPanel'>
          <div className='divider'>
            <hr></hr>
            <span className='dividerText'>Haven't registered yet?</span>
            {/* <link> Register Here </link> */}
            <hr></hr>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
