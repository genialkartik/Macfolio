import axios from 'axios'
import {GET_ITEMS, GET_FILES, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING, UPLOAD_ITEM} from './types'

export const getFolders = item => dispatch => {
    dispatch(setItemsLoading())
    if(!item.wfolder){
        axios.get(`/explorer/${item.wdata}`)
        .then(res => 
            dispatch({
                type: GET_ITEMS,
                payload: res.data
            })
        )
    }
    else{
        axios.get(`/explorer/${item.wdata}/${item.wfolder}`)
        .then(res => 
            dispatch({
                type: GET_FILES,
                payload: res.data
            })
        )
    }
};
export const addItem = item => dispatch => {
    console.log(item)
    axios.post(`/explorer/${item.fpath}`, item)
        .then( res => 
            dispatch({
                type: ADD_ITEM,
                payload: res.data
            })
        )
};
export const uploadItem = item => dispatch => {
    console.log(item)
    axios.post(`/explorer/${item.fpath}/${item.fname}`, item)
        .then( res => 
            dispatch({
                type: UPLOAD_ITEM,
                payload: res.data
            })
        )
};
export const deleteItem = id => dispatch => {
    axios.delete(`/explorer/${id}`)
        .then(res =>
            dispatch({
                type: DELETE_ITEM,
                payload: id
            })
        )
};
export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    };
};