// React Hooks
import { useState }         from "react";


// My Hooks
import { usePostsContext }  from "../customHooks/usePostsContext";
import { useAuthContext }   from "../customHooks/useAuthContext";

// Styles
import '../styles/PostForm.css';


export default function PostForm(props) {

    // Destructuring our usePostsContext to get the dispatch as it is the only thing we need
    // from there at the moment. After that we need to use the dispatch function, which invokes
    // our postsReducer function in the place, where we actually post our new post and get response
    // from the server that everything is OK.
    const { dispatch }                  = usePostsContext()
    const { user }                      = useAuthContext()
    
    const [category, setCategory]       = useState('')
    const [postTitle, setTitle]         = useState('')
    const [postBody, setBody]           = useState('')
    const [error, setError]             = useState(null)
    

    
    const handleSubmit = async (e) => {
        e.preventDefault()

        const post = {
            category,
            postTitle,
            postBody
        }

        const response = await fetch(
            `${props.location}`, 
            {
                method  : 'POST', 
                body    : JSON.stringify(post),
                headers : {'Content-Type': 'application/json'}
            }
        )

        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            setCategory('')
            setTitle('')
            setBody('')
            setError(null)
            // console.log('New post added!')

            // If everything is OK, then run dispatch function, which is gonna update our state locally
            // adding new post at the top of the list
            dispatch({type: 'CREATE_POST', payload: json})
        }
    }


    return (
        <section className='post-form'>
            {user && (
                <form 
                    className="create-post--form"
                    onSubmit={handleSubmit}
                >
                    <h3>Add New Post</h3>

                    <label>Post Category:</label>
                    <select
                        required
                        name        = 'category' 
                        value       = {category}
                        onChange    = {(e) => setCategory(e.target.value)}
                    >
                        <option value='not selected'>--Select one of the options--</option>
                        <option value='stomatologie'>stomatologie</option>
                        <option value='beauty'      >beauty</option>
                        <option value='farmacie'    >farmacie</option>
                    </select>

                    <label>Post Title:</label>
                    <input 
                        type        = 'text'
                        onChange    = {(e) => setTitle(e.target.value)}
                        value       = {postTitle}
                    />

                    <label>Post Body:</label>
                    <textarea 
                        // type        = 'text'
                        onChange    = {(e) => setBody(e.target.value)}
                        value       = {postBody}
                    />

                    <button>Submit</button>
                    {error && <div className='error'>{error}</div>}
                </form>
            )}
        </section>
    )
}