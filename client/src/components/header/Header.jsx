import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBed,
  faCalendarDays,
  faCar,
  faMap,
  faPerson,
  faPlane,
  faTaxi,
} from '@fortawesome/free-solid-svg-icons';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import { useState } from 'react';
import { format } from 'date-fns'; // transforms js date to readable strings

const Header = () => {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  return (
    <div className='header'>
      <div className='headerContainer'>
        <div className='headerList'>
          <div className='headerListItem active'>
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className='headerListItem'>
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className='headerListItem'>
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className='headerListItem'>
            <FontAwesomeIcon icon={faMap} />
            <span>Attractions</span>
          </div>
          <div className='headerListItem'>
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>
        </div>
        <h1 className='headerTitle'>The joy of home anywhere in the world</h1>
        <p className='headerDesc'>Easy booking, easy living</p>
        <button className='headerBtn'>Sign in / Register</button>

        <div className='headerSearch'>
          <div className='headerSearchItem'>
            <FontAwesomeIcon icon={faBed} className='headerIcon' />
            <input
              type='text'
              placeholder='Where are you going?'
              className='headerSearchInput'
            />
          </div>

          <div className='headerSearchItem'>
            <FontAwesomeIcon icon={faCalendarDays} className='headerIcon' />
            <span className='headerSearchText'>{`${format(
              date[0].startDate,
              'MM/dd/yyyy'
            )} to ${format(date[0].endDate, 'MM/dd/yyyy')}`}</span>
            <DateRange
              editableDateInputs={true}
              onChange={(item) => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className='date'
            />
          </div>

          <div className='headerSearchItem'>
            <FontAwesomeIcon icon={faPerson} className='headerIcon' />
            <span className='headerSearchText'>2 adults 2 children 1 room</span>
          </div>

          <div className='headerSearchItem'>
            <button className='headerBtn'>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
