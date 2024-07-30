import Navbar from './components/Navbar/Navbar';
import Todos from './components/Todos/Todos';
import './App.css';
import './Todos.css';

function App() {
  return (
    <div className="container">
      <Navbar />
      <div className='Todo'>
        <Todos />
      </div>g
    </div>
  );
}

export default App;
