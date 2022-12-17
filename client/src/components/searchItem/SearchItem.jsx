import './searchItem.css';

const SearchItem = () => {
  return (
    <div className='searchItem'>
      <img
        className='siImg'
        src='https://cf.bstatic.com/xdata/images/hotel/square600/195698719.webp?k=49feff23c8a2097649f305651a1a7cbdd60bbc098a41c4cbdfb7bd1f7cee9d3e&o=&s=1'
        alt=''
      />
      <div className='siDesc'>
        <h1 className='siTitle'>Hyatt Regency San Francisco Downtown SOMA</h1>
        <span className='siDistance'>0.3 miles from center</span>
        <span className='siTaxiOp'>Subway Access</span>
        <span className='siSubtitle'>
          King Room with Shower - Mobility Accessible
        </span>
        <span className='siFeatures'>1 king bed</span>
        <span className='siCancelOp'>
          FREE cancellation • No prepayment needed
        </span>
        <span className='siCancelOpSubtitle'>
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className='siDetails'>details</div>
    </div>
  );
};

export default SearchItem;
