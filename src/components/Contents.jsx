import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProductViewer from "./ProductViewer";

const Contents = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({
    id: 0,
    imageUrl: "",
    productList: [],
  });

  const getData = async () => {
    const response = await fetch(
      "https://cdn.ggumim.co.kr/test/image_product_link.json"
    );
    const data = await response.json();
    setData(data);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {loading ? (
        <Loading>Loding...</Loading>
      ) : (
        <Img data={data} src={data.imageUrl} />
      )}
    </>
  );
};

export default Contents;

const Loading = styled.div`
  text-align: center;
  margin-top: 3.2rem;
`;
const Img = styled.img`
  width: 50%;
`;
