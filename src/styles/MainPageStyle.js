import styled from "styled-components";

export const Mainpage = styled.div`
  display: flex;
  justify-content: center;
`;

export const MainContainer = styled.main`
  flex: 1;
  overflow-y: auto;
  padding: 0.75rem;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, and Opera */
  }
`;
