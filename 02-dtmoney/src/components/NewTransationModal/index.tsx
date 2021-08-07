import Modal from 'react-modal';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import closeImg from '../../assets/close.svg'
import { Container, TransatcionTypeContainer, RadioBox } from './styles'
import { useState } from 'react';

interface NewTrasationModalProps {
  isOpen: boolean;
  onRequestClose: ()=> void;
}

export function NewTrasationModal({isOpen, onRequestClose}: NewTrasationModalProps) {
  const [type, setType] = useState('deposit')
  return(
    <Modal 
      isOpen={isOpen} 
      onRequestClose={onRequestClose}
      overlayClassName='react-modal-overlay' 
      className='react-modal-content'
      >
      <Container>
        <h2>Cadastrar informação</h2>
        <button 
          type='button' 
          onClick={onRequestClose}
          className='react-modal-close'
          > 
          <img src={closeImg} alt="Fechar modal"/> 
        </button>
        <input placeholder="Título"/>
        <input type="number" placeholder="Valor"/>
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
        <input placeholder="Categoria"/>
        <button type="submit"> Cadastrar  </button>
      </Container>
    </Modal>

  );
}