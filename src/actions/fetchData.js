
import axios from 'axios'
import fetchRequest from './fetchRequest'
import fetchSuccess from './fetchSuccess'
import fetchError from './fetchError'

const fetchData = () => {
    return (dispatch) => {
        dispatch(fetchRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(responce => {
            console.log(responce.data)
            })
            .catch(error => {
                console.log(error.messsage)
            })
    }
}