import { useEffect, useState } from 'react';

import { CONSTANTS } from '../helpers/constants';


export const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {

        setIsLoading(true);
        const result = await fetch(url);
        const resp = await result.json();
        if (resp.ok) {
          setData(resp.data);
        } else {
          setError(resp.msg);
          setData(null);

        }
      } catch (_) {
        setData(null);
        setError(CONSTANTS.SOMETHING_WENT_WRONG);
      } finally {
        setIsLoading(false);
      }
    }
    setError(null);
    setData(null);
    fetchData();
  }, [url])


  return [isLoading, data, error];
};

