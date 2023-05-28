import styled from "styled-components";
import { Trash } from "@styled-icons/boxicons-solid/Trash";
import { Edit } from "@styled-icons/evaicons-solid/Edit";
import { CartCheckFill } from "@styled-icons/bootstrap/CartCheckFill";

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
export const Empty = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
  padding-bottom: 20px;
  color: ${({ theme }) => theme.colors.secondary};
`;
export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;
export const Row = styled.tr`
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:nth-child(even) {
    background-color: ${({ theme }) => theme.colors.section_two};
  }
`;
export const Cell = styled.td`
  padding: 18px;
  color: ${({ theme }) => theme.colors.text};
  span {
    color: ${({ theme }) => theme.colors.secondary};
  }
  width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: width 0.3s;
  &:first-child:hover,
  &:first-child + &:hover {
    width: 220px;
    cursor: copy;
  }
`;
export const IconsRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
export const IconTrash = styled(Trash)`
  color: ${({ theme }) => theme.colors.highlight};
  width: 20px;
  margin-right: 5px;
  cursor: pointer;
`;
export const IconEdit = styled(Edit)`
  color: ${({ theme }) => theme.colors.secondary};
  width: 20px;
  cursor: pointer;
`;
export const IconCartCheckFill = styled(CartCheckFill)`
  color: ${({ theme }) => theme.colors.secondary};
  margin-right: 5px;
  width: 20px;
  cursor: pointer;
`;
