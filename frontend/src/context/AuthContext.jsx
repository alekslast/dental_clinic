// React Hooks
import { createContext, useReducer, useEffect } from "react";



export const AuthContext = createContext()

export function authReducer(state, action) {

    switch (action.type) {
        case 'LOGIN':
            return { user: action.payload }
        case 'LOGOUT':
            return { user: null }
        default:
            return state
    }
}

export function AuthContextProvider({ children }) {
    
    const [state, dispatch] = useReducer(authReducer, { user: null})


    // Only fire this useEffect when the component first renders
    // Here we wanna check our token in browser's local storage.
    // If it exists, then the user is logged in. If not he's logged out.
    useEffect(() => {
        // When smth is stored in local storage, it is stored in a form of a JSON string
        // That is why we need to convert that string back to JSON object format
        // If there is smth under 'user' in our local storage - then we will get that data,
        // if not, we will get a null
        const user = JSON.parse(localStorage.getItem('user'))


        // If the above value exists, then we want to perform an automatic log in
        if (user) {
            dispatch({ type: 'LOGIN', payload: user })
        }
    }, [])

    console.log('AuthContext state:', state)


    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            { children }
        </AuthContext.Provider>
    )
}