import styled from "styled-components";
import { Container } from "./Container.styled";

export const HomeStyle = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 2rem;
  padding-bottom: 2rem;
  height: 100%;
  max-height: 100%;

  .wrapper {
    flex-grow: 1;
    overflow: scroll;

    .received__msg::after {
      content: "";
      position: absolute;
      top: 0%;
      left: 100%;
      margin-left: -20px;
      border-width: 20px;
      border-style: solid;
      border-color: #555 transparent transparent transparent;
    }

    .received__msg {
      width: 70%;
      position: relative;
      background-color: #555;
      color: #fff;
      border-radius: 6px 20px 6px 6px;
      margin: 1rem 2rem 1rem auto;
      padding: 0.5rem;
      line-height: 25px;
      transition: opacity 0.3s;

      &-time {
        display: flex;
        justify-content: space-between;
        font-size: 0.8rem;
        color: rgba(160, 158, 158, 0.873);

        svg {
          width: 15px;
          height: auto;
          margin: 0 0 -3px 5px;
        }

        button {
          border: 0;
          outline: 0;
          background: transparent;
          color: inherit;
          cursor: pointer;

          &:hover {
            color: rgba(189, 189, 189, 1);
          }
        }
      }
    }

    .received__msg::first-letter {
      text-transform: capitalize;
    }

    h3 {
      text-align: center;
      padding: 1rem;
      font-size: 1rem;
    }
  }

  .input__wrapper {
    padding: 0.5rem 0;
    display: flex;
    width: 100%;

    input {
      font-size: 1.3rem;
      border-radius: 10px;
      border-radius: 10px;
      outline: none;
      color: gray;
    }

    .input-field {
      padding: 0.7rem 1rem;
      background: #d9d9d9;
      border: 0;
      width: 80%;
      font-size: 1.3rem;
    }

    .submit {
      outline: none;
      border: 1px solid gray;
      background: rgba(44, 44, 44, 0.288);
      margin-left: 20px;
      padding: 0.5rem 1rem;
      border-radius: 10px;
      flex-grow: 1;
      transition: all 0.1s ease-in;
      color: #000;

      &:hover {
        transform: scale(0.99);
        background: #d9d9d5;
      }
    }
  }

  @media (min-width: 576px) {
    .wrapper {
      h3 {
        font-size: 1.5rem;
      }

      .received__msg,
      .sent__msg {
        padding: 1rem;
      }
    }

    .input__wrapper {
      margin-top: 5px;
      padding: 0.5rem 1rem;

      .input-field {
        width: 90%;
        padding: 1rem 2rem;
      }
    }
  }
`;
