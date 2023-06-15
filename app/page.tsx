"use client";
import styled from "styled-components"
import Header from "./components/header/Header";
import Headline from "./components/headline/Headline";
import Services from "./components/services/Services";
import Solutions from "./components/solutions/Solutions";

export default function Home() {
  return (
    <Container>
      <Header />
      <Headline />
      <Services />
      <Solutions />
    </Container>
  )
}

const Container = styled.main`

 
`