import { useState } from 'react';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { GlobalStyle } from './styles/global'
import { NewTransactionModal } from './components/NewIsTransactionModal';
import { TransactionsProvider } from './TransactionsContext';

export function App() {
  const [isNewTransactionModal,setIsNewTransactionModal] = useState(false);

  function handleOpenTransactionModal(){
    setIsNewTransactionModal(true);
  }

  function handleCloseTransactionModal(){
    setIsNewTransactionModal(false);
  }
  return (
    <>
      <TransactionsProvider>
        <Header onOpenTransactionModal={handleOpenTransactionModal} />
        <Dashboard />
        <NewTransactionModal isOpen={isNewTransactionModal} onRequestClose={handleCloseTransactionModal}/>
        <GlobalStyle />
      </TransactionsProvider>
    </>
  );
}
