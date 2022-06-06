import { useEffect, useState } from "react";

const useProdcuts = (limit) => {
  const [product, setProduct] = useState([]);
  let url;
  if (limit) {
    url = `https://stormy-tor-21986.herokuapp.com/readGadgetData?limit=${limit}`;
  } else {
    url = `https://stormy-tor-21986.herokuapp.com/readGadgetData`;
  }
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return [product, setProduct];
};
export default useProdcuts;
