import styled from "styled-components";
import { Container } from "./Container.styled";

export const UsageStyle = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 2rem;
  height: 100%;

  .usage {
    width: 100%;
    margin: 0 auto;
    padding: 0 15px;

    &__info {
      margin-top: 30px;

      li {
        margin-top: 10px;
        font-size: 1.2rem;
      }
    }
  }

  @media (min-width: 768px) {
    .usage {
      text-align: center;

      &__info {
        list-style-type: none;
      }
    }
  }
`;
