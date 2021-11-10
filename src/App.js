import './App.scss';
import {ThreeCanvas} from './three-components/canvas';

function App() {
  return (
    <div className="app">
      <div className="app-content-wrapper">
        <header className="app-content">
          <p>
            Stefan
          </p>
        </header>
      </div>

      <ThreeCanvas />
    </div>
  );
}

export default App;
