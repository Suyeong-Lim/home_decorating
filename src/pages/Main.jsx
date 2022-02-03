import React from "react";
import Contents from "../components/Contents";
import styled from "styled-components";

const Main = () => {
  return (
    <ContentsMain>
      <Contents />
    </ContentsMain>
  );
};

export default Main;

const ContentsMain = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3.3rem;
`;
