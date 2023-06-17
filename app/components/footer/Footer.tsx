import Image from "next/image";
import styled from "styled-components";
import Logo from "../../../public/header/logo-leap-header.png";
import { contact, footer } from "../global/_data";
import FooterInfo from "./FooterInfo";

export default function Footer() {
  const socialMidia = footer.midias.map((item) => {
    return (
      <a key={item.name} href={item.link} target="_blank">
        <Image src={item.icon} alt={item.name} width={36} height={36} />
      </a>
    );
  });

  return (
    <Container>
      <LogoBlock>
        <IconLogo src={Logo} alt="Logo Leap Engenharia Química" />
        <FooterInfo
          label={contact.info[1].title}
          content={contact.info[1].content}
        />
      </LogoBlock>
      <Menu>
        <A href="#Inicio">Início</A>
        <A href="#Servicos">Serviços</A>
        <A href="#Solucoes">Soluções</A>
        <A href="#QuemSomos">Quem Somos</A>
      </Menu>
      <BlockRight>
        <FooterInfo
          label={contact.info[0].title}
          content={contact.info[0].content}
        />
        <FooterInfo
          label={footer.title}
          content={footer.cnpj}
        />
        <SocialMidia>{socialMidia}</SocialMidia>
      </BlockRight>
    </Container>
  );
}

const Container = styled.section`
  background-color: var(--color-blue);
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  padding-top: 50px;
  padding-bottom: 20px;
  flex-wrap: wrap;
  @media (max-width: 740px) {
    flex-direction: column;
    align-items: center;
  }
`;

const LogoBlock = styled.div``;

const BlockRight = styled.div``;

const SocialMidia = styled.div`
  display: flex;
  @media (max-width: 740px) {
    justify-content: center;
    padding-bottom: 30px;
  }
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;
  @media (max-width: 740px) {
    padding-top: 30px;
    text-align: center;
  }
`;

const IconLogo = styled(Image)``;

const A = styled.a`
  color: var(--color-white);
  font-family: var(--font-mollen);
  font-weight: 300;
  padding-top: 5px;
  padding-bottom: 5px;
`;
