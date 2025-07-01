import styled from 'styled-components';

interface PageContainerProps {
  theme: {
    background: string;
    textColor: string;
  };
}

export const PageContainer = styled.div<PageContainerProps>`
  padding: 16px;
  width: 1245px;
  margin: 0 auto;
  background: ${(props) => props.theme.background};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 390px) {
    width: 390px;
    padding: 12px;
    border-radius: 6px;
    margin: 0 8px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;

  @media (max-width: 390px) {
    margin-bottom: 12px;
    flex-direction: row;
    gap: 8px;
  }
`;

export const Title = styled.h1<PageContainerProps>`
  font-size: 22px;
  color: ${(props) => props.theme.textColor};
  margin: 0;

  @media (max-width: 390px) {
    font-size: 18px;
  }
`;

export const AddButton = styled.button`
  background: rgb(238, 238, 238);
  color: #666;
  border: 2px solid rgba(94, 103, 119, 0.1);
  border-radius: 50%;
  padding: 4px 8px;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;

  &:hover {
    background: rgb(225, 235, 250);
  }

  @media (max-width: 390px) {
    padding: 3px 6px;
    font-size: 16px;
    width: 32px;
    height: 32px;
  }
`;

export const ThemeButton = styled.button`
  background: rgb(238, 238, 238);
  color: #666;
  border: 2px solid rgba(94, 103, 119, 0.1);
  border-radius: 4px;
  padding: 6px 12px;
  cursor: pointer;
  font-size: 14px;
  margin-right: 8px;

  &:hover {
    background: rgb(225, 235, 250);
  }

  @media (max-width: 390px) {
    padding: 4px 8px;
    font-size: 12px;
    margin-right: 4px;
  }
`;