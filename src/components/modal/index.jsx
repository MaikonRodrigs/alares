/* eslint-disable no-case-declarations */
import { useState, useContext } from 'react';
import { GlobalContext } from '@/hooks/useContext';

import * as S from './styles';
import Cards from '@/components/cards';

function Modal(props) {
  const LogoAlares = 'https://alaresinternet.com.br/wp-content/themes/alares/assets/_dist/images/template/vetor-1.svg'
  const { isFinishSale, setIsFinishSale, setModal, userDados, setUserDados } = useContext(GlobalContext)
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
  });
  const [errors, setErrors] = useState({
    nome: '',
    email: '',
    telefone: '',
  });

  function validateField(fieldName, value) {
    let errorMessage = '';
    switch (fieldName) {
      case 'nome':
        errorMessage = value.trim().length < 3 ? 'O nome deve ter pelo menos 3 caracteres' : '';
        break;
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        errorMessage = !emailRegex.test(value) ? 'O email deve ser válido' : '';
        break;
      case 'telefone':
        const telefoneRegex = /^\(\d{2}\) \d{5}-\d{4}$/;
        errorMessage = !telefoneRegex.test(value) ? 'O telefone deve conter apenas números' : '';
        break;
      default:
        break;
    }
    setErrors((prevErrors) => ({
      ...prevErrors,
      [fieldName]: errorMessage,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { nome, email, telefone } = formData;
    setUserDados({ nome, email });

    let hasErrors = false;
    const updatedErrors = { ...errors }

    if (!nome.trim()) {
      updatedErrors.nome = 'O nome é obrigatório';
      hasErrors = true;
    } else {
      updatedErrors.nome = '';
    }
    if (!email.trim()) {
      updatedErrors.email = 'O email é obrigatório';
      hasErrors = true;
    } else {
      updatedErrors.email = '';
    }
    if (!telefone.trim()) {
      updatedErrors.telefone = 'O telefone é obrigatório';
      hasErrors = true;
    } else {
      updatedErrors.telefone = '';
    }

    Object.keys(formData).forEach((fieldName) => {
      const value = formData[fieldName];
      validateField(fieldName, value);
      if (updatedErrors[fieldName]) {
        hasErrors = true;
      }
    });

    if (!hasErrors) {
      const storedData = localStorage.getItem('AlaresUser');
      const formDataArray = storedData ? JSON.parse(storedData) : [];
      const formDataObject = {
        ...formData,
        service: props?.cardInfo?.service,
      };
      formDataArray.push(formDataObject);
      localStorage.setItem('AlaresUser', JSON.stringify(formDataArray));
      setFormData({ nome: '', email: '', telefone: '' });
      setIsFinishSale(true);
      setModal(false);
    } else {
      setErrors(updatedErrors);
    }
  }



  function formatPhoneNumber(value) {
    const cleanedValue = value.replace(/\D/g, '');
    const match = cleanedValue.match(/^(\d{2})(\d{5})(\d{4})$/);
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return value;
  };

  function handleChange(e) {
    const { name, value } = e.target;
    const formattedValue = formatPhoneNumber(value);
    setFormData((prevData) => ({
      ...prevData,
      [name]: formattedValue,
    }));
  };

  function handleChangeNumber(e) {
    const { name, value } = e.target;
    const numericValue = value.replace(/\D/g, '');
    const formattedValue = formatPhoneNumber(numericValue);
    setFormData((prevData) => ({
      ...prevData,
      [name]: formattedValue,
    }));
  };

  function handleClickFinish() {
    setIsFinishSale(false)
    setModal(false)
  }

  if (isFinishSale) {

    return (
      <S.ContainerFinish>
        <S.RowFinish>
          <h1>Obrigado {userDados?.nome}</h1>
          <S.Message>Em breve entraremos em contato pelo e-mail: <span>{userDados?.email}</span>  </S.Message>
          <S.Button onClick={() => handleClickFinish()}>Voltar</S.Button>
        </S.RowFinish >
      </S.ContainerFinish>
    );
  } else {

    return (
      <S.Container display={props.display}>
        <Cards
          service={props?.cardInfo?.service}
          speed={props.cardInfo?.speed}
          color
          background={false}
          includes
          width
          height
          marginButton={false}
          add={props?.cardInfo?.add}
          value={props?.cardInfo?.value}
          fontPrice
          buttonDisplay={false}
        />
        <S.Row>
          <S.Logo src={LogoAlares} alt="Alares-Logo" />
          <S.Form onSubmit={handleSubmit}>
            <S.Input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              placeholder='Insira seu nome'
            />
            {errors.nome && <S.Err>{errors.nome}</S.Err>}
            <S.Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder='Insira seu email'
            />
            {errors.email && <S.Err>{errors.email}</S.Err>}
            <S.Input
              type="tel"
              name="telefone"
              value={formData.telefone}
              onChange={handleChangeNumber}
              placeholder="Insira seu telefone"
              pattern="\([0-9]{2}\) [0-9]{5}-[0-9]{4}$"
              maxLength="15"
            />
            {errors.telefone && <S.Err>{errors.telefone}</S.Err>}
            <S.Button type="submit">Salvar</S.Button>
          </S.Form>
        </S.Row>
        <S.IconCloseCircleOutline onClick={() => setModal(false)} />
      </S.Container>
    )
  }
}

export default Modal;