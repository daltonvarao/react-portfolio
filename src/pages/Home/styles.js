import styled from "styled-components";

const mdWidth = 768;

let bgUrl =
  "https://images.unsplash.com/photo-1558470598-a5dda9640f68?ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80";

export const Container = styled.div`
  div.bg {
    background-image: url(${bgUrl});
    transform: rotate(180deg);
    background-repeat: no-repeat;
    background-position-x: -900px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }

  padding: 2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  max-width: 1024px;
  margin: 0 auto;

  @media (min-width: ${mdWidth}px) {
    div.bg {
      background-position-x: unset;
    }

    flex-direction: row;
    justify-content: space-between;
    padding: 4rem;
  }
`;

export const ProfileContainer = styled.div`
  margin: 5rem 0;

  h2 {
    font-weight: 400;
    color: #fff;
    font-size: 26px;
    line-height: 36px;
  }

  h1 {
    font-size: 28px;
    font-weight: 700;
    color: #fff;
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

export const ProfileTitle = styled.div``;

export const CardContainer = styled.div`
  @media (min-width: ${mdWidth}px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const Card = styled.div`
  background-color: #fff;
  padding: 3rem 2.5rem;
  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.08);
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

    /* transform: rotate(180deg); */
  }

  a:hover {
    opacity: 0.7;
    width: 100%;
    transition: width 0.4s;
  }
`;
