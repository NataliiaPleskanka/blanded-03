import { Heading } from 'components';

import { Country } from 'pages/Country';
import { Home } from 'pages/Home';
import { SearchCountry } from 'pages/SearchCountry';
import { Navigate, Routes, Route } from 'react-router-dom';
import { Header } from 'components';

export const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/searchCountry" element={<SearchCountry />} />
        <Route path="/country" element={<Country />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
