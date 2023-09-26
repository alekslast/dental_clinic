import { useState } from "react";

export default function PostForm(props) {
    
    const [category, setCategory]                   = useState('')
    const [postTitle, setTitle]                     = useState('')
    const [postBody, setBody]                       = useState('')
    const [error, setError]                         = useState(null)
    

    
    const handleSubmit = async (e) => {
        e.preventDefault()

        const post = {
            category,
            postTitle,
            postBody
        }

        const response = await fetch(
            `${props.location}/posts`, 
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
        }
    }


    return (
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
            <input 
                type        = 'text'
                onChange    = {(e) => setBody(e.target.value)}
                value       = {postBody}
            />

            <button>Submit</button>
            {error && <div className='error'>{error}</div>}
        </form>
    )
}