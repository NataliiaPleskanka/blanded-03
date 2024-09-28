import {
  Container,
  CountryList,
  Heading,
  Loader,
  SearchForm,
  Section,
} from 'components';
import { useEffect, useState } from 'react';
import { fetchByRegion } from 'service/countryApi';

export const SearchCountry = () => {
  const [query, setQuery] = useState('');
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = value => {
    setQuery(value);
    setError(null);
  };

  useEffect(() => {
    if (!query) return;
    const getData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchByRegion(query);
        setCountries(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, [query]);

  return (
    <Section>
      <Container>
        <SearchForm onSubmit={handleSubmit} />
        {error && <Heading title={error} bottom />}
        <CountryList countries={countries} />
        {isLoading && <Loader />}
      </Container>
    </Section>
  );
};
