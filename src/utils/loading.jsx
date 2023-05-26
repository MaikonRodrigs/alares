import styled, { keyframes } from "styled-components";
import { Spinner3 } from '@styled-icons/icomoon/Spinner3'

const BounceAnimation = keyframes`
  0% { margin-bottom: 0 }
  50% { margin-bottom: 1rem }
  100% {margin-bottom: 0 }
`;

const rotate = keyframes`
	0% {
    transform: rotate(0deg);
	}

	100% {
    transform: rotate(360deg);
	}
`;

const fadeIn = keyframes`
0% { opacity: 1}
/* 50% { opacity: 1; } */
100% { opacity: 0; background: transparent};
`;

const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 99;
  background-color: ${(props) => props.theme.colors.background};
  backdrop-filter: blur(2rem);
  animation: ${fadeIn} 4s linear both;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  `;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0;

  position: fixed;
  top: 30%;
  padding: 20px;
`;

export const Avatar = styled.img`
  border-radius: 999px;
  width: 90px;
  margin-right: 50px;
  cursor: progress;
  position: absolute;
  margin: 0 auto;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);

`;

const ColumnsDot = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Dot = styled.div`
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 50%;
  width: 0.5rem;
  height: 0.5rem;
  margin: 0 0.25rem;
  z-index: 10;

  backdrop-filter: blur(1rem);

  animation: ${BounceAnimation} 0.5s linear infinite;
  animation-delay: ${({ delay }) => `${delay}`};
`;

const SpinnerIcon = styled(Spinner3)`
  color: ${(props) => props.theme.colors.secondary};
  width: 30px;
  margin-bottom: 40px;
  animation: ${rotate} 1s linear infinite;
`;


export const LoadingIcons = () => {
  return (
    <Wrapper >
      <Dot delay="0.1s" />
      <Dot delay="0.2s" />
      <Dot delay="0.3s" />
    </Wrapper >
  )
}

export const LoadingPage = () => {
  const AvatarName = 'https://avatars.githubusercontent.com/u/70022577?v=4'

  return (
    <Container >
      <Avatar src={AvatarName} />
      <ColumnsDot>
        <Dot delay="0.1s" />
        <Dot delay="0.2s" />
        <Dot delay="0.3s" />
      </ColumnsDot>
    </Container >
  )
}

export const LoadingSpinner = () => {
  return (
    <Wrapper>
      <SpinnerIcon />
    </Wrapper>
  )
}