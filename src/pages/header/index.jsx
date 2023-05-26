import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from 'styled-components'

import { GlobalContext } from '@/hooks/useContext';
import LoginAdmin from '@/components/admin'
import Cart from '@/components/cart'
import * as S from './styles';


function Header(props) {
  const navigate = useNavigate();
  const { title } = useContext(ThemeContext);
  const { cart, setCart, adminArea, setAdminArea } = useContext(GlobalContext)
  const isAuth = localStorage.getItem('auth')

  const LogoAlares = 'https://alaresinternet.com.br/wp-content/themes/alares/assets/_dist/images/template/vetor-1.svg'
  function handleLogoClick() {
    navigate('/');
  }

  function handleAdmin() {
    if (cart) {
      setCart(false)
    }
    if (isAuth === 'true') {
      navigate('/admin');
    } else {
      navigate('/');
      setAdminArea(!adminArea)
      if (cart) {
        setCart(false)
      }
    }
  }

  function handleCart() {
    setCart(!cart)
    if (adminArea) {
      setAdminArea(false)
    }
  }

  return (
    <>
      <S.Container>
        <S.Row>
          <S.Logo
            src={LogoAlares}
            alt="Alares-Logo"
            onClick={handleLogoClick}
          />
          <S.RightRow>
            <S.Icons>
              <LoginAdmin display={adminArea} />
              <Cart display={cart} />
              <S.IconShoppingCart onClick={handleCart} />
              <S.IconAdmin onClick={() => handleAdmin()} />
              <S.SwitchToggle
                onChange={props.toggleTheme}
                checked={title === 'light'}
                checkedIcon={false}
                uncheckedIcon={false}
                height={20}
                width={40}
                handleDiameter={16}
                offHandleColor="#333333"
                offColor="#C4C4C4"
                onColor="#5953f7"
              />
            </S.Icons>
          </S.RightRow>
        </S.Row>
      </S.Container>
    </>
  )
}

export default Header;