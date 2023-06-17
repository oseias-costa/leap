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
          <p className="ContactBlock__Title">{item.title}</p>
          <p>{item.content}</p>
        </div>
      </ContactBlock>
    );
  });

  return (
    <Container id="Contato">
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
  @media (max-width: 940px) {
    height: auto;
    padding-bottom: 40px;
  }
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

  .Contact_title {
    font-size: 24px;
  }

  .Contact_subtitle,
  .Contact_title {
    color: #f0f0f0;
  }
`;

const Contacts = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  flex-wrap: wrap;
  @media (max-width: 940px) {
    align-items: center;
  }
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

  div > .ContactBlock__Title {
    color: #939191;
  }

  @media (max-width: 940px) {
    margin-left: 0px;
    margin-bottom: 10px;
  }

  @media (max-width: 740px) {
    margin-left: 10px;
    margin-right: 10px;
    padding: 10px;
  }
`;

const Icon = styled(Image)`
  width: 66px;
  height: 66px;
  margin-right: 20px;
`;
