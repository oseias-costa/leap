import Image from "next/image"
import styled from "styled-components"
import Title from "../global/Title"
import { whoAreUs } from "../global/_data"
import Ana from '../../../public/who-are-us/eng-ana.png'
import Logo from '../../../public/who-are-us/bigLogo.png'

export default function WhoAreUs(){
    return(
        <Container>
            <PositionNav id='QuemSomos'></PositionNav>
            <Title text={whoAreUs.subtitle} title={whoAreUs.title} />
            <Content>{whoAreUs.content}</Content>
            <ImgLogo src={Logo} alt='' />
            <Team>
                <Block>
                    <p className='Team_Title'>{whoAreUs.eng}</p>
                    <p className='Team_Description'>{whoAreUs.description}</p>
                </Block>
                <Img src={Ana} alt={whoAreUs.eng} />
            </Team>
        </Container>
    )
}

const Container = styled.section`
    padding-top: 60px;
    @media(max-width: 940px){
        
    }
`

const Content = styled.p`
    max-width: 650px;
    margin: 0 auto;
    text-align: center;
    font-weight: 200;
    color: var(--color-gray);
    position: relative;
    top: 25px;
    @media(max-width: 940px){
        padding-left: 20px;
        padding-right: 20px;
        padding-bottom: 40px;
    }
`

const Team = styled.div`
    background-color: #D8DDE0;
    display: flex;
    height: 200px;
    padding: 35px;
    margin-top: 40px;
    position: relative;
    z-index: 2;
    position: relative;
    bottom: 150px;
    @media(max-width: 940px){
        position: relative;
        height: auto;
        flex-direction: column;
        bottom: 0;
    }
`
    
const Block = styled.div`
    max-width: 600px;
    margin: 0 auto;

    .Team_Title {
        color: var(--color-blue);
        padding-bottom: 10px;
        font-weight: 500;
    }

    .Team_Description {
        color: var(--color-gray);
        font-size: 14px;
    }

    @media(max-width: 940px){
        max-width: 400px;
    }
`

const Img = styled(Image)`
    width: 291px;
    height: 300px;
    position: relative;
    bottom: 80px;
    right: 100px;
    @media(max-width: 940px){
        bottom: -20px;
        right: 0px;
        margin: 0 auto;
    }
`

const ImgLogo = styled(Image)`
    position: relative;
    bottom: 150px;
    z-index: 1;
    height: 250px;
    width: auto;
    @media(max-width: 940px){
        display: none;
    }

`

const PositionNav = styled.p`
    position: relative;
    bottom: 120px;
`