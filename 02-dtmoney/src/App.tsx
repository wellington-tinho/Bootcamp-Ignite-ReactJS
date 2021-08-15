import Modal from 'react-modal';
import { TransactionsContext } from './TransactionsContext';
import { useState } from 'react';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTrasationModal } from './components/NewTransationModal';
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
    <TransactionsContext.Provider value={[]}>
     <Header onOpenNewTransationModal={handleOpenNewTransationModal}/>

     <Dashboard />

     <NewTrasationModal isOpen={isNewTransationModalOpen} onRequestClose={handleCloseNewTransationModal}></NewTrasationModal>
     
     <GlobalStyle />
    </TransactionsContext.Provider>
  );
}

export default App;
