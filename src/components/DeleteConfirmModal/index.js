import Button from '../Button';
import CustomModal from '../CustomModal';
import { Text } from '../Text';
import { Actions } from './styles';

export default function DeleteConfirmModal({ visible, onClose, onConfirm }) {
  return (
    <CustomModal visible={visible} onClose={onClose}>
      <Text size={18} weight={600}>Tem certeza que deseja remover a tarefa?</Text>
      <Text>Essa ação não podera ser desfeita</Text>

      <Actions>
        <Button onPress={onClose} primary={false}>Cancelar</Button>
        <Button onPress={onConfirm}>Confirmar</Button>
      </Actions>
    </CustomModal>
  );
}