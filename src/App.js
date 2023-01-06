import PageLayout from './components/layout.jsx';
import './App.css';
import NavBar from './components/navbar.jsx';
import PortfolioPage from './components/portfolio.js';
import Bio from './components/bio.js';
import ContactCard from './components/contactCard.js'
import { useState } from 'react';

function App() {
  const [ state, setState ] = useState('home');
  const [modalShow, setModalShow] = useState(false);
  return (
    <PageLayout>
      <NavBar
        setState={setState}
        setModalShow={setModalShow}
      />
      <ContactCard
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <Bio
        state={state}
      />
      <PortfolioPage
        state={state}
      />
    </PageLayout>
  );
}

export default App;
