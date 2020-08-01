import * as React from "react";
import styled from "@emotion/styled";
import Link from "next/link";

const HelloWorld: React.FC = () => {
  return (
    <>
      <HTag>About!</HTag>
      <Link href="/">
        <a>Home</a>
      </Link>
    </>
  );
};

const HTag = styled.h1``;

export default HelloWorld;
