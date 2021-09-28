import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { addNumber, subNumber } from "./store/modules/counter/actions";

function App() {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>{useSelector((state) => state.counter)}</h1>
      <button onClick={() => dispatch(addNumber())}>Adicionar</button>
      <button onClick={() => dispatch(subNumber())}>Subtrair</button>
    </div>
  );
}

export default App;
