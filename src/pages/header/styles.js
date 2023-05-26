import styled, { css } from "styled-components";
import Switch from "react-switch";
import { ShoppingCart } from "@styled-icons/entypo/ShoppingCart";
import { Admin } from "@styled-icons/remix-fill/Admin";

const ICONS = css`
  width: 20px;
  color: ${({ theme }) => theme.colors.secondary};
  cursor: pointer;
  &:hover {
    opacity: .7;
  }
`;
export const Container = styled.div`
  border-bottom: 1px solid #c2c2c2;
`;
export const Row = styled.div`
  height: 90px;
  width: 920px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;
export const Logo = styled.img`
  width: 40px;
  cursor: pointer;
  &:hover {
    opacity: .7;
  }
`;
export const RightRow = styled.div``;
export const Icons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
export const SwitchToggle = styled(Switch)``;
export const IconShoppingCart = styled(ShoppingCart)`
  ${ICONS}
`;
export const IconAdmin = styled(Admin)`
  ${ICONS}
  margin-left: 10px;
`;
