import { useState } from 'react';
import './Country.css'
import CountryDetail from '../CountryDetail/CountryDetail';


const Country = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
  const { name, flags, population, area } = country;

  const [visited, setVisited] = useState(false)

  const handleVisited = () => {
    setVisited(!visited);
  }

  console.log(handleVisitedCountry);

 
  



  return (
    <div className={`country ${visited && 'visited'}`}>
      <h3 style={{color:visited ? 'Purple' : 'White'}}>{name.common}</h3>
      <img src={flags.png} alt="" />
      <p>Population: {population}</p>
      <p>area: {area}</p>
      <p><small>Code:</small></p>
      <button onClick={() => handleVisitedCountry(country)}>Mark as visited</button> <br />
      <button onClick={() => handleVisitedFlags(country.flags.png)}>Add Flags</button>
      <br />
      <button onClick={handleVisited}>{visited? 'Visited' : 'Going'}</button>
      {visited ? 'I have visited this country.' : 'I want to visit this country'}
      <hr />
      <CountryDetail>
        country={country}
        handleVisitedCountry={handleVisitedCountry}
        handleVisitedFlags={handleVisitedFlags}
      </CountryDetail>
    </div>
  );
};

export default Country;