import { createContext, useReducer } from "react";

// Creating new context and storing it in a const
export const PostsContext = createContext(); 


export function postsReducer(state, action) {
    // postsReducer, which is our reducer function, takes in two arguments:
    // 1) state ... which is the previous state value
    // 2) action ... whatever we pass in our 'dispatch' function
    // 
    // Now, inside this reducer function, we check 'action' type (,=> what we actually
    // wanna do with the data).

    switch (action) {
        case 'SET_POSTS': // Set all of the posts
            // Here we return a new value that we want the state to be.
            return {
                posts: action.payload
            }
        case 'CREATE_WORKOUT': 
            return {
                posts: [action.payload, ...state.posts]
                // We need to take previous version of posts (...state.posts) and update it
                // with new value.
            }
        default:
            return state
    }
}


// Providing context to our application component tree
export function PostsContextProvider({ children }) {

    const [state, dispatch] = useReducer(postsReducer, {
        posts: null
    })
    // First argument in useReducer() is reducer function name
    // Second argument is the initial value for the state
    // 'dispatch' function is a function that updates our state value


    // What does useReducer() do?
    // If we wanna update the state object we first of all call the 'dispatch' function.
    // Inside dispatch we pass an object as an argument.
    // This object should have some properties:
    // 1) 'type' property ... string, ALL CAPS, that describes in 
    // words the state change that we wanna make, e.g.:
    // {type: 'CREATE_POST'}
    // 2) 'payload' property ... so any data we need to make this change, e.g:
    // payload: [{workout1}, {worlout2}, ...]
    // Both properties make up one single argument of the dispatch function,
    // which is called 'action'.
    // 
    // When we call 'dispatch' function our reducer is invoked (postsReducer) and dispatch passes
    // the action to it, so it can do whatever we program it to to using the information (type)
    // and data (payload).




    return (
        // Wraps whatever parts of our application that need access to the context
        <PostsContext.Provider value={{...state, dispatch}}>
        {/* Right now context provider doesn't have any state, => it doesn't provide anything
            to our app. To start doing so we can add 'value' property. */}

        {/* To actually use it, we need to find the place in our code, where the component that
            we want to wrap is RENDERED (called)!!!! Not the place where it is CREATED!!!!!
            Here it is 'index.js' file as we want to wrap the entire application */}
        {/* After that we need to access that component here through children properties */}
            { children }

        </PostsContext.Provider>
    )
}