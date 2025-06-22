import styled from 'styled-components';

export const BoardContainer = styled.div`
  display: flex;
  padding: 16px;
  gap: 16px;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  min-height: 100%;
  flex-direction: row;
  flex-wrap: nowrap; 
  overflow-x: auto; 
  box-sizing: border-box;

  & > * {
    flex: 1 1 280px; 
    max-width: 400px; 
  }

  @media (min-width: 1200px) {
    padding: 20px;
  }

  @media (max-width: 390px) {
    padding: 12px;
    gap: 12px;
    border-radius: 6px;
    flex-direction: column;
    overflow-x: visible;
    overflow-y: auto;
    & > * {
      flex: 1 1 100%; 
      max-width: 350px; 
    }
  }
`;

export const AddColumnButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #d9e6d9;
  border-radius: 16px;
  padding: 4px 10px;
  font-size: 13px;
  color: #fff;
  cursor: pointer;
  height: 34px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  line-height: 1;

  &:hover {
    background-color: #cce0cc;
  }

  @media (max-width: 390px) {
    padding: 3px 8px;
    border-radius: 12px;
    font-size: 12px;
    height: 32px;
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

export const PlusIcon = styled.div`
  font-size: 22px;
  font-weight: bold;
  color: white;

  @media (max-width: 390px) {
    font-size: 20px;
  }
`;