"use client";
import Image from "next/image"
import styled from "styled-components"
import Photo from '@/public/anvisa/leap-destak-img.png'

export default function Destak(){
    return(
        <Container>
            <Content>
                <h2>Licença sanitária é premissa para autorização ANVISA</h2>
                <p>Com um especialista cuidando dessa parte burocrática você recebe um plano de regularização prático para otimizar tempo e eliminar desperdício de recursos.</p>
                <p>O consultor mostrará estratégias de como começar o seu negócio sem necessidade de investir tanto capital e ter agilidade para obter a autorização ANVISA, licença sanitária, registro de produtos e outras licenças complementares para que você atinja o mercado da saúde.</p>
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
    }
`

const Img = styled(Image)`
    width: 300px;
    height: auto;

    @media(max-width: 340px){
        width: 100%;
    }
`