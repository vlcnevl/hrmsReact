export const LOGİN="LOGİN"
export const LOGOUT="LOGOUT"

export function login() {
       return {
           type:LOGİN, 
       } 
}

export function logout() {
    return {
        type:LOGOUT, 
    } 
}