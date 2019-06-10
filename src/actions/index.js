import streams from '../apis/stream';
import history from '../history';

export const signIn = (userId) => {
    return({
        type:'SIGN_IN',
        payload:userId
    })
}

export const signOut = () => {
    return({
        type:'SIGN_OUT'
    })
}

export const createStream = (formvalues)=> async (dispatch, getState)=>{

   const {userId} = getState().auth 
   const response = await streams.post('/stream', {...formvalues, userId})
   dispatch({type:'CREATE_STREAM', payload:response.data})
   history.push('/')

}

export const fetchStreams = ()=> async(dispatch)=>{
    const response = await streams.get('/stream')
    console.log(response)
    dispatch({type:'FETCH_STREAMS', payload:response.data})
}

export const fetchStream = (id) => async(dispatch)=>{
    const response = await streams.get(`/stream/${id}`)
    
    dispatch({type:'FETCH_STREAM', payload:response.data})
}

export const editStream = (id, formvalues)=> async(dispatch)=>{
    const response = await streams.patch(`/stream/${id}`, formvalues)

    dispatch({type:'EDIT_STREAM', payload:response.data})
    history.push('/')
}

export const deleteStream = (id)=> async(dispatch)=>{
     await streams.delete(`/stream/${id}`)

    dispatch({type:'DELETE_STREAM', payload:id})
    history.push('/')
}