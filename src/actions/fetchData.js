
import axios from 'axios'
import fetchRequest from './fetchRequest'
import fetchSuccess from './fetchSuccess'
import fetchError from './fetchError'

const fetchData = () => {
    return (dispatch) => {
        // dispatch(fetchRequest)
        console.log("1")
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(responce => {
                console.log(responce.data,"from axios")
                dispatch(fetchSuccess(responce.data))
            })
            .catch(error => {
                console.log(error.messsage)
                dispatch(fetchError(error.messsage))
            })
    }
}
export default fetchData;