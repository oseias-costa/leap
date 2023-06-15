import styled from "styled-components";

export default function Title({
  text,
  title,
}: {
  text: string;
  title: string;
}) {
  return (
    <Container>
      <Text>{text}</Text>
      <H3>{title}</H3>
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
  max-width: 450px;
  margin: 0 auto;
  padding-bottom: 30px;
`;
const Text = styled.p``;

const H3 = styled.h3``;
