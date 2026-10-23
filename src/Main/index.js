import { useState } from 'react';

import AddTaskButton from '../components/AddTaskButton';
import DeleteConfirmModal from '../components/DeleteConfirmModal';
import Header from '../components/Header';
import Tasks from '../components/Tasks';
import { Container } from './styles';

import NewTaskModal from '../components/NewTaskModal';
import { tasks as mocks } from '../mocks/tasks';

export default function Main() {
  const [tasks, setTasks] = useState(mocks);
  const [isDeleteConfirmModalVisible, setIsDeleteCofirmModalVisible] = useState(false);
  const [isNewTaskModalVisible, setIsNewTaskModalVisible] = useState(false);

  function handleChangeTask(task) {
    alert(`{
        id: ${task.id},
        title: ${task.title},
        description: ${task.description}
      }`);
  }

  function handleDeleteTask(id) {
    setIsDeleteCofirmModalVisible(true);
  }

  function handleConfirmDeleteTask() {
    //Excluir a tarefa
    setIsDeleteCofirmModalVisible(false);
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

      <AddTaskButton onPress={() => setIsNewTaskModalVisible(true)} />

      <DeleteConfirmModal
        visible={isDeleteConfirmModalVisible}
        onClose={() => setIsDeleteCofirmModalVisible(false)}
        onConfirm={handleConfirmDeleteTask}
      />

      <NewTaskModal
        visible={isNewTaskModalVisible}
        onClose={() => setIsNewTaskModalVisible(false)}
      />
    </Container>
  );
}