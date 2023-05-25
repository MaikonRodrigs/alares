import { useContext } from 'react';
import { ThemeContext } from 'styled-components'

import * as S from './styles';


function Header({ toggleTheme }) {
    const { title } = useContext(ThemeContext);
    const LogoAlares = 'https://alaresinternet.com.br/wp-content/themes/alares/assets/_dist/images/template/vetor-1.svg'


    return (
        <>
            <S.Container>
                <S.Row>
                    <S.Logo src={LogoAlares} alt="Alares-Logo" />
                    <S.RightRow>
                        <S.Icons>
                            <S.IconShoppingCart />
                            <S.IconAdmin />
                            <S.SwitchToggle
                                onChange={toggleTheme}
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