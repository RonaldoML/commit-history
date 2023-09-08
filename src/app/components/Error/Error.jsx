import Image from 'next/image';
import PropTypes from 'prop-types';
import { CONSTANTS } from '../helpers/constants';

export const Error = ({ error }) => {
  const { GIF } = CONSTANTS;

  return (
    <>
      <Image src={GIF.ERROR} width={400} height={200} alt={GIF.ERROR_ALT} />
      <p>{error}</p>
    </>
  )
};

Error.propTypes = {
  error: PropTypes.string,
};
