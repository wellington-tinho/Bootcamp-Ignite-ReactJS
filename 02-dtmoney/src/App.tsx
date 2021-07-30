import Modal from 'react-modal';
import { useState } from 'react';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root')

function App() {
  const [isNewTransationModalOpen, setIsNewTransationModalOpen] = useState(false);

  function handleOpenNewTransationModal(){
    setIsNewTransationModalOpen(true)
  }

  function handleCloseNewTransationModal(){
    setIsNewTransationModalOpen(false)
  }
  
  return (
    <>
     <Header onOpenNewTransationModal={handleOpenNewTransationModal}/>

     <Dashboard />

     <Modal isOpen={isNewTransationModalOpen} onRequestClose={handleCloseNewTransationModal}>
        <h2>Cadastrar informação</h2>
      </Modal>

     <GlobalStyle />
    </>
  );
}

export default App;
