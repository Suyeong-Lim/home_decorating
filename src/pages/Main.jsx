import React from "react";
import Contents from "../components/Contents";
import styled from "styled-components";

const Main = () => {
  return (
    <ViewContents>
      <Contents />
    </ViewContents>
  );
};

export default Main;

const ViewContents = styled.div`
  width: 800px;
  box-sizing: border-box;
  padding: 40px 0;
  margin-left: auto;
  margin-right: auto;
  font-size: 0;
`;
