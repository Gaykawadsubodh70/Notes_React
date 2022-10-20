import logo from './logo.svg';
import './App.css';
import './components/Navbar';
import Navbar from './components/Navbar';

function App() {
  // let date=(new Date('2022','10','20'));
  // let amount='252.12';
  // let title="Welcome";
  return (
    <div className="App">
      <Navbar/>
      {/* <Navbar passedDate={date} passedTitle={title} passedAmount={amount} /> */}
    </div>
  );
}

export default App;
