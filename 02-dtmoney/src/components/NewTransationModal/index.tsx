import Modal from 'react-modal';
import { Container } from './styles'

interface NewTrasationModalProps {
  isOpen: boolean;
  onRequestClose: ()=> void;
}

export function NewTrasationModal({isOpen, onRequestClose}: NewTrasationModalProps) {
  
  return(
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <Container>
        <h2>Cadastrar informação</h2>
      </Container>
    </Modal>

  );
}