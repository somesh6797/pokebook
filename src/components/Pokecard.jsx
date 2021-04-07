import React, { Component } from 'react'
import style from './../styles/pokecard.module.css'
import fetchData from './../actions/fetchData'
import {connect} from 'react-redux'

let dataFun;
class Pokecard extends Component{
    // componentDidMount() {
    //     // this.props.fetchData();
    // }
    render() {
        return (
            <React.Fragment>
                <div className={style.card_container}>
                    <div className={style.overlay}></div>
                    <div className={style.circle}>
                        <img style={this.img} className={style.img} src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/58.svg' height='90' alt="hi"/>
                    </div>
                    <div className={ style.text}>
                        <p> {this.props.pokename}</p>
                        <a href="#a" className={style.go_link}>Click for Info</a>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

// const mapStateToProps = state=> {
//     return {
//         data:state
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         fetchData: () => {
//             dispatch(fetchData())
//         }
//     }
// }
// export default connect(mapStateToProps,mapDispatchToProps)(Pokecard)
export default Pokecard