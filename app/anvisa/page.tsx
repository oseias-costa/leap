"use client";
import styled from "styled-components";
import Header from "../components/header/Header";
import HeadlineAnvisa from "./components/Headline_Anvisa";
import Solutions from "./components/Solutions";

export default function Anvisa(){
    return (
        <Container>
            <Header />
            <HeadlineAnvisa />
            <Solutions />
        </Container>
    )
}

const Container = styled.section`
    margin-top: 67px;
`