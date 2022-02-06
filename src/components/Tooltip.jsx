import React from "react";
import styled from "styled-components";

const Tooltip = ({ item }) => {
  const imageUrl = item.imageUrl;

  return (
    <Container>
      <ProductImg src={imageUrl} />
      <TextBox>
        <p></p>
        <Price>
          <span>예상가</span>
        </Price>
      </TextBox>
      <MoreIcon>
        <img
          alt="상품보기"
          src="https://cdn.ggumim.co.kr/storage/20211102181936xqHzyWAmb8.png"
        />
      </MoreIcon>
    </Container>
  );
};

const ProductImg = styled.img`
  flex-shrink: 0;
  width: 70px;
  height: 70px;
  margin-right: 8px;
  background-size: cover;
  background-position: center;
  border-radius: 4px;
  background-image: ${(props) => `url(${props.src})`};
`;

const TextBox = styled.div``;
const Price = styled.div``;
const MoreIcon = styled.div``;

const Container = styled.div`
  z-index: 1000;
  display: flex;
  align-items: center;
  position: absolute;
  top: 28px;
  left: -150px;
  background-color: rgba(255, 255, 255, 0.95);
  width: 220px;
  height: 86px;
  padding: 8px 0 8px 8px;
  margin-top: 16px;
  border-radius: 7px;
  box-shadow: 3px 3px 8px 0 rgba(0, 0, 0, 0.2);
  font-size: 14px;
  color: #4a4a4a;
`;

export default Tooltip;
