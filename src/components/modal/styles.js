import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  inset: 0;
  backdrop-filter: blur(20px);
  z-index: 4;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 120px;
`;
export const Row = styled.div`
  width: 350px;
  height: 350px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 16px;
  box-shadow: var(--shadow);
  padding: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
  position: relative;
`;
export const Logo = styled.img`
  width: 60px;
  position: absolute;
  top: 45px;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 80px;
`;
export const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 10px;
  padding: 5px 10px;
  width: 250px;
`;

export const Err = styled.span`
  font-size: 10px;
  text-align: center;
  margin-top: -8px;
  color: red;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  height: 35px;
  margin-top: 20px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.highlight};
  /* background: ${({ button, theme }) =>
    button ? theme.colors.secondary : theme.colors.primary}; */
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
`;
