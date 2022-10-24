import PageLayout from './layout.jsx';
import './App.css';
import NavBar from './navbar.jsx';
import PortfolioPage from './portfolio.js';


function App() {
  return (
    <PageLayout>
      <NavBar />
      <PortfolioPage />
    </PageLayout>
  );
}

export default App;
