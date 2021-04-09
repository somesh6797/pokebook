import React, { Component } from 'react'
import style from './../styles/pokecard.module.css'

class Pokecard extends Component{

    render() {
        let { loading, pokedata, error } = this.props.pokemon
        console.log(this.props,"from pokemons")
        let name=""
        if (loading) {
            name="loading..."
        } else {
            if (!error==="") {
                name=error
            }else {
                name = pokedata.name
            }
        }
        let imageUrl='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/'+1+'.svg'
        return (
            <React.Fragment>
                <div className={style.card_container}>
                    <div className={style.overlay}></div>
                    <div className={style.circle}>
                        <img style={this.img} className={style.img} src={imageUrl} height='90' alt="hi"/>
                    </div>
                    <div className={style.text}>
                        <p> {name}</p>
                        <a href="#a" className={style.go_link}>Click for Info</a>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Pokecard