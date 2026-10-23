import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  background-color: ${({ primary }) => primary ? '#FA824C' : '#FFF'};
  padding: 14px 24px;
  border-radius: 12px;
  border-width: 1px;
  border-color: #FA824C;
  align-items: center;
  justify-content: center;
`;