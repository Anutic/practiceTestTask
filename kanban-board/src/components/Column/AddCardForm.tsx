import { useState } from 'react';
import type { Priority } from '../../types/board';
import { 
  AddCardFormContainer, 
  FormInput, 
  FormTextArea, 
  PrioritySelect,
  FormActions 
} from './styles';

interface AddCardFormProps {
  onAdd: (title: string, description: string, priority?: Priority) => void;
  onCancel: () => void;
}

export const AddCardForm = ({ onAdd, onCancel }: AddCardFormProps) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState<Priority | undefined>(undefined);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onAdd(title, description, priority);
    }
  };

  return (
    <AddCardFormContainer onSubmit={handleSubmit}>
      <FormInput
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Заголовок карточки"
        required
      />
      <FormTextArea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Описание"
      />
      <PrioritySelect
        value={priority || ''}
        onChange={(e) => setPriority(e.target.value as Priority || undefined)}
      >
        <option value="">Без приоритета</option>
        <option value="Low">Низкий</option>
        <option value="Medium">Средний</option>
        <option value="High">Высокий</option>
      </PrioritySelect>
      <FormActions>
        <button type="button" onClick={onCancel}>
          Отмена
        </button>
        <button type="submit">Добавить</button>
      </FormActions>
    </AddCardFormContainer>
  );
};