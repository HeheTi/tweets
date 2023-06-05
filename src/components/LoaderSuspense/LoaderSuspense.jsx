import { createPortal } from 'react-dom';
import { RingLoader } from 'react-spinners';
import s from './LoaderSuspense.module.css';

const loaderRootRef = document.querySelector('#loader-root');

const LoaderSuspense = () => {
  return createPortal(
    <div className={s.wrapper}>
      <RingLoader color="#c5653c" size={90} />
    </div>,
    loaderRootRef
  );
};

export default LoaderSuspense;
