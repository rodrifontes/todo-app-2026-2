import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
`;

export const CenteredContainer = styled.View`
  margin-top: 100px;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;