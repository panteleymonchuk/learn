// import {SET_YEAR} from '../constants/Page'
import {GET_PHOTOS_SUCCESS, GET_PHOTOS_REQUEST} from '../constants/Page'

const initialState = {
    year: 2016,
    photos: [],
    loaded: false
}

export default function page(state = initialState, action) {

    switch (action.type) {
        case GET_PHOTOS_REQUEST:
            return { ...state, year: action.payload, loaded: true }
        case GET_PHOTOS_SUCCESS:
            return { ...state, photos: action.payload, loaded: false }
        default:
            return state;
    }
}
