// we'll need axios

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
import axios from 'axios';
export const FETCHING = 'FETCHING';
export const ERROR = 'ERROR';
export const SUCCESS = 'SUCCESS';

export const fectchCharacters = ()=> dispatch => {
    dispatch({type : FETCHING})
    axios
    .get(`https://swapi.co/api/people/`)
    .then(res => {
        console.log(" Post response", res)
        dispatch({
            type:   SUCCESS,
            payload : res.data
        })
    })
    .catch(err => 
        dispatch({
            type: ERROR,
            payload: 'Data not found'})
    );
}