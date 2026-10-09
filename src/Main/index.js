
import AddTaskButton from '../components/AddTaskButton';
import DeleteConfirmModal from '../components/DeleteConfirmModal';
import Header from '../components/Header';
import Tasks from '../components/Tasks';
import { Container } from './styles';

import { tasks } from '../mocks/tasks';

export default function Main() {
  function handleChangeTask(task) {
    alert(`{
        id: ${task.id},
        title: ${task.title},
        description: ${task.description}
      }`);
  }

  function handleDeleteTask(id) {
    alert(`Excluir tarefa de id: ${id}`);
  }

  function handleChangeStatusTask(id) {
    alert(`Alterar Status tarefa de id: ${id}`);
  }

  return (
    <Container>
      <Header />

      <Tasks
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
        onChangeStatusTask={handleChangeStatusTask}
      />

      <AddTaskButton onPress={() => alert('Add Tarefa')} />

      <DeleteConfirmModal />
    </Container>
  );
}