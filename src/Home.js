
import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    const {data: blogs, isPending, err} = useFetch("http://localhost:8000/blogs");
    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter((blog)=>(blog.id != id));
    //     setBlogs(newBlogs);

    // };

   // console.log(blogs);

    const[name, setName] = useState ("mario");
    // const handleClick = (name,e) => {
    //   //  name = "nano"; //change but not rendered => need hook
    // //   setName("nano"); // trigger react to re-render the template
    // //   setAge("80"); 
    //     //console.log(`hello, ${name}`, e.target);
    // };

    

    return (
        <div className="home">
            {err && <div>{err}</div>}
            {isPending && <div>loading...</div>}
            {blogs && <BlogList blogs={blogs} title={"All blogs!"}/>}
            <button onClick={()=>{setName("Jose")}}>change name</button>
            <p>{name}</p>
            {/* <BlogList blogs={blogs.filter((blog)=>(blog.author=="mario"))} title = {"maro's blog!"} handleDelete={handleDelete}/> */}
        </div>
    );
}

export default Home;