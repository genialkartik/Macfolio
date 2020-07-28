import axios from 'axios'
import {
    GET_ITEMS,
    ADD_ITEM,
    DELETE_ITEM,
    DELETE_FILE,
    ITEMS_LOADING,
    UPLOAD_ITEM
} from './types'


export const getItems = item => dispatch => {
    dispatch(setItemsLoading())
    axios.get(`/explorer/folder`, {params: { wpath: item.wpath }}) // eg: '/explorer/Academics'
        .then(res =>
            dispatch({
                type: GET_ITEMS,
                payload: res.data
            })
        )
};
export const addItem = item => dispatch => {
    axios.post(`/explorer/folder`, item)
        .then(res =>
            dispatch({
                type: ADD_ITEM,
                payload: res.data
            })
        )
};
export const uploadItem = item => dispatch => {
    axios.post(`/explorer/file`, item.formdata)
        .then(res =>
            dispatch({
                type: UPLOAD_ITEM,
                payload: res.data
            })
        )
};
export const deleteItem = id => dispatch => {
    console.log(id)
    axios.delete(`explorer/folder`, { params: {delId: id }})
        .then(res =>
            dispatch({
                type: DELETE_ITEM,
                payload: id
            })
        )
};
export const deleteFile = id => dispatch => {
    axios.delete(`/explorer/file`, { params: {delId: id }})
        .then(res =>
            dispatch({
                type: DELETE_FILE,
                payload: id
            })
        )
};
export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    };
}; 