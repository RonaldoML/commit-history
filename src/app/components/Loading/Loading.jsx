import Image from 'next/image';
import { CONSTANTS } from '../helpers/constants';

export const Loading = () => {
  const { GIF } = CONSTANTS;

  return (
    <Image src={GIF.LOADING} width={500} height={500} alt={GIF.LOADING_ALT} />
  )
}

