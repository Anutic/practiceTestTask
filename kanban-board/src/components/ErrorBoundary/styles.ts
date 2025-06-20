import styled from 'styled-components';

export const ErrorContainer = styled.div`
  position: fixed; /* Use fixed positioning to cover the entire viewport */
  top: 0;
  left: 0;
  width: 100vw; /* Full viewport width */
  height: 100vh; /* Full viewport height */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f8f8f8; /* Light background to match KanbanPage */
  text-align: center;
  padding: 20px;
  z-index: 1000; /* Ensure it appears above other elements */
  box-sizing: border-box; /* Prevent padding issues */
`;

export const ErrorBox = styled.div`
  background: #fff;
  border: 2px solid rgba(94, 103, 119, 0.1); /* Subtle border to frame the error */
  border-radius: 8px;
  padding: 30px;
  max-width: 500px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Consistent with KanbanPage shadow */
`;

export const ErrorTitle = styled.h2`
  font-size: 24px;
  color: #333; /* Matches KanbanPage Title color */
  margin: 0 0 10px;
`;

export const ErrorMessage = styled.p`
  font-size: 16px;
  color: #666; /* Matches KanbanPage button color */
  margin: 0 0 20px;
`;

export const RetryButton = styled.button`
  background: rgb(238, 238, 238); /* Matches KanbanPage AddButton */
  color: #666;
  border: 2px solid rgba(94, 103, 119, 0.1);
  border-radius: 8px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: background 0.2s;
  &:hover {
    background: rgb(225, 235, 250); /* Matches KanbanPage AddButton hover */
  }
`;