import styled from "styled-components"

export default function Title({text, title}: {text: string, title: string}){
    return(
        <Container>
            <Text></Text>
            <H3></H3>
        </Container>
    )
}

const Container = styled.div`
    text-align: center;
    max-width: 450px;
    margin: 0 auto;
`
const Text = styled.p`

`

const H3 = styled.h3`

`