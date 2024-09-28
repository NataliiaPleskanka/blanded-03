import { ClockLoader } from 'react-spinners';
import s from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={s.backdrop}>
      <ClockLoader color="#f4f9f5" />
    </div>
  );
};
