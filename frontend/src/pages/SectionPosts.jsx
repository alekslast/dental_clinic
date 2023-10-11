// React Hooks
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// Components
import PostBanner from "../components/PostBanner";
import PostForm from "../components/PostForm";



function SectionPosts() {

    const [posts, setPosts] = useState(null)

    const location = useLocation().pathname
    let header;
    

    switch (location) {
        case '/stomatologie/posts':
            header = 'Stomatologie';
            break;
        case '/beauty/posts':
            header = 'Beauty';
            break;
        case '/farmacie/posts':
            header = 'Farmacie';
            break;
        default:
            header = 'Welcome';
    }

    

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch(`${location}`);
            // console.log(response)
            const json = await response.json();

            if (response.ok) {
                setPosts(json);
            }
        }

        fetchPosts();
    }, [location])


    return (
        <>
            <PostForm location={location} />

            <div className="farmacie">
                <h1>{header}</h1>
                <div className="posts">
                    {posts && posts.map(post => (
                        <PostBanner key={post._id} post={post} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default SectionPosts;