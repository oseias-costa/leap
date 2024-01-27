"use client";
import Image from "next/image"
import styled from "styled-components"
import Photo from '@/public/anvisa/leap-destak-img.png'
import { contact } from "@/app/components/global/_data";

export default function Destak(){
    return(
        <Container>
            <Content>
                <h2>Licença sanitária é premissa para autorização ANVISA</h2>
                <p>Com um especialista cuidando dessa parte burocrática você recebe um plano de regularização prático para otimizar tempo e eliminar desperdício de recursos.</p>
                <p>O consultor mostrará estratégias de como começar o seu negócio sem necessidade de investir tanto capital e ter agilidade para obter a autorização ANVISA, licença sanitária, registro de produtos e outras licenças complementares para que você atinja o mercado da saúde.</p>
                <a href={contact.whatsapp} target="_blank">Fale com um especialista agora</a>
            </Content>
            <Img src={Photo} alt="Licença sanitária é premissa para autorização ANVISA - LEAP ENGENHARIA QUÍMICA" />
        </Container>
    )
}

const Container = styled.section`
    display: flex;
    justify-content: center;
    background-color: #002A40;
    color: #fff;
    padding-top: 80px;
    margin-bottom: 60px;
    padding-left: 20px;
    padding-right: 20px;

    @media(max-width: 800px){
        flex-wrap: wrap;
    }
`

const Content = styled.div`
    max-width: 400px;

    h2 {
        padding-bottom: 15px;
        font-size: 28px;
    }

    p {
        padding-top: 25px;
        font-weight: 300;
        
        &:nth-child(3){
            padding-bottom: 30px;
        }
    }

    a {
        font-family: var(--font-mollen);
        background-color: #fff;
        color: #0B3C5F;
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
            margin-bottom: 20px;
        }
`

const Img = styled(Image)`
    width: 300px;
    height: auto;

    @media(max-width: 340px){
        width: 100%;
    }
`