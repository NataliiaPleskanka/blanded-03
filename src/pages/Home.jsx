import { Container, CountryList, Heading, Section } from 'components';
import { useEffect, useState } from 'react';
import { getCountries } from 'service/countryApi';

export const Home = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const countries = await getCountries();
        setCountries(countries);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <Section>
      <Container>
        <Heading title="Home" bottom />
        <CountryList countries={countries} />
      </Container>
    </Section>
  );
};
