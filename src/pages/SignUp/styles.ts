import styled from "styled-components";
import { shade } from "polished";

import singUpBackground from "../../assets/signUp.png";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 500px;
  img {
    padding-top: 30px;
  }
  form {
    margin: 50px;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }
    /* a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(
      0.2,
      "#f4ede8"
    )};
      }
    } */
  }

  a {
    color: #f4ede8;
    display: block;
    margin-top: -15px;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, "#f4ede8")};
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${singUpBackground}) no-repeat center;
  background-size: cover;
`;
