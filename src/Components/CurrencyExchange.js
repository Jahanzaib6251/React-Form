import React, { useEffect, useState } from 'react'
import axios from 'axios'
const CurrencyExchange = () => {
    const [myData, setMyData] = useState([]);
    const [isError, setIsError] = useState('');
    const BaseApi = "https://api.exchangeratesapi.io/v1/latest? access_key = API_KEY";

      // using Async Await
  const getMyPostData = async () => {
    try {
      const res = await axios.get(BaseApi);
      setMyData(res.data);
    } catch (error) {
      setIsError(error.message);
    }
  };

  // NOTE:  calling the function
  useEffect(() => {
    getMyPostData();
  }, []);

  return (
    <>
      <h1>Axios Tutorial</h1>
      {isError !== "" && <h2>{isError}</h2>}

      <div className="grid">
        {myData.map((e) => {
          const { id, title, thumbnailUrl } = e;
          return (
            <div key={id} className="card">
                <h2>{title.toUpperCase()}</h2>
                <img src={thumbnailUrl} alt={title} loading="lazy" />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default CurrencyExchange