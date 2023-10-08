// import logo from './logo.svg';
// import './App.scss';
import SearchPage from './Pages/SearchPage/SearchPage';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Forum from "./Pages/Forum/Forum";
import {BrowserRouter, Routes, Route} from 'react-router-dom';


  function App() {

    return (
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/forum" element={<Forum />} />
        </Routes>
      
        <Footer/>
      </BrowserRouter>
    );
  }

export default App;
