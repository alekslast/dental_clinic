// React Hooks
import { useState }         from "react";
import { useAuthContext } from "../customHooks/useAuthContext";

// My Hooks
import { useLogout } from "../customHooks/useLogout";





export default function AdminLogin() {
    
    const [adminName, setAdminName]                 = useState('')
    const [adminPassword, setAdminPassword]         = useState('')
    const [error, setError]                         = useState(null)

    const { dispatch, user }  = useAuthContext()
    const { logout }    = useLogout()
    

    
    const handleSubmit = async (e) => {
        e.preventDefault()

        const creds = {
            adminName,
            adminPassword
        }

        const response = await fetch(
            '/adminLogin', 
            {
                method  : 'POST', 
                body    : JSON.stringify(creds),
                headers : {'Content-Type': 'application/json'}
            }
        )

        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            setAdminName('')
            setAdminPassword('')
            setError(null)

            // Save user to local storage
            localStorage.setItem('user', JSON.stringify(json))

            // Update Auth context
            dispatch({type: 'LOGIN', payload: json})
        }
    }



    function handleClick() {
        logout()
    }



    return (
        <>
            <form 
                className="create-post--form"
                onSubmit={handleSubmit}
            >
                <h3>Check admin credentials</h3>

                <label>Admin Login:</label>
                <input 
                    type        = 'text'
                    onChange    = {(e) => setAdminName(e.target.value)}
                    value       = {adminName}
                />

                <label>Admin Password:</label>
                <input 
                    type        = 'password'
                    onChange    = {(e) => setAdminPassword(e.target.value)}
                    value       = {adminPassword}
                />

                <button>Submit</button>
                {error && <div className='error'>{error}</div>}
            </form>

            {user && (
                <>
                    <span>{user.adminName}</span>
                    <button onClick={handleClick}>LOGOUT</button>
                </>
            )}

            {!user && (
                <>
                    <span>Currently Logged Out</span>
                </>
            )}
        </>
    )
}