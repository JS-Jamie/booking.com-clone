import './lovedProperties.css';

const LovedProperties = () => {
  return (
    <div className='lp'>
      <img
        src='https://cf.bstatic.com/xdata/images/hotel/square600/123801934.webp?k=27073a18101dd5a4eefc76251f7d476be72e19ed03e98819f2d94667dd60f31a&o=&s=1'
        alt=''
        className='lpImg'
      />
      <span className='lpName'>
        6 Continents Apartments by Prague Residences
      </span>
      <span className='lpCity'>Prague 1, Czech Republic, Prague</span>
      <span className='lpPrice'>Starting from $113</span>
      <div className='lpRating'>
        <button>8.4</button>
        <span>Very Good · 243 reviews</span>
      </div>
    </div>
  );
};

export default LovedProperties;
