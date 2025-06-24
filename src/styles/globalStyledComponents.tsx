import styled from "styled-components";

export const PageContainer = styled.div`
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

export const ContentWrapper = styled.div`
  margin: 20px;
  padding-top: 85px; /* 65px header height + 20px extra space */
`;

export const GlobalText = styled.p`
  white-space: pre-wrap;
  line-height: 1;
  text-align: left;
`;

export const SectionTitle = styled.h2`
  font-weight: 800;
  font-size: 20px;
  text-align: left;
  margin: 50px 0 20px 0;
`;

export const PageTitle = styled.h1`
  font-weight: 800;
  font-size: 20px;
  text-align: left;
  margin: 50px 0 20px 0;
`;

export const SubsectionTitle = styled.h2`
  font-size: 16px;
  font-weight: 600;
  margin-top: 30px;
`;
