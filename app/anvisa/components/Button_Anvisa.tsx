"use client";
import styled from "styled-components"

export default function ButtonAnvisa({title}: {title: string}){
    return <ButtonAnivsaContainer title={title} />
}

const ButtonAnivsaContainer = styled.a`
    color: #0B3C5F;
`