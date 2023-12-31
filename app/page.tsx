"use client";
import styled from "styled-components";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Headline from "./components/headline/Headline";
import Schedule from "./components/schedule/Schedule";
import Services from "./components/services/Services";
import Solutions from "./components/solutions/Solutions";
import Whatsapp from "./components/whatsapp/Whatsapp";
import WhoAreUs from "./components/whoAreUs/WhoAreUs";

export default function Home() {
  return (
    <Container>
      <Header />
      <Headline />
      <Services />
      <Solutions />
      <Schedule />
      <WhoAreUs />
      <Contact />
      <Footer />
      <Whatsapp />
    </Container>
  );
}

const Container = styled.main``;
