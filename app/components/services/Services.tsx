import Image from "next/image"
import styled from "styled-components"
import { services } from "../global/_data"


export default function Services(){
    const servicesBlocks = services.map(item => {
        return(
            <ServicesBlock key={item.title}>
                <Img src={item.img} alt={item.title} />
                <Content>
                    <p className='services__title'>{item.title}</p>
                    <p className='services__content'>{item.content}</p>
                </Content>
            </ServicesBlock>
        )
    })
    return <Container>{servicesBlocks}</Container>
}

const Container = styled.section`
    display: flex;
    position: relative;
    bottom: 75px;
    justify-content: center;
    flex-wrap: wrap;
`

const ServicesBlock = styled.div`
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    width: 300px;
    margin-left: 30px;
    margin-right: 30px;

    @media(max-width: 940px){
        margin-bottom: 26px; 
    }
`

const Img = styled(Image)`
    border-radius: 10px 10px 0px 0px;
    width: 300px;
    height: auto;
`

const Content = styled.div`
    padding: 20px;
    text-align: center;

    .services__title {
        color: var(--color-blue);
        font-weight: 500;
        padding-bottom: 10px;
        height: 48px;
    }

    .services__content {
        color: var(--color-gray);
        font-weight: 500;
        font-size: 14px;
    }
`