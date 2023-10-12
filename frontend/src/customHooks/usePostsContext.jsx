import { useContext } from "react";
// React Context is a way that we can provide Global State to many different components in the App.
// And we can also update that state by dispatching actions from those components as well.

import { PostsContext } from "../context/PostContext";  // The actual context that we've created. Not the provider component!!!



export function usePostsContext() {  // This hook returns the value of PostContext, which is the value we've 
                                     // passed into the provider component (value={...state, dispatch})
    const context = useContext(PostsContext)

    // We can also check if we are within the scope of the context we are trying to use
    if (!context) {
        throw Error('usePostsContext must be used inside a PostsContextProvider')
    }



    return context
}

// Whenever we wanna use our post data we just need to invoke 'usePostsContext' CUSTOM HOOK