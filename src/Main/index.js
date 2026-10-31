import { useEffect, useState } from 'react';
import { Image } from 'react-native';

import taskEmpty from '../assets/images/task.png';
import AddTaskButton from '../components/AddTaskButton';
import DeleteConfirmModal from '../components/DeleteConfirmModal';
import Header from '../components/Header';
import Tasks from '../components/Tasks';
import { CenteredContainer, Container } from './styles';

import EditTaskModal from '../components/EditTaskModal';
import NewTaskModal from '../components/NewTaskModal';

import { ActivityIndicator } from 'react-native';
import { Text } from '../components/Text';

import useTasksDatabase from '../database/useTasksDatabase';

export default function Main() {
  const [tasks, setTasks] = useState([]);
  const [isDeleteConfirmModalVisible, setIsDeleteCofirmModalVisible] = useState(false);
  const [isNewTaskModalVisible, setIsNewTaskModalVisible] = useState(false);
  const [isEditTaskModalVisible, setIsEditTaskModalVisible] = useState(false);
  const [taskBeingEdited, setTaskBeingEdited] = useState(false);
  const [taskBeingDeleted, setTaskBeingDeleted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const { create, show, update, remove, updateStatus } = useTasksDatabase();

  useEffect(() => {
    getTasks();
  }, []);

  async function getTasks() {
    setIsLoading(true);
    setTasks(await show());
    setIsLoading(false);
  }

  function handleChangeTask(task) {
    setTaskBeingEdited(task);
    setIsEditTaskModalVisible(true);
  }

  function handleDeleteTask(id) {
    setTaskBeingDeleted(id);
    setIsDeleteCofirmModalVisible(true);
  }

  async function handleConfirmDeleteTask() {
    await remove(taskBeingDeleted);
    getTasks();
    setIsDeleteCofirmModalVisible(false);
  }

  async function handleChangeStatusTask(id) {
    await updateStatus(id);
    getTasks();
  }

  async function handleNewTask(task) {
    await create(task);
    getTasks();
    setIsNewTaskModalVisible(false);
  }

  async function handleEditTask(task) {
    await update(task);
    getTasks();
    setIsEditTaskModalVisible(false);
  }

  return (
    <Container>
      <Header />

      {tasks.length > 0 && (
        <Tasks
          tasks={tasks}
          onChangeTask={handleChangeTask}
          onDeleteTask={handleDeleteTask}
          onChangeStatusTask={handleChangeStatusTask}
        />
      )}

      {tasks.length === 0 && !isLoading && (
        <CenteredContainer>
          <Image source={taskEmpty} style={{ width: 200, height: 200 }} />
          <Text weight={600} size={20}>Sem Tarefas</Text>
          <Text opacity={0.5}>Não há tarefas a serem visualizadas.</Text>
        </CenteredContainer>
      )}

      {isLoading && (
        <CenteredContainer>
          <ActivityIndicator size={'large'} color="#999" />
        </CenteredContainer>
      )}

      <AddTaskButton onPress={() => setIsNewTaskModalVisible(true)} />

      <DeleteConfirmModal
        visible={isDeleteConfirmModalVisible}
        onClose={() => setIsDeleteCofirmModalVisible(false)}
        onConfirm={handleConfirmDeleteTask}
      />

      <NewTaskModal
        visible={isNewTaskModalVisible}
        onClose={() => setIsNewTaskModalVisible(false)}
        onSave={handleNewTask}
      />

      <EditTaskModal
        visible={isEditTaskModalVisible}
        onClose={() => setIsEditTaskModalVisible(false)}
        onSave={handleEditTask}
        task={taskBeingEdited}
      />
    </Container>
  );
}