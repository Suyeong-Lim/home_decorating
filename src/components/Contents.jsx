import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProductList from "./ProductList";

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
        <>
          {console.log(
            data.productList.map((item) => {
              <Icon
                src=" //cdn.ggumim.co.kr/storage/20211029145238AlZrQ41xtg.png"
                top={item.pointX}
              />;
              console.log(item.pointY);
            })
          )}

          <Img data={data} src={data.imageUrl} />
          {data.productList.map((item) => (
            <Icon
              key={item.productId}
              src=" //cdn.ggumim.co.kr/storage/20211029145238AlZrQ41xtg.png"
              positionX={item.pointY * 1.6 + 10}
              positionY={item.pointX * 1.6}
            />
          ))}
          <ProductList />
        </>
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
  width: 70%;
  position: relative;
`;
const Icon = styled.img`
  width: 32px;
  height: 32px;
  position: absolute;
  top: ${(props) => props.positionX}px;
  left: ${(props) => props.positionY}px;
`;
