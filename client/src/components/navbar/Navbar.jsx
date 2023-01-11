import './navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const [openModal, setOpenModal] = useState(false);

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleRegister = (e) => {
    if (user) {
      setOpenModal(true);
    } else {
      navigate('/register');
    }
  };

  const handleLogIn = (e) => {
    if (user) {
      setOpenModal(true);
    } else {
      navigate('/login');
    }
  };

  const handleLogOut = (e) => {
    e.preventDefault();
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <div className='navbar'>
      <div className='navContainer'>
        <Link to='/' style={{ color: 'inherit', textDecoration: 'none' }}>
          <span className='logo'>eBooking.com</span>
        </Link>
        {user ? (
          <div>
            {user.username}
            <button onClick={handleLogOut}>Logout</button>
          </div>
        ) : (
          <div className='navItems'>
            <button onClick={handleRegister} className='navButton'>
              Register
            </button>
            <button onClick={handleLogIn} className='navButton'>
              Sign in
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
