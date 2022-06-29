import React, { useState } from "react";
import Blog from "./components/Blog"
import BlogList from "./components/BlogList";
import "./App.css"

  const blogDATA = [{
    title: 'Original IPSUM Blog',
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates necessitatibus tenetur dolores, quas, placeat optio itaque illo labore excepturi possimus quasi quae repudiandae deleniti cum beatae sint commodi? Quaerat, expedita?"
},
{
    title: "Samuel L. IPSUM Blog",
    body: "Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing."
},
{
    title: "Cheese IPSUM Blog",
    body: "Cheese on toast airedale the big cheese. Danish fontina cheesy grin airedale danish fontina taleggio the big cheese macaroni cheese port-salut. Edam fromage lancashire feta caerphilly everyone loves chalk and cheese brie. Red leicester parmesan cheese and biscuits cheesy feet blue castello cheesecake fromage frais smelly cheese."
}]

export default function App() {

    const [blogs, setBlogs] = useState(blogDATA);
    const [selection, setSelection] = useState(null);
    
    return(
        <div className="container">
            <div className="blog-list">
                <BlogList blogs={blogs} setSelection={setSelection} />
            </div>
            
            <div className="blog">
                {selection && <Blog blog={selection}/>}
            </div>
        </div>      
    )
}




