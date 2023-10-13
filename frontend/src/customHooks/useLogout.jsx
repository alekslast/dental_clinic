import { useAuthContext } from "./useAuthContext"


export function useLogout() {

    const { dispatch } = useAuthContext()

    function logout() {
        // Remove user token from the local storage
        localStorage.removeItem('user')


        // Dispatch logout function
        dispatch({type: 'LOGOUT'})
    }


    return { logout }

}