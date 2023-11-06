// My Hooks
import { usePostsContext }  from "../customHooks/usePostsContext"
import { useAuthContext }   from "../customHooks/useAuthContext"

// Styles
import '../styles/PostBanner.css';




export default function PostBanner(props) {

    const { dispatch }  = usePostsContext()
    const { user }      = useAuthContext()

    const { post } = props

    async function handleClick() {
        const response = await fetch(
            `${props.location}/${post._id}`, 
            {
                method: 'DELETE'
            })

        const json = await response.json() // this is just THE DELETED document, not the array of all documents

        if (response.ok) {
            dispatch({type: 'DELETE_POST', payload: json})
        }
    }

    return (
        <div className="post-banner">
            <h4>
                <strong>{post.postTitle}</strong>
            </h4>

            <p>
                {post.postBody}
            </p>

            <p>{post.createdAt}</p>

            {user && (
                <button onClick={handleClick}>Delete</button>
            )}
        </div>
    )
}