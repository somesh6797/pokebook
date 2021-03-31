import React, { Component } from 'react'
import buyCake from './../actions/buyCake'
import {connect} from 'react-redux'

class CakeContainer extends Component {
    
    render() {
        console.log(this.props);
        return (
            <div>
                <h1>Number of cakes : { this.props.numOfCakes}</h1>

                <button onClick={this.props.buyCake}> Buy Cake</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        numOfCakes:state.numOfCakes
    }
}
const mapDispatchToProps = dispatch => {
    return {
        buyCake:()=>dispatch(buyCake())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer)
