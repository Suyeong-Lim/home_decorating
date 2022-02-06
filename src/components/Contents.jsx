import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import IconTag from "./IconTag";
import ProductList from "./ProductList";
import Tooltip from "./Tooltip";

const Contents = () => {
  const [loading, setLoading] = useState(true);
  const data = useSelector((state) => state.productInfo);

  useEffect(() => {
    console.log("data render", data);
    setLoading(false);
  }, []);

  const [active, setActive] = useState(false);
  const [currentId, setCurrent] = useState(0);
  const clickHandler = () => {
    setActive((curr) => !active);
    console.log(active);
  };

  const [clickedId, setClickedId] = useState(null);
  const TagClickHandler = (e) => {
    const id = Number(e.target.id);
    setClickedId(id);
    if (clickedId === id) {
      setClickedId(null);
    }
  };

  console.log(clickedId, "clicked ID");
  return (
    <>
      {loading ? (
        <Loading>Loding...</Loading>
      ) : (
        <>
          <Center>
            <ViewContentImg>
              <Img data={data} src={data.imageUrl} />
              {data.productList.map((item, index) => (
                <Tag
                  key={item.productId}
                  id={index}
                  positionX={item.pointX * 1.6}
                  positionY={item.pointY * 1.6}
                  onClick={TagClickHandler}
                >
                  {clickedId === index ? (
                    <Icon
                      id={index}
                      src="//cdn.ggumim.co.kr/storage/20211029145330GwwumnWNSs.png"
                    />
                  ) : (
                    <Icon
                      id={index}
                      src=" //cdn.ggumim.co.kr/storage/20211029145238AlZrQ41xtg.png"
                    />
                  )}
                  {/* 📍 ⭐️⭐️⭐️ clikedId === index  */}
                  {clickedId === index && <Tooltip item={item} />}
                </Tag>
              ))}
            </ViewContentImg>
          </Center>
          <FurnitureSwiper>
            <SwiperWrapper>
              {data.productList.map((item, index) => (
                //누른 id 값만 isactive true 로
                <ItemPicture
                  key={item.productId}
                  // 📍⭐️⭐️⭐️
                  isActive={clickedId === index ? true : false}
                  onClick={TagClickHandler}
                >
                  <ItemSubImg
                    onClick={clickHandler}
                    // ❓❓ ⭐️⭐️⭐️ //왜 돼는지....다시 보기
                    id={index} // 엥 이게 되네..?
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
