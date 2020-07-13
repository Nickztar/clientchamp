import React, { useState, useEffect } from "react";

const useRequest = (initUrl: string) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState({});

  useEffect(() => {
    let ignore = false;
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch(initUrl);
        const data = await response.json();
        if (!ignore) setData(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
    return () => {
      ignore = true;
    };
  }, [initUrl]);

  return { data, loading, error };
};

export default useRequest;
