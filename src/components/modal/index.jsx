/* eslint-disable no-case-declarations */
import { useState, useEffect } from 'react';
import * as S from './styles';
import Cards from '@/components/cards';

function Modal() {
  const LogoAlares = 'https://alaresinternet.com.br/wp-content/themes/alares/assets/_dist/images/template/vetor-1.svg'
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

  useEffect(() => {
    const storedData = localStorage.getItem('formData');
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  const validateField = (fieldName, value) => {
    let errorMessage = '';
    switch (fieldName) {
      case 'nome':
        errorMessage = value.length < 3 ? 'O nome deve ter pelo menos 3 caracteres' : '';
        break;
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        errorMessage = !emailRegex.test(value) ? 'O email deve ser válido' : '';
        break;
      case 'telefone':
        const telefoneRegex = /^\d{10}$/;
        errorMessage = !telefoneRegex.test(value) ? 'O telefone deve ter 10 dígitos numéricos' : '';
        break;
      default:
        break;
    }
    setErrors((prevErrors) => ({
      ...prevErrors,
      [fieldName]: errorMessage,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let hasErrors = false;
    Object.keys(formData).forEach((fieldName) => {
      const value = formData[fieldName];
      validateField(fieldName, value);
      if (errors[fieldName]) {
        hasErrors = true;
      }
    });

    localStorage.setItem('formData', JSON.stringify(formData));
  };

  const formatPhoneNumber = (value) => {
    const cleanedValue = value.replace(/\D/g, '');
    const match = cleanedValue.match(/^(\d{2})(\d{5})(\d{4})$/);
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return value;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const formattedValue = formatPhoneNumber(value);
    setFormData((prevData) => ({
      ...prevData,
      [name]: formattedValue,
    }));
  };

  const handleChangeNumber = (e) => {
    const { name, value } = e.target;
    const numericValue = value.replace(/\D/g, ''); // Remove caracteres não numéricos
    const formattedValue = formatPhoneNumber(numericValue);
    setFormData((prevData) => ({
      ...prevData,
      [name]: formattedValue,
    }));
  };



  return (
    <S.Container>
      <Cards
        service="200MB"
        speed="Mega Velocidade"
        color
        background={false}
        includes
        width
        height
        marginButton={false}
        add="1"
        value="199"
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
          {errors.nome && <S.Err>{errors.email}</S.Err>}
          <S.Input
            type="tel"
            name="telefone"
            value={formData.telefone}
            onChange={handleChangeNumber}
            placeholder="Insira seu telefone"
            pattern="\([0-9]{2}\) [0-9]{5}-[0-9]{4}$"
            maxLength="15"
          />
          {errors.nome && <S.Err>{errors.telefone}</S.Err>}
          <S.Button type="submit">Salvar</S.Button>
        </S.Form>
      </S.Row>
    </S.Container>
  )
}

export default Modal;