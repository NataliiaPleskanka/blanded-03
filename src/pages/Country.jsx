// import { Container, GoBackBtn, Heading, Section } from 'components';
// import { useRef } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { SearchCountry } from './SearchCountry';

// export const Country = () => {
//   const location = useLocation();
//   const stateRef = useRef(location.state);

//   return (
//     <Section>
//       <Container>
//         <GoBackBtn />
//         <Heading title="SearchCountry" bottom />
//         <SearchCountry />
//       </Container>
//     </Section>
//   );
// };

import { Container, GoBackBtn, Heading, Section } from 'components';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchCountry } from 'service/countryApi';

export const Country = () => {
  const { countryId } = useParams();
  const [countryDetails, setCountryDetails] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountryDetails = async () => {
      try {
        const country = await fetchCountry(countryId);
        setCountryDetails(country);
      } catch (error) {
        setError(error.message); // Set error message
      }
    };

    fetchCountryDetails();
  }, [countryId]);

  return (
    <Section>
      <Container>
        <GoBackBtn />
        <Heading title={`Country Details for ${countryId}`} bottom />
        {error && <p style={{ color: 'red' }}>Error: {error}</p>}
        {countryDetails ? (
          <div>
            <h2>{countryDetails.name}</h2>
            <img src={countryDetails.flag} alt={countryDetails.name} />
            <p>Population: {countryDetails.population}</p>
            <p>Region: {countryDetails.region}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </Container>
    </Section>
  );
};
