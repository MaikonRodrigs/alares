import { useEffect, useState } from 'react';
import * as S from './styles';

function Admin() {
  const [savedData, setSavedData] = useState([]);

  function removeItem(index) {
    const updatedData = savedData.filter((item, idx) => idx !== index);
    setSavedData(updatedData);
    localStorage.setItem('AlaresUser', JSON.stringify(updatedData));
  };

  useEffect(() => {
    const AlaresUsers = localStorage.getItem('AlaresUser');
    if (AlaresUsers) {
      try {
        const parsedData = JSON.parse(AlaresUsers);
        setSavedData(parsedData);
      } catch (error) {
        console.error('Error', error);
      }
    }
  }, []);


  return (
    <S.Container>
      {savedData.length === 0 && <span>Ainda não existe nenhuma venda...</span>}
      {savedData.length >= 1 && (
        <>
          <h1>Ultimas vendas</h1>
          <S.Table>
            <tbody>
              {savedData.map((data, idx) => (
                <S.Row key={data.email}>
                  <S.Cell>
                    <span>Nome: </span>
                    {data.nome}
                  </S.Cell>
                  <S.Cell>
                    <span>E-mail: </span>
                    {data.email}
                  </S.Cell>
                  <S.Cell>
                    <span>Telefone: </span>
                    {data.telefone}
                  </S.Cell>
                  <S.Cell>
                    <span>Serviço contratado: </span>
                    {data.service}
                  </S.Cell>
                  <S.IconsRow>
                    <S.IconEdit />
                    <S.IconTrash onClick={() => removeItem(idx)} />
                  </S.IconsRow>
                </S.Row>
              ))}
            </tbody>
          </S.Table>
        </>
      )}
    </S.Container>
  );
}

export default Admin;
