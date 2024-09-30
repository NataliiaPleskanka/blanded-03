import { Link, useLocation } from 'react-router-dom';

export const GoBackBtn = () => {
  const location = useLocation();
  const region = location.state?.region; // Get the region from the state
  const goBackLink = region ? `/country?region=${region}` : '/country';

  return (
    <Link to={goBackLink} style={{ marginBottom: '20px' }}>
      Go Back
    </Link>
  );
};
