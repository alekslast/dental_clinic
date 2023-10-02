//----------------------------Packages----------------------------
import React from 'react';
import ReactDOM from 'react-dom/client';


//---------------------------Components---------------------------
import App from './App';
import { PostsContextProvider } from './context/PostContext';  // Component that we need to wrap our <App /> with in order
                                                               // to give access to the context


//-----------------------------Styles-----------------------------
import './styles.css';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <PostsContextProvider>
            {/* Now, as we have wrapped our App component we can go back to Context component and we can
                destructure the children property from the 'props'.
                Children property represents whatevet component is wrapped with Context component */}
            <App />
        </PostsContextProvider>
    </React.StrictMode>
);
