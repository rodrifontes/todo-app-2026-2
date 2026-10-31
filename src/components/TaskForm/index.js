import { useState } from 'react';
import Button from '../Button';
import { Form, Input } from './styles';

export default function TaskForm({ onSave, buttonLabel = "Salvar", task }) {
  const [id, setId] = useState(task?.id ?? '');
  const [title, setTitle] = useState(task?.title ?? '');
  const [description, setDescription] = useState(task?.description ?? '');

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

      <Button
        onPress={() => onSave({ id, title, description })}
        disabled={title.length === 0 || description.length === 0}
      >
        {buttonLabel}
      </Button>
    </Form>
  );
}