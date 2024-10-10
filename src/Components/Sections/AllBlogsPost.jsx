import React, { useEffect, useState } from "react";
import SectionTitle from "../TitleText/SectionTitle";
import LargeBlogCard from "../Cards/LargeBlogCard";

const AllBlogsPost = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    fetch("../../../public/Blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  console.log(blogs);

  const blogsPerPage = 12; // Set how many blogs you want per page
  // Calculate total number of pages
  const totalPages = Math.ceil(blogs.length / blogsPerPage);
  // Get the current blogs for the current page
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);
  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div>
      <SectionTitle value={"All blog post"} />
      <div className="md:grid grid-cols-3 gap-5">
        {currentBlogs.map((blog, idx) => (
          <LargeBlogCard
            key={idx}
            thumbnail={blog.thumbnail}
            title={blog.title}
            content={blog.content}
            author={blog.author}
            datePublished={blog.datePublished}
            tags={blog.tags}
            readingTime={blog.readingTime}
          />
        ))}
      </div>
      {/* Pagination controls */}
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <input
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            type="radio"
            name="options"
            className="join-item btn btn-square"
            aria-label={index + 1}

          ></input>
        ))}
      </div>
    </div>
  );
};

export default AllBlogsPost;
