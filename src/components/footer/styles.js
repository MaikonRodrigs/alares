import styled from "styled-components";
import { ReactLogo } from '@styled-icons/boxicons-logos/ReactLogo'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin-top: 60px;
  @media screen and (max-height: 768px) {
    display: none;
  }
`;
export const GitAvatar = styled.img`
  width: 20px;
  height: 2px;
  border-radius: 50%;
  margin-bottom: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.5s linear;
`;
export const GitUser = styled.span`
    display: contents;
  a {
    color: var(--white);
    text-decoration: none;
    font-size: 12px;
    &:hover {
      color: var(--dark);
    }
  }
`;

export const ReactIcon = styled(ReactLogo)`
  width: 40px;
  height: 40px;
  margin: 4px;
  color: var(--white);
`;
