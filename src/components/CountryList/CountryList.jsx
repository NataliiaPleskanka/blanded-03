// import { Link } from 'react-router-dom';
// import { Grid, GridItem } from '..';

// export const CountryList = ({ countries }) => {
//   return (
//     <Grid>
//       {countries.map(country => (
//         <GridItem key={country.id}>
//           <Link>
//             <img src={country.flag} alt={country.country} />
//           </Link>
//         </GridItem>
//       ))}
//     </Grid>
//   );
// };

import { Link } from 'react-router-dom';
import { Grid, GridItem } from '..';

export const CountryList = ({ countries, selectedRegion }) => {
  return (
    <Grid>
      {countries.map(country => (
        <GridItem key={country.id}>
          <Link
            to={`/country/${country.id}`}
            state={{ region: selectedRegion }}
          >
            <img src={country.flag} alt={country.country} />
          </Link>
        </GridItem>
      ))}
    </Grid>
  );
};
