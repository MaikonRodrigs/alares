import styled from "styled-components";
import { Trash } from "@styled-icons/boxicons-solid/Trash";
import { Edit } from "@styled-icons/evaicons-solid/Edit";

export const Container = styled.div`
  margin: 0 auto;
  width: 980px;
  padding: 30px;

  h1 {
    font-size: 24px;
    margin-bottom: 16px;
    color: ${({ theme }) => theme.colors.text};
  }
`;
export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;
export const Row = styled.tr`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  &:nth-child(even) {
    background-color: ${({ theme }) => theme.colors.text_secondary};
  }
`;
export const Cell = styled.td`
  padding: 18px;
  margin-left: -15px;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  span {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
export const IconTrash = styled(Trash)`
  color: ${({ theme }) => theme.colors.highlight};
  width: 20px;
  margin-right: 10px;
  cursor: pointer;
`;
export const IconEdit = styled(Edit)`
  color: ${({ theme }) => theme.colors.secondary};
  width: 25px;
  cursor: pointer;
`;
export const IconsRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
