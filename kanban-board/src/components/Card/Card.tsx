import { useState } from 'react';
import { useDrag } from 'react-dnd';
import type { ICard, Priority } from '../../types/board';
import { CardContainer, CardHeader, CardContent, PriorityBadge, EditButton } from './styles.tsx';

interface CardProps {
  card: ICard;
  onEdit: (updatedCard: ICard) => void;
  onDelete: () => void;
}

const Card = ({ card, onEdit, onDelete }: CardProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState(card);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'CARD',
    item: { id: card.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const setDragRef = (element: HTMLDivElement | null) => {
    drag(element);
  };

  const handleSave = () => {
    onEdit(editData);
    setIsEditing(false);
  };

  return (
    <CardContainer ref={setDragRef} $isDragging={isDragging}>
      {isEditing ? (
        <div>
          <input
            value={editData.title}
            onChange={(e) => setEditData({ ...editData, title: e.target.value })}
          />
          <textarea
            value={editData.description}
            onChange={(e) => setEditData({ ...editData, description: e.target.value })}
          />
          <select
            value={editData.priority}
            onChange={(e) => setEditData({ ...editData, priority: e.target.value as Priority })}
          >
            <option value="">No priority</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <>
          <CardHeader>
            {card.priority && (
              <PriorityBadge $priority={card.priority}>
                {card.priority}
              </PriorityBadge>
            )}
            <h3>{card.title}</h3> 
          </CardHeader>
          <CardContent>
            <p>{card.description}</p>
            <div>
              <EditButton onClick={() => setIsEditing(true)}>Edit</EditButton>
              <EditButton onClick={onDelete}>Delete</EditButton>
            </div>
          </CardContent>
        </>
      )}
    </CardContainer>
  );
};

export default Card;