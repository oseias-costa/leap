"use client";
import styled from "styled-components";
import Header from "../components/header/Header";
import HeadlineAnvisa from "./components/Headline_Anvisa";
import Solutions from "./components/Solutions";
import Destak from "./components/Destak";
import Services from "./components/Services";
import FooterAnvisa from "./components/FooterAnvisa";
import Google from "../components/global/Google";
import GoogleBody from "../components/global/GoogleBody";
import HeaderAnvisa from "./components/HeaderAnvisa";

export default function Anvisa(){
    return (
    <>
        <head>
            <title>Leap Engenharia Química | Consultoria Regulatória ANVISA</title>
            <meta name="description" content=" Somos especialistas em assuntos regulatórios na ANVISA. Realizamos consultoria regulatória da ANVISA em todo o Brasil e atuamos como responsáveis técnicos em SC" />
            <Google id="NFPDFG4X" />
        </head>
        <Container>
            <GoogleBody id="NFPDFG4X" />
            <HeaderAnvisa />
            <HeadlineAnvisa />
            <Solutions />
            <Destak />
            <Services />
            <FooterAnvisa />
        </Container>
        </>
    )
}

const Container = styled.body`
    margin-top: 67px;
`