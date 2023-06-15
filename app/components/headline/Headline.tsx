import Image from "next/image"
import styled from "styled-components"
import Background from '../../../public/headline/img-headline.png'
import Button from "../global/Button"
import { headline } from "../global/_data"

export default function Headline(){
    return(
        <Container>
                <Image 
                    src={Background}
                    alt='Leap Engenharia Química'
                    fill={true}
                />
                <Content>
                    <h1>{headline.title}</h1>
                    <Descripition>{headline.description}</Descripition>
                    <Button text={headline.textButton} />
                </Content>
        </Container>
    )
}

const Container = styled.section`
    position: relative;
    height: 500px;
`
const Content = styled.div`
     position: relative;
     text-align: center;
     max-width: 900px;
     margin: 0 auto;
     padding-top: 100px;
`
const Descripition = styled.p`
    color: var(--color-white);
    font-size: 24px;
    font-weight: 300; 
    padding-top: 25px;
    padding-bottom: 45px;
`