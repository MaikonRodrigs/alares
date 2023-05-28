import { useEffect, useState } from 'react';
import * as S from './styles';

function Admin() {
  const [savedData, setSavedData] = useState([]);
  const [doneData, setDoneData] = useState([]);

  function removeItem(index, isDone) {
    if (isDone) {
      const updatedData = doneData.filter((item, idx) => idx !== index);
      setDoneData(updatedData);
      localStorage.setItem('VendasConcluidas', JSON.stringify(updatedData));
    } else {
      const updatedData = savedData.filter((item, idx) => idx !== index);
      setSavedData(updatedData);
      localStorage.setItem('AlaresUser', JSON.stringify(updatedData));
    }
  }

  function moveItem(index) {
    const itemToMove = savedData[index];
    const updatedData = savedData.filter((_, idx) => idx !== index);
    setSavedData(updatedData);
    setDoneData((prevData) => [...prevData, itemToMove]);
    saveToLocalStorage(updatedData, [...doneData, itemToMove]);
  }

  function saveToLocalStorage(savedData, doneData) {
    localStorage.setItem('AlaresUser', JSON.stringify(savedData));
    localStorage.setItem('VendasConcluidas', JSON.stringify(doneData));
  }

  useEffect(() => {
    const AlaresUsers = localStorage.getItem('AlaresUser');
    const vendasConcluidas = localStorage.getItem('VendasConcluidas');

    if (AlaresUsers) {
      try {
        const parsedData = JSON.parse(AlaresUsers);
        setSavedData(parsedData);
      } catch (error) {
        console.error('Error', error);
      }
    }

    if (vendasConcluidas) {
      try {
        const parsedDoneData = JSON.parse(vendasConcluidas);
        setDoneData(parsedDoneData);
      } catch (error) {
        console.error('Error', error);
      }
    }
  }, []);

  return (
    <S.Container>
      {savedData.length === 0 && (
        <S.Empty>
          <span>Não existe nenhuma venda{doneData.length >= 1 && " pendente"}...</span>
        </S.Empty>
      )}
      {
        savedData.length >= 1 && (
          <>
            <h1>Últimas vendas</h1>
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
                      <span>Serviço: </span>
                      {data.service}
                    </S.Cell>
                    <S.IconsRow>
                      <S.IconEdit onClick={() => alert('Aqui voce editaria a venda :)')} />
                      <S.IconCartCheckFill onClick={() => moveItem(idx)}>Mover para concluídas</S.IconCartCheckFill>
                      <S.IconTrash onClick={() => removeItem(idx)} />
                    </S.IconsRow>
                  </S.Row>
                ))}
              </tbody>
            </S.Table>
          </>
        )
      }

      {
        doneData.length >= 1 && (
          <>
            <h1>Vendas concluídas</h1>
            <S.Table>
              <tbody>
                {doneData.map((data, idx) => (
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
                      <span>Serviço: </span>
                      {data.service}
                    </S.Cell>
                    <S.IconsRow>
                      <S.IconTrash onClick={() => removeItem(idx, true)} />
                    </S.IconsRow>
                  </S.Row>
                ))}
              </tbody>
            </S.Table>
          </>
        )
      }
    </S.Container >
  );
}

export default Admin;
