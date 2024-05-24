import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/Footer';
import Homepage from './components/Homepage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
