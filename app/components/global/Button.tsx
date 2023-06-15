import styled from "styled-components";
import { contact } from "./_data";

export default function Button({ text }: { text: string }) {
  return (
    <A href={contact.info[1].telefone} target="_blank">
      {text}
    </A>
  );
}

const A = styled.a`
  background-color: var(--color-white);
  color: var(--color-blue);
  font-weight: 500;
  font-family: var(--font-mollen);
  font-size: 18px;
  padding-left: 35px;
  padding-right: 35px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  transition: 0.2s linear;
  position: relative;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
      rgba(0, 0, 0, 0.22) 0px 15px 12px;
  }
`;
