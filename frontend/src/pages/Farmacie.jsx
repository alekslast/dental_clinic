import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";


import PostBanner from "../components/PostBanner";
import PostForm from "../components/PostForm";



const Farmacie = () => {

    const [posts, setPosts] = useState(null)

    const location = useLocation().pathname
    let header;
    // let newPosts;
    

    switch (location) {
        case '/stomatologie':
            header = 'Stomatologie';
            break;
        case '/beauty':
            header = 'Beauty';
            break;
        case '/farmacie':
            header = 'Farmacie';
            break;
        default:
            header = 'Welcome';
    }

    

    useEffect(() => {

        const fetchPosts = async () => {
            const response = await fetch(`${location}/posts`);
            console.log(response)
            const json = await response.json();

            // console.log(json);

            if (response.ok) {
                setPosts(json);
            }
        }

        fetchPosts();
    }, [location])

    // const newPosts = posts.filter(post => {
    //     console.log(post)
    //     return post.category === header.toLowerCase()
    // })
    // console.log(newPosts)


    return (
        <>
            <PostForm location={location} />

            <div className="farmacie">
                <h1>{header}</h1>
                <div className="posts">
                    {posts && posts.map(post => (
                        <PostBanner key={post._id} post={post} />
                    ))}

                    {/* {newPosts && newPosts.map((post) => (
                        <PostBanner key={post._id} post={post} />
                    ))} */}
                </div>
            </div>
        </>
    )
}

export default Farmacie;