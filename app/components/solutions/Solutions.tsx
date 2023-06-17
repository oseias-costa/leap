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
        <SolutionBlockRightEnd>
          <IconRight src={Susteinable} alt={solutions[3].title} />
          <h3 className="title">{solutions[3].title}</h3>
          <p className="content">{solutions[3].content}</p>
        </SolutionBlockRightEnd>
      </SolutionBlock>
    </Container>
  );
}

const Container = styled.section`
  padding-top: 50px;

  @media (max-width: 740px) {
    padding-top: 0;
  }
`;

const SolutionBlockLeft = styled.div`
  width: 500px;
  border-right: 3px solid #939191;
  padding-left: 40px;
  padding-right: 40px;
  margin-right: 540px;
  position: relative;
  left: 21px;

  @media (max-width: 940px) {
    width: auto;
    margin-right: 0px;
    border-right: 0px solid #939191;
    left: 0;
    text-align: center;
    margin-top: 85px;
    margin-bottom: 80px;
  }

  .title {
    height: 50px;
    padding-bottom: 10px;
    font-weight: 300;
    color: var(--color-blue);

    &:before {
      content: "";
      display: inline-block;
      background-color: #939191;
      position: absolute;
      height: 20px;
      width: 3px;
      bottom: 201px;
      right: 294px;
      @media (max-width: 940px) {
        height: 170px;
        right: 0px;
        left: 0px;
        margin: 0 auto;
        bottom: 201px;
      }
    }
  }

  .content {
    height: 114px;
    font-weight: 200;
    color: var(--color-gray);

    &:before {
      content: "";
      display: inline-block;
      background-color: #939191;
      width: 280px;
      height: 3px;
      position: absolute;
      left: 200px;
      bottom: 220px;
      z-index: 1;
      @media (max-width: 940px) {
        display: none;
      }
    }
  }
`;
const SolutionBlockRight = styled.div`
  width: 500px;
  border-left: 3px solid #939191;
  padding-right: 20px;
  padding-left: 40px;
  margin-left: 540px;
  position: relative;
  right: 21px;

  @media (max-width: 940px) {
    margin-top: 85px;
    margin-left: 0px;
    border-left: 0px solid #939191;
    width: auto;
    right: 0px;
    text-align: center;
    padding-left: 20px;
    margin-bottom: 40px;
  }

  .title {
    height: 50px;
    padding-bottom: 10px;
    font-weight: 300;
    color: var(--color-blue);

    &:before {
      content: "";
      display: inline-block;
      background-color: #939191;
      position: absolute;
      height: 20px;
      width: 3px;
      bottom: 201px;
      right: 218px;
      @media (max-width: 940px) {
        height: 170px;
        right: 0px;
        left: 0px;
        margin: 0 auto;
      }
    }
  }

  .content {
    height: 114px;
    color: var(--color-gray);
    font-weight: 200;

    &:before {
      content: "";
      display: inline-block;
      background-color: #939191;
      width: 280px;
      height: 3px;
      position: absolute;
      left: 0px;
      bottom: 220px;
      z-index: 1;
      @media (max-width: 940px) {
        display: none;
      }
    }
  }
`;

const SolutionBlockRightEnd = styled.div`
  width: 500px;
  border-left: 0px solid #939191;
  padding-right: 20px;
  padding-left: 43px;
  margin-left: 540px;
  position: relative;
  right: 21px;

  @media (max-width: 940px) {
    margin-top: 55px;
    margin-left: 0px;
    border-left: 0px solid #939191;
    width: auto;
    right: 0px;
    text-align: center;
    padding-left: 20px;
    margin-bottom: 25px;
  }

  .title {
    height: 50px;
    padding-bottom: 10px;
    font-weight: 200;
    color: var(--color-blue);

    &:before {
      content: "";
      display: inline-block;
      background-color: #939191;
      position: absolute;
      height: 20px;
      width: 3px;
      bottom: 201px;
      right: 220px;
      @media (max-width: 940px) {
        height: 170px;
        right: 0px;
        left: 0px;
        margin: 0 auto;
      }
    }
  }

  .content {
    height: 114px;
    //color: #7f7e7e;
    font-weight: 200;
    color: var(--color-gray);

    &:before {
      content: "";
      display: inline-block;
      background-color: #939191;
      width: 280px;
      height: 3px;
      position: absolute;
      left: 0px;
      bottom: 220px;
      z-index: 1;
      @media (max-width: 940px) {
        display: none;
      }
    }
  }
`;

// const SolutionBlockRightEnd = styled(SolutionBlockRight)`
//   border-left: 0px;
//   padding-left: 43px;
//   .title {
//     &:before{
//       right: 220px;
//     }
//   }

// `

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

  @media (max-width: 940px) {
    left: 0;
    margin: 0 auto;
    bottom: 70px;
  }
`;

const IconRight = styled(Image)`
  position: relative;
  display: flex;
  right: 92px;
  bottom: 10px;
  width: 96px;
  height: 96px;
  z-index: 2;

  @media (max-width: 940px) {
    right: 0;
    margin: 0 auto;
    bottom: 70px;
  }
`;
