import styled from "styled-components";
import { Trash } from "@styled-icons/boxicons-solid/Trash";
import { UserCircle } from "@styled-icons/boxicons-solid/UserCircle";

export const Container = styled.div`
  display: ${({ display }) => (display ? "flex" : "none")};
  position: relative;
`;

export const Row = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  width: 200px;
  height: auto;
  position: absolute;
  z-index: 10;
  top: 30px;
  left: -160px;
  box-shadow: var(--shadow);
  padding: 10px 0;
`;
export const FavoritesRow = styled.div`
  flex-direction: column;
  padding: 10px;
  p {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
  }
  h3 {
    font-size: 12px;
    margin-bottom: 12px;
  }
`;
export const Flat = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;
  span {
    color: ${({ theme }) => theme.colors.text};
    text-transform: uppercase;
  }
`;

export const IconTrash = styled(Trash)`
  color: ${({ theme }) => theme.colors.highlight};
  width: 20px;
  cursor: pointer;
`;

export const IconUserCircle = styled(UserCircle)`
  color: ${({ theme }) => theme.colors.text};
  width: 20px;
  margin-top: -10px;
  cursor: pointer;
`;

export const User = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.text};
  border-bottom: 1px solid ${({ theme }) => theme.colors.text};
  margin-bottom: 10px;
`;
