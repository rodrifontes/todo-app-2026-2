import { FlatList, TouchableOpacity } from 'react-native';

import { Text } from '../Text';

import {
  Task,
  TaskActions,
  TaskDescription,
  TaskFooter,
  TaskHeader,
  TaskIcon,
  TaskStatus
} from './styles';

import remove from '../../assets/images/delete.png';
import edit from '../../assets/images/edit.png';
import pending from '../../assets/images/pending.png';

export default function Tasks({ tasks }) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={task => task.id}
      renderItem={({ item: task }) => (
        <Task>
          <TaskHeader>
            <Text size={18} weight={600}>{task.title}</Text>
          </TaskHeader>
          <TaskDescription>
            <Text opacity={0.5}>{task.description}</Text>
          </TaskDescription>
          <TaskFooter>
            <TaskStatus onPress={() => alert("Pressionado")}>
              <TaskIcon source={pending} />
              <Text color="#E620AE">Pendente</Text>
            </TaskStatus>

            <TaskActions>
              <TouchableOpacity onPress={() => alert("Alterar")}>
                <TaskIcon source={edit} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => alert("Excluir")}>
                <TaskIcon source={remove} />
              </TouchableOpacity>
            </TaskActions>
          </TaskFooter>
        </Task>
      )}
    />
  );
}