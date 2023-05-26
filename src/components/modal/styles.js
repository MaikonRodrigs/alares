import styled from "styled-components";
import { CloseCircleOutline } from "@styled-icons/evaicons-outline/CloseCircleOutline";

export const Container = styled.div`
  position: fixed;
  inset: 0;
  backdrop-filter: blur(20px);
  z-index: 4;
  display: ${({ display }) => (display ? "flex" : "none")};
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
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
`;


export const RowFinish = styled.div`
  width: 300px;
  text-align: center;
  h1 {
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.primary};

    margin-bottom: 20px;
  }
`;

export const Message = styled.h1`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.primary};
  span {
    text-transform: none;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 400;
  }
`;

export const ContainerFinish = styled.div`
  position: fixed;
  flex-direction: column;
  inset: 0;
  backdrop-filter: blur(40px);
  z-index: 4;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 120px;
`;

export const IconCloseCircleOutline = styled(CloseCircleOutline)`
  position: absolute;
  bottom: 50px;
  width: 40px;
  color: red;
  cursor: pointer;
`;
