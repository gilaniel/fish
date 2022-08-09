import React from "react";
import { Container } from "@chakra-ui/react";
import { Header } from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Container maxW="full" p={0}>
        {children}
      </Container>
    </>
  );
}
