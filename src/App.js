import './App.scss';
import {ThreeCanvas} from './three-components/canvas';
import {NameHeader} from './components/nameheader';

function App() {
  return (
    <div className="app">
      <NameHeader></NameHeader>

      <ThreeCanvas />
    </div>
  );
}

export default App;
