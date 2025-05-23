import styled from "styled-components";

export const Main = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: white;
  margin-top: auto;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const Icon = styled.img`
  width: 24px;
  height: 24px;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.7;
  }
`;

export const BottomTextWrapper = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid #eee;
`;

export const Text = styled.p`
  margin: 5px 0;
  font-size: 14px;
  color: #333;
`;
