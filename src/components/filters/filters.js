import React from 'react';
import Gender from './category/gender';
import Species from './category/species';
import Status from './category/status';

const filters = ({ setStatus, setPageNumber, setGender, setSpecies }) => {
  let clear = () => {
    setStatus('');
    setPageNumber('');
    setGender('');
    setSpecies('');
    window.location.reload(false);
  };

  return (
    <div className="col-3">
      <div className="text-center fw-bold fs-4 mb-2">Filter</div>
      <div
        onClick={clear}
        style={{ cursor: 'pointer' }}
        className="text-center text-primary text-decoration-underline mb-4"
      >
        Clear Filter
      </div>
      <div className="accordion" id="accordionExample">
        <Gender setPageNumber={setPageNumber} setGender={setGender} />
        <Species setPageNumber={setPageNumber} setSpecies={setSpecies} />
        <Status setPageNumber={setPageNumber} setStatus={setStatus} />
      </div>
    </div>
  );
};

export default filters;
