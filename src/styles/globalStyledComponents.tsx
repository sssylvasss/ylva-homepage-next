import styled from "styled-components";

export const Main = styled.div`
  width: 90%;
  max-width: 2000px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  @media (min-width: 820px) {
  }
`;

export const MainWrapper = styled.div`
  margin: 20px;
`;

export const TextP = styled.p`
  white-space: pre-wrap;
  line-height: 1;
  text-align: left;
`;
export const TitleH2 = styled.h2`
  font-weight: 800;
  font-size: 20px;
  text-align: left;
  margin: 50px 0 20px 0;
`;
export const TitleH1 = styled.h1`
  font-weight: 800;
  font-size: 20px;
  text-align: left;
  margin: 50px 0 20px 0;
`;

export const HeaderH2 = styled.h2`
  font-size: 16px;
  font-weight: 600;
  margin-top: 30px;
`;
