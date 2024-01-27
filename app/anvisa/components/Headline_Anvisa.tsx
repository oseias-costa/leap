"use client";
import styled from "styled-components"
import Background from "@/public/anvisa/background-anvisa.png"
import Image from "next/image";
import { contact } from "@/app/components/global/_data";

export default function HeadlineAnvisa(){
    return(
        <Container>
            <Img
                src={Background}
                alt="Leap Engenharia Química"
                fill={true}
                style={{ objectFit: "cover" }}
            />
            <Content>
                <HeadlineContent>
                    <h1>Mantenha-se em conformidade com a ANVISA! Tenha uma consultoria personalizada!</h1>
                    <p>Aprovação na ANVISA sem estresse! Nossa consultoria é sua aliada para enfrentar e superar os desafios regulatórios. Deixe-nos guiar sua empresa para o sucesso com soluções adaptadas às suas necessidades.</p>
                    <a href={contact.whatsapp} target="_blank">Fale com um especialista agora</a>
                </HeadlineContent>
            </Content>
        </Container>
    )
}

const Container = styled.section`
  background-color: var(--color-blue);
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  padding-top: 100px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  position: fixed;
  top: 0px;
  z-index: 0;
  position: relative;
`;

const Content = styled.div`
  position: relative;
  display: flex;
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
  padding-top: 50px;
  padding-bottom: 50px;
`;

const Img = styled(Image)`
  background-size: 100%;
`;

const HeadlineContent = styled.div`
    background-color: #fff;
    padding-left: 25px;
    padding-right: 25px;
    padding-bottom: 50px;
    padding-top: 50px;
    max-width: 450px;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

    h1 {
        color: #002A40;
        font-size: 26px;
        padding-bottom: 28px;
    }

    p {
        color: #3E3C3C;
        margin-bottom: 35px;
    }

    a {
        font-family: var(--font-mollen);
        background-color: #0B3C5F;
        color: #fff;
        font-weight: 500;
        padding-left: 30px;
        padding-right: 30px;
        padding-top: 10px;
        padding-bottom: 10px;
        border-radius: 10px;
        font-size: 20px;
        cursor: pointer;
        transition: linear .2s;

        &:hover {
            box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
        }

        @media(max-width: 740px){
            display: block;
        }
    }
`