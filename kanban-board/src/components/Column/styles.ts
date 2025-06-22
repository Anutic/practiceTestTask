import styled from 'styled-components';

interface ColumnContainerProps {
  $isOver: boolean;
}

export const ColumnContainer = styled.div<ColumnContainerProps>`
  background: #f5f5f5;
  border-radius: 8px;
  padding: 10px; 
  width: 290px; 
   min-height: 350px; 
 
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    left: -16px; 
    top: 10px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }

  border: ${(props) => (props.$isOver ? '2px dashed rgb(124, 167, 224)' : 'none')};

  @media (max-width: 390px) {
    width: 100%; 
    padding: 8px;
    min-height: 300px;
    border-radius: 6px;

    &:before {
      left: -12px;
      top: 8px;
      width: 8px;
      height: 8px;
    }
  }
`;

interface ColumnHeaderProps {
  $backgroundColor: string;
}

export const ColumnHeader = styled.div<ColumnHeaderProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
  padding: 4px 10px;
  border-radius: 16px; 
  background: ${(props) => props.$backgroundColor};
  color: white;
  font-size: 13px; 

  @media (max-width: 390px) {
    padding: 3px 8px;
    border-radius: 12px;
    font-size: 12px;
    gap: 4px;
  }
`;

export const ColumnTitle = styled.h3`
  margin: 0;
  color: white;
  font-size: 15px; 
  font-weight: 600;
  flex-grow: 1;

  @media (max-width: 390px) {
    font-size: 14px;
  }
`;

export const CardsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex-grow: 1;

  @media (max-width: 390px) {
    gap: 4px;
  }
`;

export const AddCardButton = styled.button`
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 16px;
  padding: 6px 12px; 
  cursor: pointer;
  color: teal;
  font-size: 13px; 
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);

  &:hover {
    background: #f5faff;
  }

  @media (max-width: 390px) {
    padding: 5px 10px;
    border-radius: 12px;
    font-size: 12px;
  }
`;

export const AddIcon = styled.div`
  font-size: 20px;
  color: white;
  font-weight: bold;
  cursor: pointer;

  @media (max-width: 390px) {
    font-size: 18px;
  }
`;

export const AddCardFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 10px;
  background: #fff;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 8px;

  @media (max-width: 390px) {
    padding: 8px;
    gap: 6px;
    border-radius: 5px;
    margin-top: 6px;
  }
`;

export const FormInput = styled.input`
  padding: 7px 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 13px; 

  @media (max-width: 390px) {
    padding: 6px 8px;
    font-size: 12px;
    border-radius: 3px;
  }
`;

export const FormTextArea = styled.textarea`
  padding: 7px 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 13px; 
  min-height: 70px;
  resize: vertical;

  @media (max-width: 390px) {
    padding: 6px 8px;
    font-size: 12px;
    min-height: 60px;
    border-radius: 3px;
  }
`;

export const PrioritySelect = styled.select`
  padding: 7px 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 13px; 

  @media (max-width: 390px) {
    padding: 6px 8px;
    font-size: 12px;
    border-radius: 3px;
  }
`;

export const FormActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 6px;
  margin-top: 6px;

  button {
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 13px; 

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

  @media (max-width: 390px) {
    gap: 4px;
    margin-top: 4px;

    button {
      padding: 4px 8px;
      font-size: 12px;
      border-radius: 3px;
    }
  }
`;

export const Counter = styled.div`
  width: 22px; 
  height: 22px;
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 6px;
  font-weight: normal;
  color: #666;
  font-size: 12px; 

  @media (max-width: 390px) {
    width: 20px;
    height: 20px;
    margin-right: 4px;
    font-size: 11px;
  }
`;

export const DeleteButton = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 16px;
  cursor: pointer;
  font-size: 13px;
  background-color: #ff4d4f;
  color: white;
  margin-left: 6px;

  &:hover {
    background-color: #ff7875;
  }

  @media (max-width: 390px) {
    padding: 4px 8px;
    font-size: 12px;
    border-radius: 12px;
    margin-left: 4px;
  }
`;