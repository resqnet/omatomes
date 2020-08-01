import * as React from "react";
import styled from "@emotion/styled";

const HelloWorld: React.FC = () => {
  return <HTag>Hello, Next.js!</HTag>;
};

const HTag = styled.h1``;

export default HelloWorld;
