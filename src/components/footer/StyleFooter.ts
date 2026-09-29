import styled from "styled-components";

export const Main = styled.footer`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: white;
  margin-top: auto;
  margin-left: calc((-100vw + 100%) / 2);
  margin-right: calc((-100vw + 100%) / 2);
  padding-left: calc((100vw - 100%) / 2);
  padding-right: calc((100vw - 100%) / 2);
  box-sizing: border-box;
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
