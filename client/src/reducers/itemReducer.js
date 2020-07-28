import {GET_ITEMS,
    ADD_ITEM, 
    DELETE_ITEM, 
    DELETE_FILE,
    ITEMS_LOADING, 
    UPLOAD_ITEM     } from '../actions/types';

const initialState = {
    folderitems: [],
    fileitems: [],
    loading: false
} 

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_ITEMS:
            var items = action.payload
            var folders = items.filter( item => item.itemType === 'folder')
            var files = items.filter( item => item.itemType !== 'folder')
            return {
                ...state,
                folderitems:  folders,
                fileitems: files,
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
        case DELETE_FILE:
            return {
                ...state,
                fileitems: state.fileitems.filter( file => file._id !== action.payload)
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