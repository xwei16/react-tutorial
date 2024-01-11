import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";
const BlogDetails = () => {
    const {id } = useParams();
    const {data:blog, error, isPending} = useFetch("http://localhost:8000/blogs/"+id);
   // console.log(blog);

   const history = useHistory();

   const handleDelete = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, 
    {
        method: "DELETE"
    }).then(()=>{
        history.push("/");
    });
   }
    return (
        <div className="blog-details">
            {isPending && <div>loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>wrriten by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleDelete}>Delete </button>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;