import React, { Component } from "react";
import Pokecard from "./components/Pokecard";
import style from "./styles/app.module.css";
import { connect } from "react-redux";
import fetchData from "./actions/fetchData";
import { Provider } from "react-redux";
import store from "./store/store";

export class App extends Component {
    componentDidMount() {
        this.props.fetchData(); // going through thunk
    }

    render() {
        let { dataLoading, pokedata, dataError } = this.props.pokemons;
        let pokeList = "";
        console.log(this.props.pokemons);
        if (dataLoading) {
            pokeList = "Loading ...... wait";
        } else {
            if (dataError !== "") {
            } else {
                pokeList = Array.from(pokedata.results).map(
                    (pokemon, index) => {
                        console.log("map");
                        return (
                            <Pokecard
                                key={index}
                                index={index}
                                pokemon={{
                                    pokename: pokemon.name,
                                    dataLoading,
                                    dataError,
                                }}
                            />
                        );
                    }
                );
            }
        }

        return (
            <div>
                <div className={style.app}>
                    {/* <Provider store={store}>{pokeList}</Provider> */}
                    {pokeList}
                </div>
            </div>
        );
    }
}
const mapState = (state) => {
    return {
        pokemons: state.pokemons,
    };
};

const mapDispatch = (dispatch) => {
    return {
        fetchData: () => {
            dispatch(fetchData());
        },
    };
};

export default connect(mapState, mapDispatch)(App);

// export class App extends Component {
//   componentDidMount() {
//     this.props.fetchData();// going through thunk
//   }
//   render() {
//     console.log(this.props)
//     return (
//       <div>
//          <div className={style.app}>
//           <Provider store={store}>
//             {/* <IceCreamContainer/>
//             <CakeContainer /> */}
//             <Pokecard pokemon={this.props.pokemons} />
//           </Provider>
//         </div>

//       </div>
//     )
//   }
// }
// const mapState = state => {
//   return{
//     pokemons:state.pokemons
//   }
// }

// const mapDispatch = dispatch => {
//   return {
//     fetchData:()=>{dispatch(fetchData())}
//   }
// }

// export default connect(mapState,mapDispatch)(App);
