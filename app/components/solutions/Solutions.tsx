"use client";
import styled from "styled-components";
import Title from "../global/Title";
import { solutions } from "../global/_data";
import Techincal from "../../../public/solutions/technical-responsibility.png";
import Sizing from "../../../public/solutions/sizing.png";
import Process from "../../../public/solutions/process.png";
import Susteinable from "../../../public/solutions/susteinable.png";
import Image from "next/image";

export default function Solutions() {
  return (
    <Container>
      <Title title="Soluções Leap" text="O que fazemos" />
      <SolutionBlock>
        <SolutionBlockLeft>
          <IconLeft src={Techincal} alt={solutions[0].title} />
          <h3 className="title">{solutions[0].title}</h3>
          <p className="content">{solutions[0].content}</p>
        </SolutionBlockLeft>
        <SolutionBlockRight>
          <IconRight src={Sizing} alt={solutions[1].title} />
          <h3 className="title">{solutions[1].title}</h3>
          <p className="content">{solutions[1].content}</p>
        </SolutionBlockRight>
        <SolutionBlockLeft>
          <IconLeft src={Process} alt={solutions[2].title} />
          <h3 className="title">{solutions[2].title}</h3>
          <p className="content">{solutions[2].content}</p>
        </SolutionBlockLeft>
        <SolutionBlockRight>
          <IconRight src={Susteinable} alt={solutions[3].title} />
          <h3 className="title">{solutions[3].title}</h3>
          <p className="content">{solutions[3].content}</p>
        </SolutionBlockRight>
      </SolutionBlock>
    </Container>
  );
}

const Container = styled.section``;

const SolutionBlockLeft = styled.div`
  width: 500px;
  border-right: 4px solid #939191;
  padding-left: 40px;
  padding-right: 40px;
  margin-right: 540px;
  position: relative;
  left: 21px;

  .title {
    height: 50px;
    padding-bottom: 10px;
    &:before {
      content: "";
      display: inline-block;
      background-color: #939191;
      position: absolute;
      height: 20px;
      width: 4px;
      bottom: 201px;
      right: 292px;
    }
  }

  .content {
    height: 114px;
    &:before {
      content: "";
      display: inline-block;
      background-color: #939191;
      width: 280px;
      height: 4px;
      position: absolute;
      left: 200px;
      bottom: 220px;
      z-index: 1;
    }
  }
`;
const SolutionBlockRight = styled.div`
  width: 500px;
  border-left: 4px solid #939191;
  padding-right: 20px;
  padding-left: 40px;
  margin-left: 540px;
  position: relative;
  right: 21px;

  .title {
    height: 50px;
    padding-bottom: 10px;

    &:before {
      content: "";
      display: inline-block;
      background-color: #939191;
      position: absolute;
      height: 20px;
      width: 4px;
      bottom: 201px;
      right: 216px;
    }
  }

  .content {
    height: 114px;

    &:before {
      content: "";
      display: inline-block;
      background-color: #939191;
      width: 280px;
      height: 4px;
      position: absolute;
      left: 0px;
      bottom: 220px;
      z-index: 1;
    }
  }
`;

const SolutionBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IconLeft = styled(Image)`
  position: relative;
  display: flex;
  left: 412px;
  bottom: 10px;
  width: 96px;
  height: 96px;
  z-index: 2;
`;

const IconRight = styled(Image)`
  position: relative;
  display: flex;
  right: 92px;
  bottom: 10px;
  width: 96px;
  height: 96px;
  z-index: 2;
`;
