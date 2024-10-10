import bannerImg from "../../assets/1600w-96HZcTYEWQA.webp";
import AllBlogsPost from "../../Components/Sections/AllBlogsPost";
import RecentBlogPost from "../../Components/Sections/RecentBlogPost";

const Home = () => {
   
  return (
    <div>
      {/* banner start  */}
      <img className="w-full md:h-[600px]" src={bannerImg} alt="" />
      {/* banner end  */}
        <RecentBlogPost />
        <AllBlogsPost />
    </div>
  );
};

export default Home;
