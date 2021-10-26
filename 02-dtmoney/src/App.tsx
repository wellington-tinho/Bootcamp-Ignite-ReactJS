import Modal from 'react-modal';
import { useState } from 'react';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTrasationModal } from './components/NewTransationModal';
import { GlobalStyle } from "./styles/global";
import { TransactionsProvider } from './hooks/useTransactions';

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
    <TransactionsProvider>

      <Header onOpenNewTransationModal={handleOpenNewTransationModal}/>

      <Dashboard />

      <NewTrasationModal isOpen={isNewTransationModalOpen} onRequestClose={handleCloseNewTransationModal}></NewTrasationModal>
      
      <GlobalStyle />
    </TransactionsProvider>
  );
}

export default App;
