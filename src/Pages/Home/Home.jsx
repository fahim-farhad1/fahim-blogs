import AllBlogsPost from "../../Components/Sections/AllBlogsPost";
import RecentBlogPost from "../../Components/Sections/RecentBlogPost";

const Home = () => {
   
  return (
    <div>
      {/* banner start  */}
      {/* <img className="w-full md:h-[600px]" src={bannerImg} alt="" /> */}
      <p className="md:text-[250px] text-6xl font-semibold text-center my-5">THE BLOG</p>
      <hr />
      {/* banner end  */}
        <RecentBlogPost />
        <AllBlogsPost />
    </div>
  );
};

export default Home;
