import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import { useTransactions } from '../../hooks/useTransactions';

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import closeImg from '../../assets/close.svg'
import { Container, TransatcionTypeContainer, RadioBox } from './styles'


interface NewTrasationModalProps {
  isOpen: boolean;
  onRequestClose: ()=> void;
}

export function NewTrasationModal({isOpen, onRequestClose}: NewTrasationModalProps) {
  const { createTransaction } = useTransactions()

  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('deposit')

  async function handleCreateNewTransation(event: FormEvent) {
    event.preventDefault();
    
    await createTransaction({
      title, 
      amount,
      category, 
      type 
    })
    
    setTitle('')
    setAmount(0)
    setCategory('')
    setType('deposit')

    onRequestClose();
  }


  return(
    <Modal 
      isOpen={isOpen} 
      onRequestClose={onRequestClose}
      overlayClassName='react-modal-overlay' 
      className='react-modal-content'
      >
      <Container onSubmit={handleCreateNewTransation}>
        <h2>Cadastrar informação</h2>
        <button 
          type='button' 
          onClick={onRequestClose}
          className='react-modal-close'
          > 
          <img src={closeImg} alt="Fechar modal"/> 
        </button>
        <input placeholder="Título" value={title} onChange={event => setTitle(event.target.value)}/>
        <input type="number" placeholder="Valor" value={amount} onChange={event => setAmount(+(event.target.value))}/>
        <TransatcionTypeContainer>
          
          <RadioBox type="button" onClick={()=>{setType('deposit')}} isActive={type === 'deposit'} activeColor={'green'}>
            <img src={incomeImg} alt="Entrada"/>
            <span>Entrada</span>
          </RadioBox>

          <RadioBox type="button" onClick={()=>{setType('withdraw')}} isActive={type === 'withdraw'} activeColor={'red'}>
            <img src={outcomeImg} alt="Saída"/>
            <span>Saída</span>
          </RadioBox>

        </TransatcionTypeContainer>
        <input placeholder="Categoria" value={category} onChange={event => setCategory(event.target.value)}/>
        <button type="submit"> Cadastrar  </button>
      </Container>
    </Modal>

  );
}