import { Text } from '../Text';

import { Container } from './styles';

export default function Button({ children, onPress }) {
  return (
    <Container onPress={onPress}>
      <Text>{children}</Text>
    </Container>
  );
}