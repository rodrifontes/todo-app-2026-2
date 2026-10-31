import { Modal } from 'react-native';
import { Body, Overlay } from './styles';

export default function CustomModal({ children, visible, onClose }) {
  return (
    <Modal
      transparent
      statusBarTranslucent
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}
    >
      <Overlay behavior='padding'>
        <Body>
          {children}
        </Body>
      </Overlay>
    </Modal>
  );
}