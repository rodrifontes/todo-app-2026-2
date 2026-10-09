import { Text } from '../Text';
import { Container } from './styles';

export default function AddTaskButton({ onPress }) {
  return (
    <Container onPress={onPress}>
      <Text size={40} color="#fff">+</Text>
    </Container>
  );
}