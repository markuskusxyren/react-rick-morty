import React, { useState, useEffect } from 'react';
import Cards from '../components/cards/cards';
import InputGroup from '../components/filters/category/inputGroup';

const Location = () => {
  const [id, setId] = useState(1);
  const [info, setInfo] = useState([]);
  const [results, setResults] = useState([]);
  const { name, type, dimension } = info;
  const api = `https://rickandmortyapi.com/api/location/${id}`;

  useEffect(() => {
    (async function () {
      const data = await fetch(api).then((res) => res.json());
      setInfo(data);

      let a = await Promise.all(
        data.residents.map((X) => {
          return fetch(X).then((res) => res.json());
        })
      );
      setResults(a);
    })();
  }, [api]);

  return (
    <div className="container">
      <div className="row">
        <h1 className="text-center mb-4 mt-4">
          Location :{' '}
          <span className="text-primary">{name === '' ? 'No Name' : name}</span>
        </h1>
        <h5 className="text-center mb-1">
          Dimension : {dimension === '' ? 'No Dimension' : dimension}
        </h5>
        <h6 className="text-center mb-5">
          Type : {type === '' ? 'No Type' : type}
        </h6>
      </div>
      <div className="row">
        <div className="col-3">
          <h4 className="text-center mb-4">Pick Location</h4>
          <InputGroup total={126} name="Location" setId={setId} />
        </div>
        <div className="col-8">
          <div className="row">
            <Cards results={results} page="/location/" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
