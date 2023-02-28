import useFetch from '../../hooks/useFetch';
import './lovedProperties.css';

const LovedProperties = () => {
  const { data, loading, error } = useFetch(
    '/api/hotels?featured=true&limit=4'
  );

  return (
    <div className='lp'>
      {loading ? (
        'Loading'
      ) : (
        <>
          {data.map((item) => (
            <div className='lpItem' key={item._id}>
              <img src={item.photos[0]} alt='' className='lpImg' />
              <span className='lpName'>{item.name}</span>
              <span className='lpCity'>{item.city}</span>
              <span className='lpPrice'>
                Starting from ${item.cheapestPrice}
              </span>
              {item.rating && (
                <div className='lpRating'>
                  <button>{item.rating}</button>
                  <span>Very Good · 243 reviews</span>
                </div>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default LovedProperties;
