import styled from "styled-components";

const mdWidth = 768;

export const Container = styled.div`
  padding: 2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  max-width: 1024px;
  margin: 0 auto;

  @media (min-width: ${mdWidth}px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 4rem;
  }
`;

export const ProfileContainer = styled.div`
  margin: 5rem 0;
  flex-direction: column;
  justify-content: center;

  h2 {
    font-weight: 400;
    color: #101411;
    font-size: 26px;
    line-height: 36px;
  }

  h1 {
    font-size: 28px;
    font-weight: 700;
    color: #101411;
    line-height: 36px;
  }

  @media (min-width: ${mdWidth}px) {
    display: flex;
    align-items: center;
    margin: 0;

    h2 {
      font-size: 30px;
      color: #101411;
    }

    h1 {
      font-size: 32px;
      color: #101411;
    }
  }
`;

export const ProfileTitle = styled.div`
  margin-bottom: 24px;
`;

export const ProfilePicture = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 150px;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid #f0f0fd;
  background-image: url("https://avatars2.githubusercontent.com/u/26552270?s=460&u=e81c1b948fab91d4998d43cadbc76dd993ca316f&v=4");
`;

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`;

export const Card = styled.div`
  display: flex;
  background-color: #fff;
  padding: 2rem;
  box-shadow: 0px 0px 70px rgba(0, 0, 0, 0.12);
  margin-bottom: 2rem;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  align-self: center;
  cursor: pointer;

  div {
    display: flex;
    align-items: center;
  }

  @media (min-width: ${mdWidth}px) {
    margin-bottom: 0;
    width: 380px;
  }

  svg.chevron {
    transition: transform 0.5s;
  }

  :hover {
    box-shadow: 0px 0px 90px rgba(0, 0, 0, 0.14);

    svg.chevron {
      transform: rotate(90deg);
      transition: transform 0.5s;
    }
  }
`;

export const CardText = styled.h1`
  font-size: 26px;
  color: #101411;
  font-weight: bold;
  margin-left: 32px;
`;
