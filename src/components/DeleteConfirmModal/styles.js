import styled from 'styled-components/native';

export const Overlay = styled.View`
  background-color: rgba(0,0,0, 0.6);
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 24px;
`;

export const Body = styled.View`
  background-color: #fff;
  width: 100%;
  padding: 24px;
  border-radius: 8px;
`;

export const Actions = styled.View`
  margin-top: 24px;
  flex-direction: row;
  justify-content: space-around;
`;