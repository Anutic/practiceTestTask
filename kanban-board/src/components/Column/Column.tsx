import { useState } from 'react';
import { useDrop } from 'react-dnd';
import { useDispatch } from 'react-redux';
import { addCard, moveCard, updateCard, removeCard } from '../../store/slices/boardSlice';
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
  AddIcon
} from './styles';

interface ColumnProps {
  column: IColumn;
  onColorChange: (color: string) => void;
}

const Column = ({ column, onColorChange }: ColumnProps) => {
  const dispatch = useDispatch();
  const [showAddForm, setShowAddForm] = useState(false);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'CARD',
    drop: (item: { id: string; columnId: string }) => {
      dispatch(
        moveCard({
          sourceColumnId: item.columnId,
          targetColumnId: column.id,
          cardId: item.id,
        })
      );
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const setDropRef = (element: HTMLDivElement | null) => {
    drop(element);
  };

  const handleAddCard = (title: string, description: string, priority?: Priority) => {
    dispatch(addCard({
      columnId: column.id,
      card: { title, description, priority }
    }));
    setShowAddForm(false);
  };

  return (
    <ColumnContainer $isOver={isOver} ref={setDropRef}>
      <ColumnHeader $backgroundColor={column.color}>
        <Counter>{column.cards.length}</Counter> 
        <ColumnTitle>{column.title}</ColumnTitle>
        <AddIcon>+</AddIcon>
      </ColumnHeader>
      <CardsList>
        {column.cards.map((card) => (
          <Card
            key={card.id}
            card={card}
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