import Navbar from '../../components/navbar/Navbar';
import './register.css';

const Register = () => {
  return (
    <div>
      <Navbar />
      <div className='register'>
        <div className='email'>
          <h1>Create Your Account</h1>
          <h3>Username</h3>
          <input />
          <h3>Email address</h3>
          <input />
          <h3>Password</h3>
          <input />
          <h3>Retype your password</h3>
          <input />
        </div>
      </div>
    </div>
  );
};

export default Register;
