import * as S from './styles';

function Additional(i) {
  const additionalInfo = {
    '1': 'GAMES',
    '2': 'GAMES + FILMES',
    '3': 'GAMES + FILMES + PLUS',
  };

  return <h1>{additionalInfo[i]}</h1>;
}

function Cards(props) {
  return (
    <S.Container
      background={props.background}
      width={props.width}
      height={props.height}
    >
      <S.Row color={props.color}>
        {props.better === true && (
          <>
            <S.BestFlat><S.IconStar /> Melhor Escolha</S.BestFlat>
          </>
        )}
        <h1>{props.service}</h1>
        <span>{props.speed}</span>
        <S.ContainerServices>
          <S.Services color={props.color}>
            <S.RowIcon><S.IconSpeedtest /></S.RowIcon>
            <span>Velocidade</span>
          </S.Services>
          <S.Services color={props.color}>
            <S.RowIcon><S.IconHandyman /></S.RowIcon>
            <span>Instalacao</span>
          </S.Services>
          <S.Services color={props.color}>
            <S.RowIcon><S.IconWifi /></S.RowIcon>
            <span>WIFI</span>
          </S.Services>
        </S.ContainerServices>
        <S.Includes color={props.color}>
          <span>Inclusos</span>
          {Additional(props.add)}
        </S.Includes>
        <S.Price fontPrice={props.fontPrice}>
          <h1>{props.value}</h1>
        </S.Price>
        <S.Button
          button={props.button}
          marginButton={props.marginButton}
          buttonDisplay={props.buttonDisplay}
          onClick={props.onClick}
        >Contrate Já</S.Button>
      </S.Row>
    </S.Container>
  )
}

export default Cards;