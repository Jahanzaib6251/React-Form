import React, { useEffect, useState } from 'react'
import axios from 'axios'
const CurrencyExchange = () => {
    const [myData, setMyData] = useState([]);
    const [isError, setIsError] = useState('');
    const BaseApi = "https://api.exchangeratesapi.io/v1/";

    useEffect(() => {
        axios
            .get(BaseApi)
            .then((response)=> setMyData(response.data))
            .catch((error) => setIsError(error.message));
    }, []);
  return (<>
       {isError !== "" && <h2>{isError}</h2>}

      <div>
        {myData.map((post) => {
          const { body, id, title } = post;
          return (
            <div key={id} className="card">
              <h2>{title.slice(0, 15).toUpperCase()}</h2>
              <p>{body.slice(0, 100)}</p>
            </div>
          );
        })}
      </div>
      </>
  );
}

export default CurrencyExchange