import { createContext, useReducer } from "react";

// Creating new context and storing it in a const
export const PostsContext = createContext(); 


export function postsReducer(state, action) {
    // postsReducer, which is our reducer function, takes in two arguments:
    // 1) state ... which is the previous state value
    // 2) action ... type and payload that we pass with our 'dispatch' function
    // 
    // Now, inside this reducer function, we check 'action' type (,=> what we actually
    // wanna do with the data). If we wanna 'CREATE_POST', then we will run e.g. createPost function

    switch (action.type) {
        case 'SET_POSTS': // Set all of the posts
            // Here we return a new value that we want the state to be.
            return {
                posts: action.payload
                // payload ... is any data needed for this change
            }
        case 'CREATE_POST': 
            return {
                posts: [action.payload, ...state.posts]
                // We want to add a newly created Post to the List Of Existing Posts.
                // Basically it's the same as (...prevValue, newValue), => action.payload = ...newValue; ...state.posts = prevValue
                // Why is it vice versa? NewValue first and then prevValue?
                // That is because in this case, we want each new value to show up at the beginning of the array, not at the end!!!!!
                //
                // Important point!!!!!
                // This create post IS JUST FOR LOCAL STATE! We are not changing anything in the database, only the way 
                // we interprite the data from the database.
                // In the database new post will still go at the end of array.
            }
        case 'DELETE_POST':
            return {
                posts: state.posts.filter(post => {
                    return post._id !== action.payload._id
                })
            }
        // case 'UPDATE_POST':
        //     return {
        //         posts: state.posts.filter(post => {
        //             return post._id === action.payload._id
        //         })
        //     }
        default:
            return state
    }
    // Now that we've created 'postsReducer' function, we must provide the 'state' and 'dispatch' as value
    // to our 'PostsContext.Provider' => value={...state, dispatch}
}


// Providing context to our application component tree
// This function will return a template => return () <-- parenthesis means we return a template
// Children property represents whatever component our PostsContextProvider wraps
export function PostsContextProvider({ children }) {


    const [state, dispatch] = useReducer(postsReducer, {
        posts: null
    })
    // First argument in useReducer() (postsReducer) is reducer function name
    // Second argument in useReducer() is the initial value for the state


    // What does useReducer() do?
    // If we wanna update the state object we first of all call the 'dispatch' function.
    // Inside dispatch we pass an object as an argument.
    // This object should have some properties:
    // 1) 'type' property ... string, ALL CAPS, that describes in 
    // words the state change that we wanna make, e.g.:
    // {type: 'CREATE_POST'}
    // 2) 'payload' property ... so any data we need to make this change, e.g:
    // payload: [{workout1}, {worlout2}, ...]
    // payload ... is any data needed for this change
    //
    // Both properties make up one single argument of the dispatch function,
    // which is called 'action'.
    // 
    // When we call 'dispatch' function our reducer is invoked (postsReducer) and dispatch passes
    // the action to it, so it can do whatever we program it to do using the information (type)
    // and data (payload).
    //
    // Now we will go up and create 'postsReducer' function





    return (
        // Wraps whatever parts of our application that need access to the context
        <PostsContext.Provider value={{...state, dispatch}}>
        {/* Right now context provider doesn't have any state, => it doesn't provide anything
            to our app. To start doing so we can add 'value' property. */}
        {/* This should be a dynamic state value, as we want it to change depending on our location and data */}

        {/* To actually use it, we need to find the place in our code, where the component that
            we want to wrap is RENDERED (called)!!!! Not the place where it is CREATED!!!!!
            Here it is 'index.js' file as we want to wrap the entire application */}
        {/* After that we need to access that component here through children properties */}
            { children }
            {/* Children property represents whatever component is wraped by our PostsContextProvider */}

        </PostsContext.Provider>
    )
}