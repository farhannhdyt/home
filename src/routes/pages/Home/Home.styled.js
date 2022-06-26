import styled from "styled-components";

export const StyledBanner = styled.div`
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4)),
    url(bg.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 300px;
  border-radius: 6px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 2.5rem;
  }

  span {
    margin-top: 5px;
    font-size: 1.2rem;
  }
`;
