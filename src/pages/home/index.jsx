import Cards from '@/components/cards'
import Modal from '@/components/modal'

import * as S from './styles'


function Home() {
  return (
    <>
    <Modal />
      <S.ContainerCard>
        <Cards
          service="200MB"
          speed="Mega Velocidade"
          color
          background={false}
          includes
          width
          height
          marginButton
          add="1"
          value="199"
          fontPrice
          buttonDisplay
        />
        <Cards
          service="400MB"
          speed="Ultra Velocidade"
          better
          background
          color={false}
          width={false}
          height={false}
          marginButton={false}
          add="2"
          value="399"
          fontPrice={false}
          buttonDisplay
        />
        <Cards
          service="1GB"
          speed="Mega Velocidade"
          background={false}
          color
          width
          height
          marginButton
          add="3"
          value="699"
          fontPrice
          buttonDisplay
          />
      </S.ContainerCard>
    </>
  );
}

export default Home;