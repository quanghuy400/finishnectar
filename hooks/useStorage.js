import { useState, useEffect } from 'react';

export function useStorage(fetcher) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    fetcher()
      .then(result => {
        if (mounted) {
          setData(Array.isArray(result) ? result : []);
          setLoading(false);
        }
      })
      .catch(() => {
        if (mounted) {
          setData([]);
          setLoading(false);
        }
      });
    return () => { mounted = false; };
  }, []); 

  return { data, setData, loading };
}