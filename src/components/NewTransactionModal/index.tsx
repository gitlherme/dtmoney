import Modal from 'react-modal';
import { Container, TransactionTypeContainer, RadioBox } from './styles';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { FormEvent, useState } from 'react';
import { api } from '../../services/api';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('deposit');

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();
    const data = {
      title, value, category, type
    }

    api.post('/transactions', data);
  }

  return (
    <Modal
      className="react-modal-content"
      overlayClassName="react-modal-overlay"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
    <button type="button" className="react-modal-close">
      <img src={closeImg} alt="Fechar Modal" onClick={onRequestClose} />
    </button>
    <Container onSubmit={handleCreateNewTransaction}>
      <h2>Add transaction</h2>
      <input value={title} onChange={event => setTitle(event.target.value)} type="text" id="title" placeholder="Title"/>
      <input value={value} onChange={event => setValue(Number(event.target.value))} type="number" id="value" placeholder="Value"/>
      <TransactionTypeContainer>
        <RadioBox
          type="button"
          onClick={() => setType('deposit')}
          isActive={type === 'deposit'}
          activeColor="green"
        >
          <img src={incomeImg} alt="Income" />
          <span>Income</span>
        </RadioBox>

        <RadioBox
          type="button"
          onClick={() => setType('withdraw')}
          isActive={type === 'withdraw'}
          activeColor="red"
        >
          <img src={outcomeImg} alt="Outcome" />
          <span>Outcome</span>
        </RadioBox>
      </TransactionTypeContainer>
      <input value={category} onChange={event => setCategory(event.target.value)} type="text" id="value" placeholder="Category"/>
      <button type="submit">Add transaction</button>
    </Container>
    </Modal>
  )
}