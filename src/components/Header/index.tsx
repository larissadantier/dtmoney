import logoImg from '../../assets/logo.svg';

import { Container, Content } from './styles'

interface HeaderProps {
  onOpenTransactionModal: () => void;
}

export function Header({onOpenTransactionModal}: HeaderProps){
  return (
    <Container>
      <Content>
      <img src={logoImg} alt="Logo dtmoney" />
      <button onClick={onOpenTransactionModal} type="button">Nova Transação</button>
      </Content>
    </Container>
  )
}