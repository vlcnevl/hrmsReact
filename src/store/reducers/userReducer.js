import { LOGİN , LOGOUT} from "../actions/userActions"
import { userState } from "../initialValues/userState"

const initialState = {
    userState: userState,
}

export default function userReducer(state=initialState,{type}) {
    switch(type)
    {
        case LOGİN:   
        return {
          userState:true
        }
        case LOGOUT:
        return {
            userState:false
        }
        default: 
        return state
    }
} 