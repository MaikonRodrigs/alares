import styled from "styled-components";

export const Container = styled.div`
  display: ${({ display }) => (display ? "flex" : "none")};
  position: relative;
`;
export const Row = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  width: 200px;
  height: 170px;
  position: absolute;
  z-index: 10;
  top: 30px;
  left: -110px;
  box-shadow: var(--shadow);
`;
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 10px;
`;
export const Input = styled.input`
    padding: 10px;
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    border-radius: 4px;
    color: ${({ theme }) => theme.colors.text};
`;
export const Button = styled.button`
    background-color: ${({ theme }) => theme.colors.secondary}; 
    color: ${({ theme }) => theme.colors.text};
    padding: 10px 0;
    border-radius: 4px;
    cursor: pointer;
`;
