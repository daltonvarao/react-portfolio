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
    color: #f8f8f2;
    font-size: 30px;
    line-height: 36px;
  }

  h1 {
    font-size: 32px;
    font-weight: 700;
    color: #f8f8f2;
    line-height: 36px;
  }

  @media (min-width: ${mdWidth}px) {
    display: flex;
    align-items: center;
    margin: 0;

    h2 {
      font-size: 28px;
      color: #f8f8f2;
    }

    h1 {
      font-size: 30px;
      color: #f8f8f2;
    }
  }
`;

export const ProfileTitle = styled.div`
  color: ${(props) => props.color};

  h2 {
    color: #f8f8f2;
  }
`;

export const ProfilePicture = styled.img`
  width: 320px;
  height: 320px;
  border-radius: 160px;
  border: 1px solid #e1e4e8;
  margin: 32px 0;
`;

export const SkillsList = styled.ul`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 1rem;
  color: #6272a4;

  li:first-child {
    list-style-type: none;
  }
`;

export const SkillsItem = styled.li``;

export const CardContainer = styled.div`
  @media (min-width: ${mdWidth}px) {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const Card = styled.div`
  background-color: #44475a;
  padding: 3rem 2.5rem;
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.12);
  margin-bottom: 2rem;
  position: relative;
  height: 250px;
  max-height: 250px;
  border-radius: 16px;

  @media (min-width: ${mdWidth}px) {
    max-width: 296px;
    margin-bottom: 0;
  }

  :after {
    content: "";
    height: 3px;
    background: #c0c0c5;
    position: absolute;
    width: 50px;
    top: 32%;
    left: 2.8rem;
    transition: width 1s;
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
  color: #f8f8f2;
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
    color: #50fa7b;
    width: 90px;
    transition: width 0.7s;
  }

  a:hover {
    opacity: 0.7;
    width: 100%;
    transition: width 0.4s;
  }
`;
