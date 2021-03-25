import UseContext from './components/useContextExample/useContext';
import UseState from './components/useStateExample/useState';
import ScrollTop from './components/scrollTop/scrollTop';
import UseRef from './components/useRefExamples/useRef';

function App() {
  return (
    <div className="App">
      <div>Import Components here</div>
      <UseContext/>
      <UseState />
      <UseRef/>
      <ScrollTop/>
    </div>
  );
}

export default App;
