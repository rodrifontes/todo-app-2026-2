import { useState } from 'react';
import Button from '../Button';
import { Form, Input } from './styles';

export default function TaskForm({ onSave, buttonLabel = "Salvar" }) {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

  return (
    <Form>
      <Input
        placeholder="Título"
        value={title}
        onChangeText={setTitle}
      />

      <Input
        placeholder="Descrição"
        value={description}
        onChangeText={setDescription}
      />

      <Button onPress={() => onSave({ title, description })}>
        {buttonLabel}
      </Button>
    </Form>
  );
}