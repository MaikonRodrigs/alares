import { useContext, useState, useEffect } from 'react';
import { GlobalContext } from '@/hooks/useContext';

import * as S from './styles';

function Cart(props) {
  const { userDados } = useContext(GlobalContext);
  const [formDataArray, setFormDataArray] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem('AlaresUser');
    if (storedData) {
      setFormDataArray(JSON.parse(storedData));
    }
  }, [formDataArray, userDados]);

  function removeItem(index) {
    const updatedData = formDataArray.filter((item, idx) => idx !== index);
    setFormDataArray(updatedData);
    localStorage.setItem('AlaresUser', JSON.stringify(updatedData));
  };

  return (
    <S.Container display={props.display}>
      <S.Row>
        <S.FavoritesRow>
          <S.User>
            <h3>Olá, {formDataArray[0]?.nome ? formDataArray[0]?.nome : 'Visitante'}.</h3>
            <S.IconUserCircle />
          </S.User>
          <p>Seus pedidos:</p>
          <hr />
          {formDataArray.map((item, idx) => (
            <S.Flat key={idx}>
              <span>plano {item.service}</span>
              <S.IconTrash onClick={() => removeItem(idx)} />
            </S.Flat>
          ))}
          {formDataArray.length === 0 && (
            <h3>Nenhum item</h3>
          )}
        </S.FavoritesRow>
      </S.Row>
    </S.Container>
  );
}

export default Cart;
