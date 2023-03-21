import logo from './logo.svg';
import './Styles/App.css';
import Header from './Components/Header/Header';
import MainContent from './Components/Content/Content';
import SideMenu from './Components/NavBar/SideMenu';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <SideMenu />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
