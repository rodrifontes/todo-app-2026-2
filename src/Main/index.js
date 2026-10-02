
import Header from '../components/Header';
import Tasks from '../components/Tasks';
import { Container } from './styles';

import { tasks } from '../mocks/tasks';

export default function Main() {
  return (
    <Container>
      <Header />
      <Tasks tasks={tasks} />
    </Container>
  );
}