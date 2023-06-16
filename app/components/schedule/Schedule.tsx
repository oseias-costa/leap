import Image from "next/image";
import styled from "styled-components";
import Button from "../global/Button";
import { shedule } from "../global/_data";
import Background from "../../../public/schedule/schedule.png";

export default function Schedule() {
  return (
    <Container>
      <Image src={Background} alt="Leap Engenharia Química" fill={true} />
      <Title>{shedule.title}</Title>
      <Subtitle>{shedule.subtitle}</Subtitle>
      <Button text={shedule.textButton} />
    </Container>
  );
}

const Container = styled.section`
  position: relative;
  width: 100%;
  height: 245px;
  text-align: center;
  margin-top: 40px;
`;

const Title = styled.h2`
  padding-top: 50px;
  position: relative;
  max-width: 600px;
  margin: 0 auto;
  color: var(--color-white);
  font-size: 24px;
`;

const Subtitle = styled.p`
  font-size: 18px;
  padding-top: 20px;
  padding-bottom: 30px;
  position: relative;
  max-width: 700px;
  margin: 0 auto;
  color: var(--color-white);
`;
