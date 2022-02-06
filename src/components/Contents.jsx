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

  const [active, setActive] = useState(false);
  const [currentId, setCurrent] = useState(0);
  const clickHandler = () => {
    setActive((curr) => !active);
    console.log(active);
  };

  return (
    <>
      {loading ? (
        <Loading>Loding...</Loading>
      ) : (
        <>
          <Center>
            <ViewContentImg>
              <Img key={data.id} data={data} src={data.imageUrl} />

              {data.productList.map((item) => (
                <Tag
                  key={data.productId}
                  positionX={item.pointX * 1.6}
                  positionY={item.pointY * 1.6}
                >
                  <Icon
                    key={item.productId}
                    src=" //cdn.ggumim.co.kr/storage/20211029145238AlZrQ41xtg.png"
                  />
                </Tag>
              ))}
            </ViewContentImg>
          </Center>
          <FurnitureSwiper>
            <SwiperWrapper>
              {data.productList.map((item) => (
                <ItemPicture key={item.productId} isActive={active}>
                  <ItemSubImg
                    onClick={clickHandler}
                    background={item.imageUrl}
                    currentId={currentId}
                  ></ItemSubImg>
                </ItemPicture>
              ))}
            </SwiperWrapper>
          </FurnitureSwiper>
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

const Center = styled.div`
  margin: 0;
  padding: 0;
`;

const ViewContentImg = styled.div`
  cursor: pointer;
  position: relative;
  display: inline-block;
`;

const Img = styled.img`
  width: 100%;
  height: auto;
`;

const Tag = styled.div`
  width: 40px;
  height: 40px;
  position: absolute;
  top: ${(props) => props.positionX}px;
  left: ${(props) => props.positionY}px;
`;

const Icon = styled.img`
  width: 32px;
  height: 32px;
`;

const FurnitureSwiper = styled.div`
  display: flex;
  align-items: center;
  overflow-y: hidden;
  overflow-x: auto;
  background-color: white;
  padding: 0 10px;
`;

const SwiperWrapper = styled.div`
  align-items: center;
  transform: translate3d(0px, 0 0);
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  transition-property: transform;
  box-sizing: content-box;
`;

const ItemPicture = styled.div`
  ${({ isActive }) =>
    isActive &&
    `
      background: linear-gradient(163.54deg, #ff659e 8.22%, #f56b30 94.1%);
      border-radius: 18px;
      margin:26px 4px;
      padding:2px;
      border-radius:18px;
     
    `}
  display: inline-flex;
  justify-content: center;
  width: fit-content;
  height: fit-content;
  margin: 28px 6px;
`;

const ItemSubImg = styled.div`
  width: 106px;
  height: 106px;
  border-radius: 16px;
  border: 0.5px solid #aaafb9;
  user-select: none;
  background-image: ${(props) => `url(${props.background})`};
  cursor: pointer;
`;
