import styled from "styled-components";

export default function FooterInfo({
  label,
  content,
}: {
  label: string;
  content: string;
}) {
  return (
    <Container>
      <p className="FooterInfo__label">{label}</p>
      <p className="FooterInfo__Content">{content}</p>
    </Container>
  );
}

const Container = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;

  .FooterInfo__label {
    color: var(--color-white);
    padding-bottom: 4px;
  }

  .FooterInfo__Content {
    color: var(--color-white);
    font-weight: 200;
  }
`;
