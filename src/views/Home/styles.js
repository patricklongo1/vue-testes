import styled from "vue-styled-components";

export const Container = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const Title = styled.h1`
  margin-top: 30px;
  color: #00bec4;
`;

export const CardsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
`;
