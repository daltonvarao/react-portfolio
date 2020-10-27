import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.header`
  width: 100%;
  padding: 2rem;
`;

export const ProjectList = styled.div`
  padding: 0 1.5rem;
  padding-bottom: 1rem;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 12px;
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and (min-width: 1280px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export const ProjectContainer = styled.div`
  border: 1px solid #f0f0fd;
  border-radius: 8px;
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    width: 312px;
    margin-bottom: 0;
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  border-bottom: 1px solid #f0f0fd;
`;

export const ProjectBody = styled.div`
  padding: 1.5rem;
`;

export const ProjectTitle = styled.h2`
  margin-bottom: 12px;
`;

export const ProjectDescription = styled.p`
  color: #676767;
  line-height: 20px;
`;

export const ProjectBottom = styled.div`
  padding: 0 1rem 1rem 0;
  text-align: right;
`;

export const Button = styled.button`
  font-size: 16px;
  padding: 12px;
  border: 0;
  cursor: pointer;
  background-color: transparent;
  border-radius: 4px;

  :hover {
    background-color: #f0f0fd;
  }
`;
