
import { useDrag, useDrop } from 'react-dnd';
import type { DropTargetMonitor } from 'react-dnd';
import { useDispatch } from 'react-redux';
import { moveCard } from '../store/slices/boardSlice';
import { useCallback, useRef } from 'react';

export const useDragAndDrop = <T extends HTMLElement>(
  type: 'CARD' | 'COLUMN',
  item: { id: string; columnId?: string },
  onDrop?: (item: any, monitor: DropTargetMonitor) => void
) => {
  const dispatch = useDispatch();
  const ref = useRef<T>(null);

  const [{ isDragging }, drag] = useDrag({
    type,
    item: () => ({ id: item.id, columnId: item.columnId }),
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [{ isOver }, drop] = useDrop({
    accept: type,
    drop: (draggedItem: any, monitor) => {
      if (type === 'CARD' && onDrop) {
        onDrop(draggedItem, monitor);
      } else if (type === 'CARD') {
      
        dispatch(
          moveCard({
            sourceColumnId: draggedItem.columnId,
            targetColumnId: item.columnId!,
            cardId: draggedItem.id,
          })
        );
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  const setRef = useCallback(
    (node: T | null) => {
      ref.current = node;
      drag(drop(node));
    },
    [drag, drop]
  );

  return {
    ref: setRef,
    isDragging,
    isOver,
  };
};