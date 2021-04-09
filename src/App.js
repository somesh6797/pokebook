import React, { Component } from 'react'
// import CakeContainer from "./components/CakeContainer";
// import IceCreamContainer from "./components/IceCreamContainer";
import Pokecard from "./components/Pokecard";
import style from './styles/app.module.css';
import {connect} from 'react-redux'
import fetchData from "./actions/fetchData";
import { Provider } from 'react-redux';
import store from './store/store'

export class App extends Component {
  componentDidMount() {
    this.props.fetchData();// going through thunk
  }
  render() {
    return (
      <div>
         <div className={style.app}>
          <Provider store={store}>
            {/* <IceCreamContainer/>
            <CakeContainer /> */}
            <Pokecard pokemon={this.props.pokemon} />
          </Provider>
          {console.log(this.props.pokemon,'from pok')}
        </div>
        
      </div>
    )
  }
}
const mapState = state => {
  return{
    pokemon:state.pokemon
  }
}

const mapDispatch = dispatch => {
  return {
    fetchData:()=>{dispatch(fetchData())}
  }
}

export default connect(mapState,mapDispatch)(App);