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
import { useState } from 'react';

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/170431725.jpg?k=2f4af14ff6d356c11ab3c1926c48791a3b777e1e5b2cc4b894275bcc4417bd20&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/170431140.jpg?k=7bad9f12648e0c4d9b505279f059f8d75c6f611d6e5833338624b4a4df38b714&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/170431273.jpg?k=82a1a6a8800f31fdf1f91edf3659cf6f9926b081aaa3ce158765ef1261433b4f&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/170431285.jpg?k=2107f0a701285f37280036fef6773f6fcfd85bc73f953ad0f66f272d8c0a510e&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/170431294.jpg?k=7bda006563a312a5cb68748a803b04eb359fa317e84a82cb29d6f9e1388d0252&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/170431336.jpg?k=94b3989f54179e9528306661bf3d2363070419539247e0cc054ad2d276904a7c&o=&hp=1',
    },
  ];

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

  return (
    <div>
      <Navbar />
      <Header type='list' />
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
              <img src={photos[slideNumber].src} alt='' className='sliderImg' />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className='arrow'
              onClick={() => handleMove('r')}
            />
          </div>
        )}
        <div className='hotelWrapper'>
          <button className='bookNow'>Reserve or Book Now!</button>
          <h1 className='hotelTitle'>Grand Hotel</h1>
          <div className='hotelAddress'>
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 125 New York</span>
          </div>
          <span className='hotelDistance'>
            Excellent location - 500m from center
          </span>
          <span className='hotelPriceHighlight'>
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className='hotelImages'>
            {photos.map((photo, index) => (
              <div className='hotelImgWrapper'>
                <img
                  onClick={() => handleOpen(index)}
                  src={photo.src}
                  alt=''
                  className='hotelImg'
                />
              </div>
            ))}
          </div>
          <div className='hotelDetails'>
            <div className='hotelDetailsTexts'>
              <h1 className='hotelTitle'>Stay in the heart of San Francisco</h1>
              <p className='hotelDesc'>
                This San Francisco hotel is located just a 5-minute walk from
                Lombard Street, the "Crookedest Street in the World", and less
                than a mile from Fisherman’s Wharf. Free Wi-Fi and a daily
                breakfast with hot waffles are included. Every room at Comfort
                Inn By the Bay Hotel San Francisco has coffee facilities and
                cable TV. The rooms are furnished with dark wood furniture and a
                sitting area. A free newspaper is available weekdays at the
                hotel, along with free coffee in the lobby. The hotel also has a
                24-hour front desk and tour information. Chinatown is 1.3 miles
                from the hotel. San Francisco Comfort Inn By the Bay Hotel is 3
                miles from the Golden Gate Bridge. Couples in particular like
                the location – they rated it 8.9 for a two-person trip.
              </p>
            </div>
            <div className='hotelDetailsPrice'>
              <h1>Perfect for a 3-night stay!</h1>
              <span>
                Located in the heart of San Francisco, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>$685</b> (3 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
