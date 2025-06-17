
import React, { useState } from 'react';
import styled from 'styled-components';

interface AddColumnFormProps {
  onAdd: (title: string, color: string) => void;
  onCancel: () => void;
}

const FormContainer = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 16px;
  width: 250px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-right: 16px;
`;

const FormTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 16px;
  color: #333;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
`;

const ColorPickerContainer = styled.div`
  display: flex;
  margin-bottom: 16px;
  gap: 8px;
`;

const ColorOption = styled.div<{ color: string; selected: boolean }>`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  cursor: pointer;
  border: ${(props) => (props.selected ? '2px solid #333' : 'none')};
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
`;

const AddButton = styled(Button)`
  background-color: #5aac44;
  color: white;

  &:hover {
    background-color: #61bd4f;
  }
`;

const CancelButton = styled(Button)`
  background-color: #f4f5f7;
  color: #5e6c84;

  &:hover {
    background-color: #ebecf0;
  }
`;

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