import React from 'react'
import {connect} from 'react-redux'
import buyIceCream  from './../actions/buyIceCream'

function IceCreamContainer(props) {
    return (
        <div>
            <h1>Number of IceCream : {props.numOfIceCream}</h1>
            <button onClick={props.buyIceCream}>Buy Icecream</button>
        </div>
    )
}


//here iceCream property is beacause we have given it in root reducer
//we can do somesthing based on ownPorps
const mapStateToProps = (state, ownProps) => {
    return {
        numOfIceCream:state.iceCream.numOfIceCream
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(IceCreamContainer)
