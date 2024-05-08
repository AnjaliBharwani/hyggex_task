import './App.css';
import Bottom from './components/Bottom';
import DropDown from './components/DropDown';
import Nav from './components/Nav';
import Navbar from './components/Navbar';
import Raw from './components/Raw';

function App() {
  return (
    <div>
      <Navbar/>
      
      <Raw/>
      <Nav />
      <Bottom />
      <DropDown />
    </div>
  );
}

export default App;
