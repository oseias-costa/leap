"use client";
import styled from "styled-components";
import Header from "../components/header/Header";
import HeadlineAnvisa from "./components/Headline_Anvisa";

export default function Anvisa(){
    return (
        <Container>
            <Header />
            <HeadlineAnvisa />
        </Container>
    )
}

const Container = styled.section`
    margin-top: 67px;
`