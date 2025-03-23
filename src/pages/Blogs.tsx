import React from "react";
import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks"

export const Blogs = () =>{
  const {loading, blogs} = useBlogs();

  if(loading){
    return <div>
      <Appbar name={"User"}/>
      <div className="flex justify-center">
        <div>
          <BlogSkeleton/>
          <BlogSkeleton/>
          <BlogSkeleton/>
          <BlogSkeleton/>
          <BlogSkeleton/>
          <BlogSkeleton/>
          <BlogSkeleton/>
          <BlogSkeleton/>
          <BlogSkeleton/>
        </div>
      </div>
    </div>
  }
    return <div>
      <Appbar name = {"User"}/>
      <div className="flex justify-center">
       
       <div > 
        {blogs.map(blog=> <BlogCard
  id={blog.id}
    authorName={blog.author.name || "Anonyumus"}
    title ={blog.title}
    content ={blog.content}
    publishedDate ={"28-08-2024"}/>
        )}
       </div>
        
       </div>
    </div>
}