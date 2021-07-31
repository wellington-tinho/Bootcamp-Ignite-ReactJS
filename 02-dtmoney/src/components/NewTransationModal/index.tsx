import Modal from 'react-modal';
import { Container } from './styles'

interface NewTrasationModalProps {
  isOpen: boolean;
  onRequestClose: ()=> void;
}

export function NewTrasationModal({isOpen, onRequestClose}: NewTrasationModalProps) {
  
  return(
    <Modal 
      isOpen={isOpen} 
      onRequestClose={onRequestClose}
      overlayClassName='react-modal-overlay' 
      className='react-modal-content'
      >
      <Container>
        <h2>Cadastrar informação</h2>
        <input placeholder="Título"/>
        <input type="number" placeholder="Valor"/>
        <input placeholder="Categoria"/>
        <button type="submit"> 
          Cadastrar
        </button>
      </Container>
    </Modal>

  );
}