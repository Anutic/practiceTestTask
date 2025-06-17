import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useDragAndDrop } from '../../hooks/useDragAndDrop';
import { addCard, updateCard, removeCard, removeColumn } from '../../store/slices/boardSlice';
import type { IColumn, Priority } from '../../types/board';
import Card from '../Card/Card';
import { AddCardForm } from './AddCardForm';
import { 
  ColumnContainer, 
  ColumnHeader, 
  ColumnTitle, 
  CardsList,
  AddCardButton,
  Counter,
  AddIcon,
  DeleteButton
} from './styles';

interface ColumnProps {
  column: IColumn;
  onColorChange: (color: string) => void;
}

const Column = ({ column }: ColumnProps) => {
  const dispatch = useDispatch();
  const [showAddForm, setShowAddForm] = useState(false);
  const [isColumnActive, setIsColumnActive] = useState(false);

  const { ref, isOver } = useDragAndDrop<HTMLDivElement>('CARD', {
    id: column.id,
    columnId: column.id,
  });

  const handleAddCard = (title: string, description: string, priority?: Priority) => {
    dispatch(addCard({
      columnId: column.id,
      card: { title, description, priority }
    }));
    setShowAddForm(false);
  };

  const handleDeleteColumn = (e: React.MouseEvent) => {
    e.stopPropagation(); 
    dispatch(removeColumn(column.id));
    setIsColumnActive(false);
  };

  const handleColumnClick = () => {
    setIsColumnActive(true);
  };

  const handleColumnBlur = () => {
    setIsColumnActive(false);
  };

  return (
    <ColumnContainer 
      $isOver={isOver} 
      ref={ref} 
      onClick={handleColumnClick}
      onBlur={handleColumnBlur}
      tabIndex={0}
    >
      <ColumnHeader $backgroundColor={column.color}>
        <Counter>{column.cards.length}</Counter>
        <ColumnTitle>{column.title}</ColumnTitle>
        <AddIcon>+</AddIcon>
        {isColumnActive && (
          <DeleteButton onClick={handleDeleteColumn}>
            Delete
          </DeleteButton>
        )}
      </ColumnHeader>
      <CardsList>
        {column.cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            columnId={column.id}
            onEdit={(updatedCard) => dispatch(updateCard({ columnId: column.id, card: updatedCard }))}
            onDelete={() => dispatch(removeCard({ columnId: column.id, cardId: card.id }))}
          />
        ))}
      </CardsList>
      {showAddForm ? (
        <AddCardForm onAdd={handleAddCard} onCancel={() => setShowAddForm(false)} />
      ) : (
        <AddCardButton onClick={() => setShowAddForm(true)}>Add task...</AddCardButton>
      )}
    </ColumnContainer>
  );
};

export default Column;