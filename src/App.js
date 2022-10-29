
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import PrivateRouter from './router/PrivateRouter';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <PrivateRouter />
    </div>
     </BrowserRouter>
  );
}

export default App;
