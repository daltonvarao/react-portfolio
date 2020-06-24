import React from "react";

import { Link } from "react-router-dom";

import { FiArrowRight } from "react-icons/all";

import {
  Container,
  ProfileContainer,
  ProfileTitle,
  ProfilePicture,
  CardContainer,
  Card,
  CardTitle,
  CardBody,
  CardActions,
} from "./styles";

export default function Home() {
  const cards = [
    {
      title: "Trabalhos e projetos",
      description: "Trabalhos que tenho desenvolvido ou finalizado.",
      url: "/projects",
    },
    {
      title: "Contato",
      description: "Entrar em contato, mande um email ou mensagem.",
      url: "/contact",
    },
  ];

  return (
    <Container>
      <ProfileContainer>
        <ProfileTitle>
          <h2>Olá, seja bem vinda(o), </h2>
          <h1>eu sou Dalton Felipe.</h1>
        </ProfileTitle>
        <ProfilePicture />
      </ProfileContainer>

      <CardContainer>
        {cards.map((card) => (
          <Card key={card.url}>
            <CardTitle>{card.title}</CardTitle>
            <CardBody>
              <p>{card.description}</p>
            </CardBody>
            <CardActions>
              <Link to={card.url}>
                Ver mais
                <FiArrowRight />
              </Link>
            </CardActions>
          </Card>
        ))}
      </CardContainer>
    </Container>
  );
}
