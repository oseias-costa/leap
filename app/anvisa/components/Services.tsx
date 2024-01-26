"use client";
import styled from "styled-components"
import { data } from './servicesData'

export default function Services(){
    const service = data.map((item) => {
        return(
            <ServiceItem key={item.id}>
                <Div />
                <h3>{item.title}</h3>
                { item.services.map((item, index) => {
                    return <p key={index}>{item}</p>
                })}
            </ServiceItem>)
    })

    return(
        <Container>
            <h2>Serviços de regulação ANVISA Leap Engenharia</h2>
            <p className="p">Deixe-nos guiar sua empresa para o sucesso com soluções adaptadas às suas necessidades.</p>
            <ServiceBlock>{service}</ServiceBlock>
            <ButtonService>Fale com um especialista hoje</ButtonService>
        </Container>
    )
}

const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 60px;

    h2 {
        text-align: center;
        color: #002A40;
    }
    .p {
        text-align: center;
        color: #3E3C3C;
        max-width: 500px;
        font-size: 18px;
        margin: 0 auto;
    }
`

const ServiceBlock = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 60px;
    text-align: left;
    padding-bottom: 40px;

    @media(max-width: 900px){
        flex-wrap: wrap;
        padding-bottom: 20px;
        padding-top: 30px;
    }
    `
const ServiceItem = styled.div`
    border: 1px solid #002A40;
    border-radius: 10px;
    margin: 10px;
    padding-bottom: 15px;

    h3 {
        color: #002A40;
        padding-bottom: 15px;
        padding-top: 15px;
        padding-left: 15px;
        padding-right: 15px;
    }

    p {
        color: #3E3C3C;
        padding-bottom: 10px;
        padding-left: 15px;
        padding-right: 15px;
    }
`

const Div = styled.div`
    background-color: #002A40;
    height: 10px;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;

`

const ButtonService = styled.a`
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
        width: 100%;
        text-align: center;
    }
`
