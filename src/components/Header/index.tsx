import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';

export function Header() {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="money app" />
                <button type="button">
                    Nova transação
                </button>
            </Content>
        </Container>
    )
}