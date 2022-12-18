import './hotel.css';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Hotel = () => {
  return (
    <div>
      <Navbar />
      <Header type='list' />
      <div>
        <div>
          <h1></h1>
          <div>
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 125 New York</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
