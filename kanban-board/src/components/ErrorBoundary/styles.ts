import styled from 'styled-components';

export const ErrorContainer = styled.div`
  position: fixed; 
  top: 0;
  left: 0;
  width: 100vw; 
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f8f8f8; 
  text-align: center;
  padding: 20px;
  z-index: 1000; 
  box-sizing: border-box; 
`;

export const ErrorBox = styled.div`
  background: #fff;
  border: 2px solid rgba(94, 103, 119, 0.1);
  border-radius: 8px;
  padding: 30px;
  max-width: 500px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
`;

export const ErrorTitle = styled.h2`
  font-size: 24px;
  color: #333; 
  margin: 0 0 10px;
`;

export const ErrorMessage = styled.p`
  font-size: 16px;
  color: #666; 
  margin: 0 0 20px;
`;

export const RetryButton = styled.button`
  background: rgb(238, 238, 238); 
  color: #666;
  border: 2px solid rgba(94, 103, 119, 0.1);
  border-radius: 8px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: background 0.2s;
  &:hover {
    background: rgb(225, 235, 250); 
  
`;