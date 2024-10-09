import React, { useEffect, useState } from "react";
import SectionTitle from "../TitleText/SectionTitle";
import LargeBlogCard from "../Cards/LargeBlogCard";
import HeroCard from "../Cards/HeroCard";
import LargeHeroBlogsCard from "../Cards/LargeHeroBlogsCard";

const RecentBlogPost = () => {
  const [recentBlogsCol, setRecentBlogsCol] = useState([]);
  const [recentBlogsTwoRow, setRecentBlogsTwoRow] = useState([]);
  const [RecentBlogsLongCol, setRecentBlogsLongCol] = useState([]);
  useEffect(() => {
    // Fetching local JSON data
    fetch("../../../public/Blogs.json") // Update with the correct path to your JSON file
      .then((response) => response.json())
      .then((data) => {
        // Filter recent blogs (e.g., last 30 days)
        const recentDate = new Date();
        recentDate.setDate(recentDate.getDate() - 30); // Get the date 30 days ago

        // Filter the blogs based on the published date
        const filteredBlogs = data.filter(
          (blog) => new Date(blog.datePublished) >= recentDate
        );
        const OneColData = filteredBlogs.slice(0, 1);
        const OneLongColData = filteredBlogs.slice(2, 3);
        const TwoRowData = filteredBlogs.slice(4, 6);
        // Update state with recent blogs
        setRecentBlogsCol(OneColData);
        setRecentBlogsTwoRow(TwoRowData);
        setRecentBlogsLongCol(OneLongColData);
      })
      .catch((error) => console.error("Error fetching blogs:", error));
  }, []); // Runs once when the component mounts
  console.log(recentBlogsCol);
  console.log(recentBlogsTwoRow);
  console.log(RecentBlogsLongCol);
  return (
    <div>
      <SectionTitle value={"Recent blog posts"} />
      <div className="md:flex gap-5">
        <div className="h-full w-fit">
          {recentBlogsCol.map((Card, idx) => (
            <LargeBlogCard
              key={idx}
              thumbnail={Card.thumbnail}
              title={Card.title}
              content={Card.content}
              author={Card.author}
              datePublished={Card.datePublished}
              tags={Card.tags}
              readingTime={Card.readingTime}
            />
          ))}
        </div>
        <div className="flex flex-col gap-5">
          {recentBlogsTwoRow.map((Card) => (
            <HeroCard
              key={Card.id}
              thumbnail={Card.thumbnail}
              title={Card.title}
              content={Card.content}
              author={Card.author}
              datePublished={Card.datePublished}
              tags={Card.tags}
              readingTime={Card.readingTime}
            />
          ))}
        </div>
      </div>
      <div>
        <div className="mt-5">
          {recentBlogsCol.map((Card, idx) => (
            <LargeHeroBlogsCard
              key={idx}
              thumbnail={Card.thumbnail}
              title={Card.title}
              content={Card.content}
              author={Card.author}
              datePublished={Card.datePublished}
              tags={Card.tags}
              readingTime={Card.readingTime}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentBlogPost;
