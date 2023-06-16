import Image from "next/image";
import styled from "styled-components";
import Background from "../../../public/contact/contact.png";
import { contact } from "../global/_data";

export default function Contact() {
  const contactBlock = contact.info.map((item) => {
    return (
      <ContactBlock key={item.title}>
        <Icon src={item.icon} alt={item.title} />
        <div>
          <p>{item.title}</p>
          <p>{item.content}</p>
        </div>
      </ContactBlock>
    );
  });

  return (
    <Container>
      <Img src={Background} alt="Leap Engenharia Química" fill={true} />
      <Title>
        <p className="Contact_subtitle">Informações</p>
        <h3 className="Contact_title">Contato</h3>
      </Title>
      <Contacts>{contactBlock}</Contacts>
    </Container>
  );
}

const Container = styled.section`
  position: relative;
  height: 270px;
`;

const Img = styled(Image)`
  background-repeat: round;
`;

const Title = styled.div`
  padding: 40px;
  position: relative;
  text-align: center;
  max-width: 450px;
  margin: 0 auto;
  padding-bottom: 30px;

  .Contact_subtitle,
  .Contact_title {
    color: #f0f0f0;
  }
`;

const Contacts = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
`;

const ContactBlock = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  background-color: var(--color-white);
  padding: 25px;
  margin-left: 10px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  width: 373.78px;
`;

const Icon = styled(Image)`
  width: 66px;
  height: 66px;
  margin-right: 20px;
`;
