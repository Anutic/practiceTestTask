import { useState } from 'react';
import { useDragAndDrop } from '../../hooks/useDragAndDrop';
import type { ICard, Priority } from '../../types/board';
import { CardContainer, CardHeader, CardContent, PriorityBadge, EditButton, EditForm, EditInput, EditSelect, EditTextarea, ButtonGroup, SaveButton, CancelButton } from './styles.tsx';

interface CardProps {
  card: ICard;
  columnId: string;
  onEdit: (updatedCard: ICard) => void;
  onDelete: () => void;
}

const Card = ({ card, columnId, onEdit, onDelete }: CardProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState(card);

  const { ref, isDragging } = useDragAndDrop<HTMLDivElement>('CARD', {
    id: card.id,
    columnId,
  });

  const handleSave = () => {
    onEdit(editData);
    setIsEditing(false);
  };

  return (
    <CardContainer ref={ref} $isDragging={isDragging}>
        {isEditing ? (
        <EditForm>
          <EditInput
            value={editData.title}
            onChange={(e) => setEditData({ ...editData, title: e.target.value })}
            placeholder="Title"
          />
          <EditTextarea
            value={editData.description}
            onChange={(e) => setEditData({ ...editData, description: e.target.value })}
            placeholder="Description"
          />
          <EditSelect
            value={editData.priority}
            onChange={(e) => setEditData({ ...editData, priority: e.target.value as Priority })}
          >
            <option value="">No priority</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </EditSelect>
          <ButtonGroup>
            <SaveButton onClick={handleSave}>Save</SaveButton>
            <CancelButton onClick={() => setIsEditing(false)}>Cancel</CancelButton>
          </ButtonGroup>
        </EditForm>
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