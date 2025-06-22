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
  border-radius: 12px; /* Reduced radius for smaller screens */
  padding: 8px 12px; /* Adjusted padding */
  margin-bottom: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease;
  text-align: left;

  @media (max-width: 390px) {
    padding: 6px 10px;
    border-radius: 10px;
    margin-bottom: 6px;
  }
`;

export const CardHeader = styled.div`
  margin-bottom: 6px;

  h3 {
    margin: 0;
    font-size: 15px; /* Slightly smaller base font */
    font-weight: 600;
    color: #172b4d;
    word-break: break-word;
    flex-grow: 1;
  }

  @media (max-width: 390px) {
    margin-bottom: 4px;

    h3 {
      font-size: 14px;
    }
  }
`;

export const CardContent = styled.div`
  p {
    margin: 0 0 10px 0;
    color: #666;
    font-size: 13px; /* Adjusted font size */
    line-height: 1.4;
    word-break: break-word;
    text-align: left;
  }

  > div {
    display: flex;
    justify-content: flex-end;
    gap: 6px;
  }

  @media (max-width: 390px) {
    p {
      font-size: 12px;
      margin-bottom: 8px;
    }

    > div {
      gap: 4px;
    }
  }
`;

interface PriorityBadgeProps {
  $priority: Priority;
}

export const PriorityBadge = styled.span<PriorityBadgeProps>`
  padding: 3px 6px;
  border-radius: 10px;
  font-size: 11px; /* Smaller font for badge */
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
  margin-bottom: 6px;

  @media (max-width: 390px) {
    padding: 2px 5px;
    font-size: 10px;
    border-radius: 8px;
    margin-bottom: 4px;
  }
`;

export const EditButton = styled.button`
  background: none;
  border: none;
  color: rgb(91, 153, 219);
  cursor: pointer;
  font-size: 13px; 
  padding: 3px 6px;
  border-radius: 4px;
  transition: color 0.2s ease;

  &:hover {
    color: #0056b3;
    text-decoration: underline;
  }

  &:last-child {
    color: #dc3545;

    &:hover {
      color: rgb(204, 111, 120);
      text-decoration: underline;
    }
  }

  @media (max-width: 390px) {
    font-size: 12px;
    padding: 2px 5px;
  }
`;

export const EditForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 6px 0;

  @media (max-width: 390px) {
    gap: 8px;
    padding: 4px 0;
  }
`;

export const EditInput = styled.input`
  padding: 7px 10px;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  font-size: 13px;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #625AE8;
    box-shadow: 0 0 0 2px rgba(98, 90, 232, 0.2);
  }

  @media (max-width: 390px) {
    padding: 6px 8px;
    font-size: 12px;
    border-radius: 5px;
  }
`;

export const EditTextarea = styled.textarea`
  padding: 7px 10px;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  font-size: 13px; 
  width: 100%;
  min-height: 70px; 
  resize: vertical;
  box-sizing: border-box;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: #625AE8;
    box-shadow: 0 0 0 2px rgba(98, 90, 232, 0.2);
  }

  @media (max-width: 390px) {
    padding: 6px 8px;
    font-size: 12px;
    min-height: 60px;
    border-radius: 5px;
  }
`;

export const EditSelect = styled.select`
  padding: 7px 10px;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  font-size: 13px; 
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

  @media (max-width: 390px) {
    padding: 6px 8px;
    font-size: 12px;
    border-radius: 5px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 6px;
  margin-top: 6px;

  @media (max-width: 390px) {
    gap: 4px;
    margin-top: 4px;
  }
`;

export const SaveButton = styled.button`
  padding: 7px 14px;
  background-color: #625AE8;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #4f48d4;
  }

  @media (max-width: 390px) {
    padding: 6px 12px;
    font-size: 12px;
    border-radius: 5px;
  }
`;

export const CancelButton = styled.button`
  padding: 7px 14px;
  background-color: #f5f5f5;
  color: #666;
  border: none;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #e0e0e0;
  }

  @media (max-width: 390px) {
    padding: 6px 12px;
    font-size: 12px;
    border-radius: 5px;
  }
`;