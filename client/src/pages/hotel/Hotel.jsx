import './hotel.css';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';
import { useContext, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { SearchContext } from '../../context/SearchContext';
import { AuthContext } from '../../context/AuthContext';
import Reserve from '../../components/reserve/Reserve';

const Hotel = () => {
  const location = useLocation();
  const id = location.pathname.split('/')[2];

  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const { data, loading, error } = useFetch(`/hotels/find/${id}`);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const { dates, options } = useContext(SearchContext);

  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }

  const days = dayDifference(dates[0].endDate, dates[0].startDate);

  // const photos = [
  //   {
  //     src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/170431725.jpg?k=2f4af14ff6d356c11ab3c1926c48791a3b777e1e5b2cc4b894275bcc4417bd20&o=&hp=1',
  //   },
  //   {
  //     src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/170431140.jpg?k=7bad9f12648e0c4d9b505279f059f8d75c6f611d6e5833338624b4a4df38b714&o=&hp=1',
  //   },
  //   {
  //     src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/170431273.jpg?k=82a1a6a8800f31fdf1f91edf3659cf6f9926b081aaa3ce158765ef1261433b4f&o=&hp=1',
  //   },
  //   {
  //     src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/170431285.jpg?k=2107f0a701285f37280036fef6773f6fcfd85bc73f953ad0f66f272d8c0a510e&o=&hp=1',
  //   },
  //   {
  //     src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/170431294.jpg?k=7bda006563a312a5cb68748a803b04eb359fa317e84a82cb29d6f9e1388d0252&o=&hp=1',
  //   },
  //   {
  //     src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/170431336.jpg?k=94b3989f54179e9528306661bf3d2363070419539247e0cc054ad2d276904a7c&o=&hp=1',
  //   },
  // ];

  const handleOpen = (index) => {
    setSlideNumber(index);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === 'l') {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }
    setSlideNumber(newSlideNumber);
  };

  const handleClick = (e) => {
    if (user) {
      setOpenModal(true);
    } else {
      navigate('/login');
    }
  };

  return (
    <div>
      <Navbar />
      <Header type='list' />
      {loading ? (
        'loading'
      ) : (
        <div className='hotelContainer'>
          {open && (
            <div className='slider'>
              <FontAwesomeIcon
                icon={faCircleXmark}
                className='close'
                onClick={() => setOpen(false)}
              />
              <FontAwesomeIcon
                icon={faCircleArrowLeft}
                className='arrow'
                onClick={() => handleMove('l')}
              />
              <div className='sliderWrapper'>
                <img
                  src={data.photos[slideNumber]}
                  alt=''
                  className='sliderImg'
                />
              </div>
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                className='arrow'
                onClick={() => handleMove('r')}
              />
            </div>
          )}
          <div className='hotelWrapper'>
            <button onClick={handleClick} className='bookNow'>
              Reserve or Book Now!
            </button>
            <h1 className='hotelTitle'>{data.name}</h1>
            <div className='hotelAddress'>
              <FontAwesomeIcon icon={faLocationDot} />
              <span>{data.address}</span>
            </div>
            <span className='hotelDistance'>
              Excellent location - {data.distance}m from center
            </span>
            <span className='hotelPriceHighlight'>
              Book a stay over ${data.cheapestPrice} at this property and get a
              free airport taxi
            </span>
            <div className='hotelImages'>
              {data.photos?.map((photo, index) => (
                <div className='hotelImgWrapper'>
                  <img
                    onClick={() => handleOpen(index)}
                    src={photo}
                    alt=''
                    className='hotelImg'
                  />
                </div>
              ))}
            </div>
            <div className='hotelDetails'>
              <div className='hotelDetailsTexts'>
                <h1 className='hotelTitle'>{data.title}</h1>
                <p className='hotelDesc'>{data.desc}</p>
              </div>
              <div className='hotelDetailsPrice'>
                <h1>Perfect for a {days}-night stay!</h1>
                <span>
                  Located in the heart of San Francisco, this property has an
                  excellent location score of 9.8!
                </span>
                <h2>
                  <b>${days * data.cheapestPrice * options.room}</b> ({days}{' '}
                  nights)
                </h2>
                <button onClick={handleClick}>Reserve or Book Now!</button>
              </div>
            </div>
          </div>
          <MailList />
          <Footer />
        </div>
      )}
      {openModal && <Reserve setOpen={setOpenModal} hotelId={id} />}
    </div>
  );
};

export default Hotel;
