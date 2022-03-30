import styled from "styled-components";
import { Container } from "./Container.styled";

export const ProfileStyle = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 4rem;
  padding-bottom: 2rem;
  height: 100%;

  .profile {
    width: max-content;
    margin: 0 auto;

    &__user-image {
      margin: auto;
      border: none;
      outline: none;
      width: 250px;
      height: 250px;
      background: yellow;
      border-radius: 50%;
      -webkit-box-shadow: 1px 1px 24px -10px rgba(26, 19, 26, 0.93);
      -moz-box-shadow: 1px 1px 24px -10px rgba(26, 19, 26, 0.93);
      box-shadow: 1px 1px 24px -10px rgba(26, 19, 26, 0.93);
      overflow: hidden;
    }

    &__user-info {
      text-align: center;
      margin-top: 50px;

      h4,
      h5 {
        margin-top: 10px;
      }
    }
  }
`;
