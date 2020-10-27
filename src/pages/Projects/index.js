import React from "react";

import {
  Container,
  Header,
  ProjectList,
  ProjectContainer,
  ProjectImage,
  ProjectBody,
  ProjectTitle,
  ProjectDescription,
  ProjectBottom,
  Button,
} from "./styles";

export default function Projects() {
  return (
    <Container>
      <Header>
        <h1>Projetos</h1>
      </Header>
      <ProjectList>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((_) => (
          <ProjectContainer>
            <ProjectImage src="https://1.bp.blogspot.com/-j0o8YoGGuVE/XKS9QVX4pvI/AAAAAAAAPoA/pOwzyiQbVqopwdNtKVUzXYxZ3iv2Rr6PwCLcBGAs/s1600/Missbeez%2Bappstore%2Boptimization%2Bstory.png" />
            <ProjectBody>
              <ProjectTitle>Hello</ProjectTitle>
              <ProjectDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                excepturi qui sint, consectetur tempore ipsum pariatur error
                magni nesciunt porro esse quam aliquam ad. Autem enim et
                sapiente deleniti maxime.
              </ProjectDescription>
            </ProjectBody>
            <ProjectBottom>
              <Button>Abrir</Button>
            </ProjectBottom>
          </ProjectContainer>
        ))}
      </ProjectList>
    </Container>
  );
}
