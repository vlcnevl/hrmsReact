export const LOGİN="LOGİN"
export const LOGOUT="LOGOUT"
export const MAIL="MAIL"

export function login(email) {
       return {
           type:LOGİN, 
           payload:email
       } 
}

export function logout() {
    return {
        type:LOGOUT, 
    } 
}

