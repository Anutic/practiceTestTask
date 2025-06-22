import React, { useState } from 'react';
import {
  FormContainer,
  FormTitle,
  FormInput,
  ColorPickerContainer,
  ColorOption,
  ButtonContainer,
  AddButton,
  CancelButton,
} from './add_col_styles';

interface AddColumnFormProps {
  onAdd: (title: string, color: string) => void;
  onCancel: () => void;
}

const DEFAULT_COLORS = [
  '#FF9B9B', 
  '#FFD6A5', 
  '#FDFFB6', 
  '#CAFFBF', 
  '#9BF6FF', 
  '#A0C4FF', 
  '#BDB2FF', 
  '#FFC6FF', 
];

const AddColumnForm: React.FC<AddColumnFormProps> = ({ onAdd, onCancel }) => {
  const [title, setTitle] = useState('');
  const [selectedColor, setSelectedColor] = useState(DEFAULT_COLORS[3]); 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onAdd(title.trim(), selectedColor);
      setTitle('');
    }
  };

  return (
    <FormContainer>
      <FormTitle>Add New Column</FormTitle>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Column title"
          autoFocus
          required
        />
        
        <ColorPickerContainer>
          {DEFAULT_COLORS.map((color) => (
            <ColorOption
              key={color}
              color={color}
              selected={color === selectedColor}
              onClick={() => setSelectedColor(color)}
            />
          ))}
        </ColorPickerContainer>

        <ButtonContainer>
          <AddButton type="submit">Add Column</AddButton>
          <CancelButton type="button" onClick={onCancel}>
            Cancel
          </CancelButton>
        </ButtonContainer>
      </form>
    </FormContainer>
  );
};

export default AddColumnForm;