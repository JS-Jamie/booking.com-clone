import './lovedProperties.css';

const LovedProperties = () => {
  return (
    <div className='lp'>
      <div className='lpItem'>
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

      <div className='lpItem'>
        <img
          src='https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=9a065fcd92168145d8c8358701662c76793535597b678efc8f6921c8e3c188e6&o=&s=1'
          alt=''
          className='lpImg'
        />
        <span className='lpName'>7Seasons Apartments Budapest</span>
        <span className='lpCity'>06. Terézváros, Hungary, Budapest</span>
        <span className='lpPrice'>Starting from $153</span>
        <div className='lpRating'>
          <button>8.8</button>
          <span>Excellent · 7.073 reviews</span>
        </div>
      </div>

      <div className='lpItem'>
        <img
          src='https://cf.bstatic.com/xdata/images/hotel/square600/352170812.webp?k=75ffc5f9eb3f3cc394b901714c1544757b05849dbbdf30e4fc8c6df53931c131&o=&s=1'
          alt=''
          className='lpImg'
        />
        <span className='lpName'>numa I Vita Apartments</span>
        <span className='lpCity'>Fortezza da Basso, Italy, Florence</span>
        <span className='lpPrice'>Starting from $104</span>
        <div className='lpRating'>
          <button>9.3</button>
          <span>Wonderful · 790 reviews</span>
        </div>
      </div>

      <div className='lpItem'>
        <img
          src='https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1'
          alt=''
          className='lpImg'
        />
        <span className='lpName'>Aparthotel Stare Miasto</span>
        <span className='lpCity'>Old Town, Poland, Kraków</span>
        <span className='lpPrice'>Starting from $93</span>
        <div className='lpRating'>
          <button>8.7</button>
          <span>Excellent · 2,269 reviews</span>
        </div>
      </div>
    </div>
  );
};

export default LovedProperties;
