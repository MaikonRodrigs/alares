import { useContext, useState } from 'react';
import Cards from '@/components/cards'
import Modal from '@/components/modal'

import * as S from './styles'
import { GlobalContext } from '@/hooks/useContext';


function Home() {
  const { modal, setModal, setAdminArea, setCart } = useContext(GlobalContext)

  const [selectedCard, setSelectedCard] = useState(null);
  function standardClick(cardInfo) {
    setSelectedCard(cardInfo);
    setModal(true)
  }
  return (
    <S.Container onClick={() => { setAdminArea(false); setCart(false); }}>
      <Modal display={modal} cardInfo={selectedCard} />
      <S.ContainerCard>
        <Cards
          service="200MB"
          speed="+Velocidade"
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
          onClick={() => standardClick({
            service: "200MB",
            speed: "+Velocidade",
            add: '1',
            value: '199',
          })}
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
          onClick={() => standardClick({
            service: "400MB",
            speed: "Ultra Velocidade",
            add: '2',
            value: '399',
          })}
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
          onClick={() => standardClick({
            service: "1GB",
            speed: "Mega Velocidade",
            add: '3',
            value: '699',
          })}
        />
      </S.ContainerCard>
    </S.Container>

  );
}

export default Home;