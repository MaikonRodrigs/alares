import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '@/hooks/useContext';

import * as S from './styles';

function LoginAdmin(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({ name: false, password: false });
  const { setAuthenticated, setAdminArea } = useContext(GlobalContext)
  const navigate = useNavigate();

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  };

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    let sign = 'alares';
    let pass = '123';

    if (username != sign) {
      setError((prevError) => ({ ...prevError, name: true }));
      console.log('Login Error')
    }
    if (password != pass) {
      setError((prevError) => ({ ...prevError, password: true }));
      console.log('PasswordError')
    }

    if (username === 'alares' && password === '123') {
      setAuthenticated(true);
      setAdminArea(false);
      localStorage.setItem('auth', 'true');
      event.target.reset();
      navigate('/admin');
    } else {
      setPassword('');
      alert('Credenciais inválidas');
      event.target.reset();
    }
  }

  return (
    <S.Container display={props.display}>
      <S.Row>
        <S.Form onSubmit={handleSubmit}>
          <S.Input
            type="text"
            id="username"
            placeholder="Username"
            value={username}
            onChange={handleUsernameChange} />
          <S.Input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange} />
          <S.Button type="submit">Login</S.Button>
        </S.Form>
      </S.Row>
    </S.Container>
  );
}

export default LoginAdmin;