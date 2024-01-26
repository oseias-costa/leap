"use client";
import Image from "next/image";
import styled from "styled-components";
import Logo from "../../../public/header/logo-leap-header.png";

export default function HeaderAnvisa() {
  return (
    <Container>
      <Img src={Logo} alt="Logo Leap Engenharia Química" />
      <Menu>
        <A href="https://www.leapengenharia.com.br/#Inicio">Início</A>
        <A href="#">ANVISA</A>
        <A href="https://www.leapengenharia.com.br/#Atuacao">Atuação</A>
        <A href="https://www.leapengenharia.com.br/#Solucoes">Soluções</A>
        <A href="https://www.leapengenharia.com.br/#Contato">Contato</A>
      </Menu>
    </Container>
  );
}

const Container = styled.section`
  background-color: var(--color-blue);
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  position: fixed;
  top: 0px;
  z-index: 5;
`;

const Img = styled(Image)`
  height: 67px;
  width: auto;
`;

const Menu = styled.div`
  display: flex;

  @media (max-width: 740px) {
    display: none;
  }
`;

const A = styled.a`
  color: var(--color-white);
  font-family: var(--font-mollen);
  font-weight: 300;
  padding-left: 15px;
  padding-right: 15px;
  transition: 0.3s linear;

  &:hover {
    font-weight: 500;
  }
`;
