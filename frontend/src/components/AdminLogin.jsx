// React Hooks
import { useState }         from "react";
import { useAuthContext } from "../customHooks/useAuthContext";

// My Hooks
import { useLogout } from "../customHooks/useLogout";

// Styles
import '../styles/AdminLogin.css'





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
        <div className='admin-login'>

            {user ? (
                <>
                    <div className='logged-as'>
                        <span>Logged in as: <b>{user.adminName}</b></span>
                        <button onClick={handleClick} className='logout-btn'>LOGOUT</button>
                    </div>
                </>
            )
            : 
                <form 
                    className="admin-login--form"
                    onSubmit={handleSubmit}
                >
                    <h3 className='admin-login--header'>Check admin credentials</h3>

                    <div className='admin-login--login'>
                        <label>Admin Login:</label>
                        <input 
                            type        = 'text'
                            onChange    = {(e) => setAdminName(e.target.value)}
                            value       = {adminName}
                        />
                    </div>

                    <div className='admin-login--password'>
                        <label>Admin Password:</label>
                        <input 
                            type        = 'password'
                            onChange    = {(e) => setAdminPassword(e.target.value)}
                            value       = {adminPassword}
                        />
                    </div>

                    <button className='submit-btn'>Submit</button>
                    {error && <div className='error'>{error}</div>}
                </form>
            }

            

            
        </div>
    )
}