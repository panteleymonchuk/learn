import { GET_PHOTOS_REQUEST, GET_PHOTOS_SUCCESS} from '../constants/Page'

export function getPhotos(year) {

    // cross-domain request failed
    // let xhr = new XMLHttpRequest();
    // let apiKey = '15110f24178d425e90bb0bd32559b6f5';
    // let request = `http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=${apiKey}&limit=5`;
    //
    //
    // xhr.open('GET', request, false);
    // xhr.setRequestHeader('Access-Control-Allow-Headers', '*');
    // xhr.setRequestHeader('Content-type', 'application/json');
    // xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
    // xhr.setRequestHeader('Access-Control-Allow-Methods', 'GET');
    //
    // xhr.send();

    // console.log(xhr.status);

    return (dispatch) => {
        dispatch({
            type: GET_PHOTOS_REQUEST,
            payload: year
        })

        setTimeout(() => {
            dispatch({
                type: GET_PHOTOS_SUCCESS,
                payload: [1, 2, 3, 4, 5]
            })
        }, 1000)
    }
}