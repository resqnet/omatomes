import * as React from "react";
import styled from "@emotion/styled";
import Link from "next/link";

const HelloWorld: React.FC = () => {
  return (
    <>
      <HTag>Hello, Next.js!</HTag>
      <Link href="/about">
        <a>About</a>
      </Link>
    </>
  );
};

const HTag = styled.h1``;

export default HelloWorld;
