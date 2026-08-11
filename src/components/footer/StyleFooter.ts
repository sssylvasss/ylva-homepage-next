import styled from "styled-components";

interface DarkModeProps {
  $isDark?: boolean;
}

export const Main = styled.footer<DarkModeProps>`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: ${({ $isDark }) => ($isDark ? "#1a1a1a" : "white")};
  margin-top: auto;
  margin-left: calc((-100vw + 100%) / 2);
  margin-right: calc((-100vw + 100%) / 2);
  padding-left: calc((100vw - 100%) / 2);
  padding-right: calc((100vw - 100%) / 2);
  transition: background-color 0.3s ease;
  box-sizing: border-box;
`;

export const BottomTextWrapper = styled.div<DarkModeProps>`
  width: 100%;
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid ${({ $isDark }) => ($isDark ? "#333" : "#eee")};
  transition: border-color 0.3s ease;
`;

export const Text = styled.p<DarkModeProps>`
  margin: 5px 0;
  font-size: 14px;
  color: ${({ $isDark }) => ($isDark ? "rgba(255, 255, 255, 0.8)" : "#333")};
  transition: color 0.3s ease;
`;
