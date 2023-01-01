import './searchItem.css';
import { Link } from 'react-router-dom';

const SearchItem = ({ item }) => {
  return (
    <div className='searchItem'>
      <img className='siImg' src={item.photos[0]} alt='' />
      <div className='siDesc'>
        <h1 className='siTitle'>{item.name}</h1>
        <span className='siDistance'>{item.distance}m from center</span>
        <span className='siTaxiOp'>Subway Access</span>
        <span className='siSubtitle'>
          King Room with Shower - Mobility Accessible
        </span>
        <span className='siFeatures'>{item.desc}</span>
        <span className='siCancelOp'>
          FREE cancellation • No prepayment needed
        </span>
        <span className='siCancelOpSubtitle'>
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className='siDetails'>
        {item.rating && (
          <div className='siRating'>
            <span>Excellent</span>
            <button>{item.rating}</button>
          </div>
        )}
        <div className='siDetailTexts'>
          <span className='siPrice'>${item.cheapestPrice}</span>
          <span className='siTaxOp'>Includes taxes and fees</span>
          <Link to={`/hotels/${item._id}`}>
            <button className='siCheckButton'>See availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
