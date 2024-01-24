"use client";
import styled from "styled-components";
import Header from "../components/header/Header";
import HeadlineAnvisa from "./components/Headline_Anvisa";
import Solutions from "./components/Solutions";
import Destak from "./components/Destak";

export default function Anvisa(){
    return (
    <>
        <head>
            <title>Leap Engenharia Química | Consultoria Regulatória ANVISA</title>
            <meta name="description" content=" Somos especialistas em assuntos regulatórios na ANVISA. Realizamos consultoria regulatória da ANVISA em todo o Brasil e atuamos como responsáveis técnicos em SC" />
        </head>
        <Container>
            <Header />
            <HeadlineAnvisa />
            <Solutions />
            <Destak />
        </Container>
        </>
    )
}

const Container = styled.body`
    margin-top: 67px;
`