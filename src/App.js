import CakeContainer from "./components/CakeContainer";
import Pokecard from "./components/Pokecard";
import style from './styles/app.module.css';
import { Provider } from 'react-redux'
import store from './store/store'
import IceCreamContainer from "./components/IceCreamContainer";

function App() {
  return (
    <div className={style.app}>
      {/* <Provider store={store}>
        <IceCreamContainer/>
        <CakeContainer />
      </Provider> */}
      <Pokecard pokename="Name's somethinga-saur" />
    </div>
  );
}

export default App;
