import './featured.css';

const Featured = () => {
  return (
    <div className='featured'>
      <div className='featuredItem'>
        <img
          className='featuredImg'
          src='https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o='
          alt=''
        />
        <div className='featuredTitles'>
          <h1>Dublin</h1>
          <h2>1421 properties</h2>
        </div>
      </div>

      <div className='featuredItem'>
        <img
          className='featuredImg'
          src='https://cf.bstatic.com/xdata/images/city/max500/823862.webp?k=3bba7b760f2b8ae55a81c4ba23f081a9b76b3eaa03e5cd936d31d09c5cf50d96&o='
          alt=''
        />
        <div className='featuredTitles'>
          <h1>Truckee</h1>
          <h2>1203 properties</h2>
        </div>
      </div>

      <div className='featuredItem'>
        <img
          className='featuredImg'
          src='https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o='
          alt=''
        />
        <div className='featuredTitles'>
          <h1>South Lake Tahoe</h1>
          <h2>2364 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
