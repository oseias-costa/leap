import Image from "next/image";
import styled from "styled-components";
import Logo from "../../../public/header/logo-leap-header.png";

export default function Header() {
  return (
    <Container>
      <Img src={Logo} alt="Logo Leap Engenharia Química" />
      <Menu>
        <A href="">Início</A>
        <A href="">Serviços</A>
        <A href="">Soluções</A>
        <A href="">Contato</A>
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
  height: 57px;
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
`;
