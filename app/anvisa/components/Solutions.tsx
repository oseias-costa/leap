"use client";
import styled from "styled-components"
import { problemsData, solutionsData } from "./solutionsData"
import Image from "next/image"

export default function Solutions(): JSX.Element{
    const problems = problemsData.map(item => {
        return(
            <Item key={item.id}>
                <Icon src={item.icon} alt={item.title} />
                <ItemText>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                </ItemText>
            </Item>
        )
    })

    const solutions = solutionsData.map(item => {
        return(
            <Item key={item.id}>
                <Icon src={item.icon} alt={item.title} />
                <ItemText>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                </ItemText>
            </Item>
        )
    })

    return(
        <Container>
            <Body>
                <Content>
                    <h2>Problemas encontrados na hora de fazer o processo regulatório: </h2>
                    {problems}
                </Content>
                <Content>
                    <h2>Soluções da Leap Engenharia para aprovação ANVISA:</h2>
                    {solutions}
                </Content>
            </Body>
        </Container>
    )
}

const Container = styled.section`
    margin-top: 80px;
    postion: relative;
    `

const Body = styled.div`
    border: 1px solid #002A40;
    display: flex;
    justify-content: center;
    border-radius: 20px;
    margin-left: 10%;
    margin-right: 10%;
    padding-top: 30px;

    @media(max-width: 1000px){
        flex-wrap: wrap;
        margin-left: 0%;
        margin-right: 0%;
        border: 0px solid #002A40;
    }
`

const Content = styled.div`
    padding: 30px;

    h2 {
        max-width: 400px;
        color: #002A40;
        padding-bottom: 15px;
    }

    @media(max-width: 1000px){
        padding: 20px;

        h2 {
            text-align: center;
        }
    }
`

const Item = styled.div`
    display: flex;
    padding-top: 30px;
`

const Icon = styled(Image)`
    width: 66px;
    height: 66px;
`

const ItemText = styled.div`
    padding-left: 25px;
    max-width: 400px;

    h3 {
        color: #002A40;
        padding-bottom: 10px;
    }

    p {
        color: #3E3C3C;
    }
`
