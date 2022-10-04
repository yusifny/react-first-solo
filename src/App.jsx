import Header from './components/header/Header';
import Contacts from './components/contacts/Contacts';
import MainContent from './components/main/MainContent';
import Footer from './components/footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Contacts />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
