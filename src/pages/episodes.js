import React, { useState, useEffect } from 'react';
import Cards from '../components/cards/cards';
import InputGroup from '../components/filters/category/inputGroup';

const Episodes = () => {
  const [id, setId] = useState(1);
  const [info, setInfo] = useState([]);
  let [results, setResults] = useState([]);
  let { air_date, name } = info;
  const api = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    (async function () {
      const data = await fetch(api).then((res) => res.json());
      setInfo(data);

      let a = await Promise.all(
        data.characters.map((X) => {
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
          Episode :{' '}
          <span className="text-primary">{name === '' ? 'No Name' : name}</span>
        </h1>
        <h5 className="text-center mb-5">
          Air Date {air_date === '' ? 'No Date' : air_date}
        </h5>
      </div>
      <div className="row">
        <div className="col-3">
          <h4 className="text-center mb-4">Pick Episodes</h4>
          <InputGroup total={51} name="Episode" setId={setId} />
        </div>
        <div className="col-8">
          <div className="row">
            <Cards results={results} page="/episodes/" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Episodes;
