import React, { useState, useEffect } from "react";
import axios from "axios";

const useFlip = () => {
  const [state, setState] = useState(true);
  const toggleFlip = () => {
    setState((state) => !state);
  };
  return [state, toggleFlip];
};

const useAxios = (baseUrl, options = null) => {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState(null);

  const fullUrl = !options ? baseUrl : baseUrl + "/" + options;
  const fetchData = async () => {
    console.log(fullUrl);
    try {
      const resp = await axios.get(fullUrl);
      setResponse((data) => [...data, resp.data]);
    } catch (e) {
      setError(error);
    }
  };

  return [response, fetchData];
};

export { useFlip, useAxios };
