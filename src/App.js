import CakeContainer from "./components/CakeContainer";
import Pokecard from "./components/Pokecard";
import style from './styles/app.module.css';
import { Provider } from 'react-redux'
import store from './store/store'

function App() {
  return (
    <div className={style.app}>
      <Provider store={store}>
        <CakeContainer />
      </Provider>
      <Pokecard pokename="Name's Bulbasour" />
      <Pokecard pokename="Name's Bulbasour" />
      <Pokecard pokename="Name's Bulbasour" />
      <Pokecard pokename="Name's Bulbasour" />
      <Pokecard pokename="Name's Bulbasour" />
      <Pokecard pokename="Name's Bulbasour" />
    </div>
  );
}

export default App;
