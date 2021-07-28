import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import closeImg from '../../assets/close.svg';
import { RadioBox, Container, TransactionTypeContainer } from './styles';
import { useTransactions } from '../../hooks/useTransactions';



interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

Modal.setAppElement('#root');

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps){
  const { createTransaction } = useTransactions();
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('deposit');

  async function handleCreateNewTransaction(event: FormEvent){
    event.preventDefault();

    await createTransaction({
      title,
      amount,
      type,
      category,
    })

    setTitle('');
    setAmount(0);
    setCategory('');
    setType('deposit');
    onRequestClose();
  }

  return (
    <Modal 
      isOpen={isOpen} 
      onRequestClose={onRequestClose}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >
      <button className='react-modal-close' type="button" onClick={onRequestClose}>
        <img src={closeImg} alt="Fechar Modal" />
      </button>

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input 
        placeholder="Título" 
        type="text" 
        value={title} 
        onChange={event => setTitle(event.target.value)}
        />
        
        <input 
        placeholder="Valor" 
        type="number" 
        value={amount} 
        onChange={event => setAmount(Number(event.target.value))} 
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"  
            onClick={() => {setType('deposit')}}
            isActive={type === 'deposit'}
            activeColor='green'
           > 
            <img src={incomeImg} alt="Entrada" /> 
            <span> Entrada </span> 
          </RadioBox>

          <RadioBox 
            type="button" 
            onClick={() => {setType('withdraw')}} 
            isActive={type === 'withdraw'}
            activeColor='red'
          > 
            <img src={outcomeImg} alt="Saída" /> 
            <span> Saída </span> 
          </RadioBox>
        </TransactionTypeContainer>

        <input 
        placeholder="Categoria" 
        type="text" 
        value={category} 
        onChange={event => setCategory(event.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>  
  )
}