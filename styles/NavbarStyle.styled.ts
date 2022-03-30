import styled from "styled-components";

export const NavbarStyle = styled.div`
  background-color: rgba(198, 212, 255);

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 15px;

    .logo {
      flex-shrink: 0;
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }

    .profile {
      display: flex;

      &__user-image {
        flex-shrink: 0;
        border: none;
        outline: none;
        width: 40px;
        height: 40px;
        background: gray;
        border-radius: 50%;
        overflow: hidden;
      }

      &__user-info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-left: 10px;

        p {
          color: rgba(44, 44, 44, 0.76);
        }
      }
    }

    .more__options {
      display: block;
      position: relative;
      align-items: center;
      align-self: center;

      button {
        border: none;
        background: transparent;
        outline: none;
        display: flex;
        cursor: pointer;

        span {
          margin-right: 5px;
        }
      }

      .dropdown {
        position: absolute;
        list-style-type: none;
        left: 0%;
        top: 100%;
        background: #087ca7;
        border-radius: 5px;
        overflow: hidden;
        color: #fff;
        cursor: pointer;
        z-index: 100;

        li {
          cursor: pointer;

          button {
            display: block;
            color: inherit;
            border: none;
            background: transparent;
            outline: none;

            a {
              text-decoration: none;
              padding: 0.5rem 1rem;
              color: inherit;
              display: block;
            }
          }

          &:hover {
            color: gray;
            background: rgba(44, 44, 44, 0.288);
          }
        }
      }
    }
  }

  @media (min-width: 576px) {
    nav {
      .logo {
        width: 50px;
        height: 50px;
      }

      .profile {
        &__user-image {
          width: 50px;
          height: 50px;
        }

        &__user-info {
          margin-left: 15px;
        }
      }
    }
  }
`;
