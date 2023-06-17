import Image from "next/image";
import styled from "styled-components";
import Background from "../../../public/headline/img-headline.png";
import Button from "../global/Button";
import { headline } from "../global/_data";

export default function Headline() {
  return (
    <Container>
      <Img
        src={Background}
        alt="Leap Engenharia Química"
        fill={true}
        style={{ objectFit: "cover" }}
      />
      <PositionHeadline id="Inicio"></PositionHeadline>

      <Content>
        <h1>{headline.title}</h1>
        <Descripition>{headline.description}</Descripition>
        <Button text={headline.textButton} />

        <PositionServices id="Atuacao"></PositionServices>
      </Content>
    </Container>
  );
}

const Container = styled.section`
  background-image: url("../../../public/headline/img-headline.png");
  position: relative;
  height: 500px;
  margin-top: 87px;

  @media (max-width: 940px) {
    h1 {
      font-size: 24px;
      margin-left: 20px;
      margin-right: 20px;
    }
  }
`;

const Content = styled.div`
  position: relative;
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
  padding-top: 100px;
`;

const Descripition = styled.p`
  color: var(--color-white);
  font-size: 24px;
  font-weight: 300;
  padding-top: 25px;
  padding-bottom: 45px;

  @media (max-width: 940px) {
    font-size: 18px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 25px;
  }
`;

const Img = styled(Image)`
  background-size: 100%;
`;

const PositionServices = styled.p`
  position: relative;
  bottom: 50px;
`;

const PositionHeadline = styled.p`
  position: relative;
  bottom: 100px;
`;
