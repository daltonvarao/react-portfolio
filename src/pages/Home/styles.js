import styled from "styled-components";

const mdWidth = 768;

export const Container = styled.div`
  padding: 2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  max-width: 1024px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;

  @media (min-width: ${mdWidth}px) {
    flex-direction: row;
    align-items: center;
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
    font-size: 30px;
    line-height: 36px;
  }

  h1 {
    font-size: 32px;
    font-weight: 700;
    color: #101411;
    line-height: 36px;
  }

  @media (min-width: ${mdWidth}px) {
    display: flex;
    align-items: center;
    margin: 0;

    h2 {
      font-size: 28px;
      color: #101411;
    }

    h1 {
      font-size: 30px;
      color: #101411;
    }
  }
`;

export const ProfileTitle = styled.div`
  margin-bottom: 32px;
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
  @media (min-width: ${mdWidth}px) {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const Card = styled.div`
  background-color: #fff;
  padding: 3rem 2.5rem;
  box-shadow: 0px 0px 70px rgba(0, 0, 0, 0.12);
  margin-bottom: 2rem;
  position: relative;
  height: 250px;
  max-height: 250px;

  @media (min-width: ${mdWidth}px) {
    max-width: 296px;
    margin-bottom: 0;
  }

  :after {
    content: "";
    height: 3px;
    background: #f0f0f5;
    position: absolute;
    width: 50px;
    top: 32%;
    left: 2.8rem;
  }

  :hover {
    :after {
      width: 90px;
      transition: width 1s;
    }
  }
`;

export const CardTitle = styled.h1`
  font-size: 22px;
  line-height: 32px;
  color: #101411;
`;

export const CardBody = styled.div`
  margin: 2rem 0;

  p {
    color: #979797;
    line-height: 20px;
  }
`;

export const CardActions = styled.div`
  a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #5a45ff;
    width: 90px;
    transition: width 0.7s;
  }

  a:hover {
    opacity: 0.7;
    width: 100%;
    transition: width 0.4s;
  }
`;
