import dataPosts from '../data/posts'
import {combineReducers} from 'redux'

function posts(state = dataPosts,action) {
    switch (action.type) {
        case 'REMOVE_POST':return[...state.slice(0,action.index),...state.slice(action.index + 1)]
                            break;
        case 'ADD_POST': return [...state,action.post]
        case 'LOAD_POSTS': return action.posts
    
        default: return state
            break;
    }
    
}

function comments(state={},action){
    switch (action.type) {
        case 'ADD_COMMENT': 
        if (!state[action.postId]){
            return {...state , [action.postId]: [action.comment]}
        }
         else{
             return {...state,[action.postId]:[...state[action.postId],action.comment]}
         }   
        
            
            break;
         case 'LOAD_COMMENTS': return action.comments
        default: return state
            break;
    }
    return state
}

const rootReducer = combineReducers({posts,comments})
export default rootReducer