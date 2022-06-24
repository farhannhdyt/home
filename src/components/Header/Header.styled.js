import styled from "styled-components";

export const StyledHeader = styled.header`
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 0;

  ul {
    list-style: none;
    display: flex;
  }

  ul li {
    margin-right: 20px;
  }

  ul li a {
    text-decoration: none;
    color: #888;
    transition: 0.2s;
    font-weight: 500;
  }

  ul li a:hover {
    color: #fff;
  }

  @media screen and (max-width: 500px) {
    ul {
      justify-content: center;
    }
  }
`;
