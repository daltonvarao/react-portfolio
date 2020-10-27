import React from "react";

import {
  FaChevronRight,
  MdChevronLeft,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/all";

import {
  Container,
  ProfileContainer,
  ProfileTitle,
  CardContainer,
  Card,
  CardText,
  Header,
  Backbutton,
} from "./styles";

export default function Contact({ history }) {
  const cards = [
    {
      title: "Twitter",
      onClick: () => window.open("https://twitter.com/daltonvarao", "_blank"),
      icon: () => (
        <FaTwitter className="social-icon" size={42} color="#f8f8f2" />
      ),
      hoverColor: "rgba(29, 161, 242, 1)",
    },
    {
      title: "Linkedin",
      onClick: () =>
        window.open("https://linkedin.com/in/daltonvarao", "_blank"),
      icon: () => (
        <FaLinkedin className="social-icon" size={42} color="#f8f8f2" />
      ),
      hoverColor: "rgba(0, 112, 728, 1)",
    },
    {
      title: "Github",
      onClick: () => window.open("https://github.com/daltonvarao", "_blank"),
      icon: () => (
        <FaGithub className="social-icon" size={42} color="#f8f8f2" />
      ),
      hoverColor: "rgba(36, 41, 46, 1)",
    },
    {
      title: "Email",
      onClick: () => window.open("mailto:daltonphellipe@gmail.com", "_blank"),
      icon: () => (
        <FaEnvelope className="social-icon" size={42} color="#f8f8f2" />
      ),
      hoverColor: "rgba(234, 65, 53, 1)",
    },

    {
      title: "Whatsapp",
      onClick: () =>
        window.open(
          "https://api.whatsapp.com/send?phone=+5593991924014&text=Olá, gostaria de entrar em contato com você!",
          "_blank"
        ),
      icon: () => (
        <FaWhatsapp className="social-icon" size={42} color="#f8f8f2" />
      ),
      hoverColor: "rgba(0, 230, 118, 1)",
    },
  ];

  return (
    <Container>
      <Header>
        <Backbutton onClick={() => history.goBack()}>
          <MdChevronLeft className="social-icon" size={28} color="#f8f8f2" />
          <span>Voltar</span>
        </Backbutton>
      </Header>
      <ProfileContainer>
        <ProfileTitle>
          <h2>Quer entrar em contato? </h2>
          <h1>Conecte-se comigo</h1>
        </ProfileTitle>
      </ProfileContainer>

      <CardContainer>
        {cards.map((card) => (
          <Card
            onClick={card.onClick}
            hoverColor={card.hoverColor}
            key={card.url}
          >
            <div>
              {card.icon()}
              <CardText>{card.title}</CardText>
            </div>
            <FaChevronRight className="chevron" size={24} color="#f8f8f2" />
          </Card>
        ))}
      </CardContainer>
    </Container>
  );
}
