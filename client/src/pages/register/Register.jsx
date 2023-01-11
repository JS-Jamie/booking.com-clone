import Navbar from '../../components/navbar/Navbar';
import './register.css';

const Register = () => {
  return (
    <div>
      <Navbar />
      <div className='registration'>
        <div className='info'>
          <h1 className='registrationTitle'>Create Your Account</h1>
          <h3 className='infoText'>Username</h3>
          <input type='email' id='username' className='rInput' />
          <h3 className='infoText'>Email address</h3>
          <input type='text' id='email' className='rInput' />
          <h3 className='infoText'>Password</h3>
          <input type='password' id='password' className='rInput' />
          <h3 className='infoText'>Confirm your password</h3>
          <input type='password' id='password' className='rInput' />
          <button className='registerButton'>Register</button>
        </div>
        <div className='logIn'>
          <span>
            Already have an account?{' '}
            <a href='/login' className='signInHere'>
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
