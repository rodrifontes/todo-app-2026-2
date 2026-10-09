import { Modal } from 'react-native';
import Button from '../Button';
import { Text } from '../Text';
import { Actions, Body, Overlay } from './styles';

export default function DeleteConfirmModal() {
  return (
    <Modal
      transparent
      statusBarTranslucent
    >
      <Overlay>
        <Body>
          <Text size={18} weight={600}>Tem certeza que deseja remover a tarefa?</Text>
          <Text>Essa ação não podera ser desfeita</Text>

          <Actions>
            <Button onPress={() => alert('Cancelar')}>Cancelar</Button>
            <Button onPress={() => alert('Confirmar')}>Confirmar</Button>
          </Actions>
        </Body>
      </Overlay>
    </Modal>
  );
}