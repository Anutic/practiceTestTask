import styled from 'styled-components';

export const FormContainer = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 14px;
  width: 100px; 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-right: 14px; 

  @media (max-width: 390px) {
    width: 100%; 
    padding: 12px;
    border-radius: 6px;
    margin-right: 8px;
  }
`;

export const FormTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 12px; 
  color: #333;
  font-size: 16px; 

  @media (max-width: 390px) {
    margin-bottom: 10px;
    font-size: 15px;
  }
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 7px 10px; 
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 13px; 
  box-sizing: border-box;

  @media (max-width: 390px) {
    padding: 6px 8px;
    margin-bottom: 8px;
    font-size: 12px;
    border-radius: 3px;
  }
`;

export const ColorPickerContainer = styled.div`
  display: flex;
  margin-bottom: 12px; 
  gap: 6px; 

  @media (max-width: 390px) {
    margin-bottom: 10px;
    gap: 4px;
    flex-wrap: wrap; 
  }
`;

export const ColorOption = styled.div<{ color: string; selected: boolean }>`
  width: 28px; /* Slightly smaller */
  height: 28px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  cursor: pointer;
  border: ${(props) => (props.selected ? '2px solid #333' : 'none')};

  @media (max-width: 390px) {
    width: 24px;
    height: 24px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px; 

  @media (max-width: 390px) {
    gap: 6px;
  }
`;

export const Button = styled.button`
  padding: 7px 14px; 
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 13px; 

  @media (max-width: 390px) {
    padding: 6px 12px;
    font-size: 12px;
    border-radius: 3px;
  }
`;

export const AddButton = styled(Button)`
  background-color: #5aac44;
  color: white;

  &:hover {
    background-color: #61bd4f;
  }
`;

export const CancelButton = styled(Button)`
  background-color: #f4f5f7;
  color: #5e6c84;

  &:hover {
    background-color: #ebecf0;
  }
`;