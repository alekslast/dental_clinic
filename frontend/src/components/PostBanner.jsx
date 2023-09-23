

export default function PostBanner(props) {

    const { post } = props

    return (
        <div className="post--banner">
            <h4>
                <strong>{post.postTitle}</strong>
            </h4>

            <p>
                {post.postBody}
            </p>

            <p>{post.createdAt}</p>
        </div>
    )
}