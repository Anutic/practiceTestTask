
import styled from 'styled-components';

interface ColumnContainerProps {
  $isOver: boolean; 

}

export const ColumnContainer = styled.div<ColumnContainerProps>`
  background: #f5f5f5;
  border-radius: 8px;
  padding: 12px;
  width: 280px;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    left: -20px;
    top: 12px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }

  border: ${(props) => (props.$isOver ? '2px dashed rgb(124, 167, 224)' : 'none')};
`;

interface ColumnHeaderProps {
  $backgroundColor: string;
}
export const ColumnHeader = styled.div<ColumnHeaderProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 4px 12px;
  border-radius: 20px;
  background: ${(props) => props.$backgroundColor};
  color: white; /* Ensure text is readable against the background */
  font-size: 14px;
`;


export const ColumnTitle = styled.h3`
  margin: 0;
  // color: ${(props) => props.color};
   color: white;
  font-size: 16px;
  font-weight: 600;
  flex-grow: 1;
`;

export const CardsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex-grow: 1;
`;

export const AddCardButton = styled.button`
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 20px;
  padding: 8px 16px;
  cursor: pointer;
  color: #1a73e8;
  font-size: 14px;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);

  &:hover {
    background: #f5faff;
  }
`;

export const AddIcon = styled.div`
  font-size: 25px;
  color: white;
  font-weight: bold;
  cursor: pointer; 
`;

export const AddCardFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 12px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 10px;
`;

export const FormInput = styled.input`
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
`;

export const FormTextArea = styled.textarea`
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  min-height: 80px;
  resize: vertical;
`;

export const PrioritySelect = styled.select`
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
`;

export const FormActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 8px;

  button {
    padding: 6px 12px;
    border-radius: 4px;
    cursor: pointer;
    
    &:first-child {
      background: #f5f5f5;
      border: 1px solid #ddd;
    }
    
    &:last-child {
      background: #2684ff;
      color: white;
      border: none;
    }
  }


`;


export const Counter = styled.div`
  width: 24px;
  height: 24px;
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  font-weight: normal;
  color: #666;
`;

export const DeleteButton = styled.button`
  padding: 6px 12px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 14px;
  background-color: #ff4d4f;
  color: white;
  margin-left: 8px;

  &:hover {
    background-color: #ff7875;
  }
`;