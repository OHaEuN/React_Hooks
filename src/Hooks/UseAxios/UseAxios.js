import { useState, useEffect } from "react";
import defaultAxios from "axios";
// defaultAxios => 디폴트 url 설정, 자동으로 헤더 설정 등 다폴트값 허용
const UseAxios = (opts, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });
  const [trigger, setTrigger] = useState(0);
  const refetch = () => {
    setState({
      ...state,
      loading: true,
    });
    setTrigger(Date.now());
  };
  useEffect(() => {
    axiosInstance(opts)
      .then((data) => {
        setState({
          ...state,
          loading: false,
          data,
        });
      })
      .catch((error) => {
        setState({ ...state, loading: false, error });
      });
  }, [trigger]);
  if (!opts.url) {
    return;
  }
  return { ...state, refetch };
};

export default UseAxios;
