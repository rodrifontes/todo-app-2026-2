import { Text } from '../Text';

import { Container } from './styles';

export default function Button({ children, onPress, primary = true, disabled }) {
  return (
    <Container onPress={onPress} primary={primary} disabled={disabled}>
      <Text color={primary ? '#fff' : '#333'}>{children}</Text>
    </Container>
  );
}