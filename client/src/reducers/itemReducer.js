import {GET_ITEMS, GET_FILES, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING, UPLOAD_ITEM} from '../actions/types';

const initialState = {
    folderitems: [],
    fileitems: [],
    loading: false
} 

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_ITEMS:
            return {
                ...state,
                folderitems:  action.payload,
                loading: false
            }
        case GET_FILES:
            return {
                ...state,
                fileitems:  action.payload,
                loading: false
            }
        case ADD_ITEM:
            return {
                ...state,
                folderitems: [action.payload, ...state.folderitems]
            }
        case UPLOAD_ITEM:
            return {
                ...state,
                fileitems: [action.payload, ...state.fileitems]
            }
        case DELETE_ITEM:
            return {
                ...state,
                folderitems: state.folderitems.filter( item => item._id !== action.payload)
            }
        case ITEMS_LOADING:
        return {
            ...state,
            loading: true
        }
        default:
            return state;
    }
}