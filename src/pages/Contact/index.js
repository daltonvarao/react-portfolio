import React from "react";

import { Link } from "react-router-dom";

import {
  FaChevronRight,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
} from "react-icons/all";

import {
  Container,
  ProfileContainer,
  ProfileTitle,
  CardContainer,
  Card,
  CardText,
} from "./styles";

export default function Contact() {
  const cards = [
    {
      title: "Twitter",
      onClick: () => {},
      icon: () => <FaTwitter size={54} color="#101411" />,
    },
    {
      title: "Linkedin",
      onClick: () => {},
      icon: () => <FaLinkedin size={54} color="#101411" />,
    },
    {
      title: "Github",
      onClick: () => {},
      icon: () => <FaGithub size={54} color="#101411" />,
    },
    {
      title: "Email",
      onClick: () => {},
      icon: () => <FaEnvelope size={54} color="#101411" />,
    },
  ];

  return (
    <Container>
      <ProfileContainer>
        <ProfileTitle>
          <h2>Olá, seja bem vinda(o), </h2>
          <h1>eu sou Dalton Felipe.</h1>
        </ProfileTitle>
      </ProfileContainer>

      <CardContainer>
        {cards.map((card) => (
          <Card onClick={card.onClick} key={card.url}>
            <div>
              {card.icon()}
              <CardText>{card.title}</CardText>
            </div>
            <FaChevronRight className="chevron" size={24} color="#101411" />
          </Card>
        ))}
      </CardContainer>
    </Container>
  );
}
