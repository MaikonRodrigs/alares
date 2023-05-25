import styled, { css } from "styled-components";
import { Speedtest } from "@styled-icons/simple-icons/Speedtest";
import { Handyman } from "@styled-icons/material-outlined/Handyman";
import { Wifi } from "@styled-icons/material-rounded/Wifi";
import { Star } from "@styled-icons/evaicons-solid/Star";

const ICONS = css`
  width: 30px;
  color: ${({ theme }) => theme.colors.highlight};
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

const COLORSTEXT = css`
  color: ${({ color, theme }) =>
    color ? theme.colors.secondary : theme.colors.primary};
`;

export const Container = styled.div`
  width: ${({ width }) => (width ? "290px" : "320px")};
  height: ${({ height }) => (height ? "430px" : "480px")};
  background-color: ${({ background, theme }) =>
    background ? theme.colors.secondary : theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.section_two};
  box-shadow: var(--text-shadow);
  border-radius: 20px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const BestFlat = styled.div`
  position: absolute;
  margin-top: -30px;
  background: ${({ theme }) => theme.colors.highlight};
  /* border: 1px solid ${({ theme }) => theme.colors.highlight}; */
  padding: 7px 20px;
  border-radius: 10px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Row = styled.div`
  margin-top: -10px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    ${COLORSTEXT}
    font-size: 70px;
  }
  span {
    ${COLORSTEXT}
    font-size: 12px;
    margin-top: -10px;
  }
`;

export const ContainerServices = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 30px;
  padding: 20px;
`;

export const Services = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  span {
    ${COLORSTEXT}
    margin-top: 5px;
    text-align: center;
  }
`;

export const RowIcon = styled.div`
  width: 50px;
  height: 50px;
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.highlight};
  border-radius: 10px;
  display: flex;
  justify-content: center;
`;

export const IconSpeedtest = styled(Speedtest)`
  ${ICONS}
`;
export const IconHandyman = styled(Handyman)`
  ${ICONS}
`;

export const IconWifi = styled(Wifi)`
  ${ICONS}
`;

export const IconStar = styled(Star)`
  width: 17px;
  color: ${({ theme }) => theme.colors.primary};
  margin-right: 10px;
`;

export const Includes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  span {
    font-size: 12px;
    text-align: center;
    color: ${({ theme }) => theme.colors.text_secondary};
    ${COLORSTEXT}
  }
  h1 {
    ${COLORSTEXT}
    font-size: 22px;
  }
`;

export const Price = styled.div`
  margin-bottom: 10px;
  h1 {
    font-size: ${({ fontPrice }) => (fontPrice ? "70px" : "110px")};
    position: relative;
    &::before {
      content: "R$";
      font-size: 18px;
      opacity: 0.7;
      position: absolute;
      top: 20px;
      left: -22px;
    }

    &::after {
      content: "/mês";
      font-size: 18px;
      opacity: 0.7;
      position: absolute;
      bottom: 15px;
      right: -35px;
    }
  }
`;
export const Button = styled.div`
  display: ${({ buttonDisplay }) => (buttonDisplay ? "flex" : "none")};

  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  height: 45px;
  margin-top: ${({ marginButton }) => (marginButton ? "" : "0px")};
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.highlight};
  /* background: ${({ button, theme }) =>
    button ? theme.colors.secondary : theme.colors.primary}; */
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
`;
