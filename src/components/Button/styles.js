import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  background-color: ${({ primary, disabled }) => disabled ? '#999' : primary ? '#FA824C' : '#FFF'};
  padding: 14px 24px;
  border-radius: 12px;
  border-width: 1px;
  border-color: ${({ disabled }) => disabled ? '#999' : '#FA824C'};
  align-items: center;
  justify-content: center;
`;