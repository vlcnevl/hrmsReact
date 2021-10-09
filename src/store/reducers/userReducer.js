import { LOGİN , LOGOUT} from "../actions/userActions"
import { userMail, userState } from "../initialValues/userState"

const initialState = {
    userState: userState,
    userMail:userMail
}

export default function userReducer(state=initialState,{type,payload}) {
    switch(type)
    {
        case LOGİN:   
        return {
           
          userState:true,
          userMail:payload
        }
        case LOGOUT:
        return {
            userState:false
        }
        default: 
        return state
    }
} 