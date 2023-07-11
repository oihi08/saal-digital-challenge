import { useState, useEffect } from 'react';
import './spinner.scss';

const Spinner = () => {
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSpinner(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return showSpinner ? (
    <div className="spinner">
      <div className="spinner-inside"></div>
    </div>
  ) : null;
};

export default Spinner;
