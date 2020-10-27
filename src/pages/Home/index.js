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
  SkillsList,
  SkillsItem,
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
      description: "Entre em contato, mande um email ou mensagem.",
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
        <ProfilePicture src="https://avatars2.githubusercontent.com/u/26552270?s=460&u=e81c1b948fab91d4998d43cadbc76dd993ca316f&v=4" />
        <ProfileTitle color="#1a1a1a">
          <h1>Fullstack developer</h1>
        </ProfileTitle>
        <SkillsList>
          <SkillsItem>Python</SkillsItem>
          <SkillsItem>Node.js</SkillsItem>
          <SkillsItem>ReactJS</SkillsItem>
          <SkillsItem>React Native</SkillsItem>
        </SkillsList>
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
