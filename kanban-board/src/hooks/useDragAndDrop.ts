import { useCallback, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { moveCard } from '../store/slices/boardSlice';

interface DragItem {
  cardId: string;
  sourceColumnId: string;
}

export const useNativeDragAndDrop = ({
  type,
  cardId,
  columnId,
  dropContainerRef,
}: {
  type: 'CARD';
  cardId?: string;
  columnId: string;
  dropContainerRef?: React.RefObject<HTMLDivElement | null>;
}) => {
  const dispatch = useDispatch();
  const dragRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const isOver = useRef(false);

  const handleDragStart = useCallback((e: DragEvent) => {
    if (!dragRef.current || !cardId) return;
    isDragging.current = true;
    const dragData: DragItem = { cardId, sourceColumnId: columnId };
    e.dataTransfer?.setData('application/json', JSON.stringify(dragData));
    e.dataTransfer!.effectAllowed = 'move';
    dragRef.current.style.opacity = '0.5';
  }, [cardId, columnId]);

  const handleDragEnter = useCallback((e: DragEvent) => {
    e.preventDefault();
    isOver.current = true;
    if (dropContainerRef?.current) {
      dropContainerRef.current.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
    }
  }, [dropContainerRef]);

  const handleDragOver = useCallback((e: DragEvent) => {
    e.preventDefault();
    e.dataTransfer!.dropEffect = 'move';
  }, []);

  const handleDragLeave = useCallback(() => {
    isOver.current = false;
    if (dropContainerRef?.current) {
      dropContainerRef.current.style.backgroundColor = '';
    }
  }, [dropContainerRef]);

  const handleDrop = useCallback(
    (e: DragEvent) => {
      e.preventDefault();
      isOver.current = false;
      if (dropContainerRef?.current) {
        dropContainerRef.current.style.backgroundColor = '';
      }

      const data = e.dataTransfer?.getData('application/json');
      if (!data) return;

      try {
        const draggedItem: DragItem = JSON.parse(data);
        if (type === 'CARD') {
          dispatch(
            moveCard({
              sourceColumnId: draggedItem.sourceColumnId,
              targetColumnId: columnId,
              cardId: draggedItem.cardId,
            })
          );
        }
      } catch (error) {
        console.error('Error parsing drag data:', error);
      }
    },
    [dispatch, type, columnId]
  );

  const handleDragEnd = useCallback(() => {
    isDragging.current = false;
    if (dragRef.current) {
      dragRef.current.style.opacity = '1';
    }
    if (dropContainerRef?.current) {
      dropContainerRef.current.style.backgroundColor = '';
    }
  }, [dropContainerRef]);

  useEffect(() => {
    const dragNode = dragRef.current;
    const dropNode = dropContainerRef?.current;

    if (dragNode) {
      dragNode.draggable = true;
      dragNode.addEventListener('dragstart', handleDragStart);
      dragNode.addEventListener('dragend', handleDragEnd);
    }

    if (dropNode) {
      dropNode.addEventListener('dragenter', handleDragEnter);
      dropNode.addEventListener('dragover', handleDragOver);
      dropNode.addEventListener('dragleave', handleDragLeave);
      dropNode.addEventListener('drop', handleDrop);
    }

    return () => {
      if (dragNode) {
        dragNode.removeEventListener('dragstart', handleDragStart);
        dragNode.removeEventListener('dragend', handleDragEnd);
      }
      if (dropNode) {
        dropNode.removeEventListener('dragenter', handleDragEnter);
        dropNode.removeEventListener('dragover', handleDragOver);
        dropNode.removeEventListener('dragleave', handleDragLeave);
        dropNode.removeEventListener('drop', handleDrop);
      }
    };
  }, [
    handleDragStart,
    handleDragEnd,
    handleDragEnter,
    handleDragOver,
    handleDragLeave,
    handleDrop,
    dropContainerRef,
  ]);

  return {
    dragRef,
    isDragging: isDragging.current,
    isOver: isOver.current,
  };
};