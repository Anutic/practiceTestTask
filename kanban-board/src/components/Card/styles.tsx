import styled from 'styled-components';
import type { Priority } from '@/types/board';

interface CardContainerProps {
  $isDragging: boolean;
}

export const CardContainer = styled.div.attrs<CardContainerProps>(({ $isDragging }) => ({
  style: {
    opacity: $isDragging ? 0.5 : 1,
  },
}))<CardContainerProps>`
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 18px;
  padding: 5px 15px;
  margin-bottom: 2px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease;
  text-align: left; 
`;

export const CardHeader = styled.div`
  margin-bottom: 8px;

  h3 {
     margin: 0;
     font-size: 16px;
     font-weight: 600;
     color: #172b4d;
     word-break: break-word;
    flex-grow: 1;  
  }
`;

export const CardContent = styled.div`
  p {
    margin: 0 0 12px 0;
    color: #666;
    font-size: 14px;
    line-height: 1.5;
    word-break: break-word;
    text-align: left;
  }

  > div {
    display: flex;
    justify-content: flex-end;
    gap: 8px;
  }
`;

interface PriorityBadgeProps {
  $priority: Priority;
}

export const PriorityBadge = styled.span<PriorityBadgeProps>`
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
  color: #fff;
  text-transform: capitalize;
  background: ${(props) => {
    switch (props.$priority) {
      case 'Low': return '#E4F0E7';
      case 'Medium': return '#EEF2FF';
      case 'High': return '#fff1f2';
      default: return '#6c757d';
    }
  }};
  color: ${(props) => {
    switch (props.$priority) {
      case 'Low': return '#22c55e';
      case 'Medium': return '#625AE8';
      case 'High': return '#dc3545';
      default: return '#6c757d';
    }
  }};
  display: inline-block;
  margin-bottom: 8px;
`;

export const EditButton = styled.button`
  background: none;
  border: none;
  color:rgb(91, 153, 219);
  cursor: pointer;
  font-size: 14px;
  padding: 4px 8px;
  border-radius: 4px;
  transition: color 0.2s ease;

  &:hover {
    color: #0056b3;
    text-decoration: underline;
  }

  &:last-child {
    color: #dc3545;

    &:hover {
      color:rgb(204, 111, 120);
      text-decoration: underline;
    }
  }
`;

export const EditForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 8px 0;
`;

export const EditInput = styled.input`
  padding: 8px 12px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 14px;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #625AE8;
    box-shadow: 0 0 0 2px rgba(98, 90, 232, 0.2);
  }
`;

export const EditTextarea = styled.textarea`
  padding: 8px 12px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 14px;
  width: 100%;
  min-height: 80px;
  resize: vertical;
  box-sizing: border-box;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: #625AE8;
    box-shadow: 0 0 0 2px rgba(98, 90, 232, 0.2);
  }
`;

export const EditSelect = styled.select`
  padding: 8px 12px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 14px;
  width: 100%;
  box-sizing: border-box;
  background-color: white;
  cursor: pointer;
  color: #333;

  &:focus {
    outline: none;
    border-color: #625AE8;
    box-shadow: 0 0 0 2px rgba(98, 90, 232, 0.2);
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 8px;
`;

export const SaveButton = styled.button`
  padding: 8px 16px;
  background-color: #625AE8;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #4f48d4;
  }
`;

export const CancelButton = styled.button`
  padding: 8px 16px;
  background-color: #f5f5f5;
  color: #666;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #e0e0e0;
  }
`;