import { useParams } from "react-router-dom"
import blogs from '../../../../public/Blogs.json'
import { MdOutlineArrowOutward } from "react-icons/md";
import thumbnail from '../../../assets/1600w-96HZcTYEWQA.webp'


const SingleBlog = () => {
 const {id} = useParams();
 const blog = blogs.find((blog) => blog.id === parseInt(id));
console.log(blog);
  return (
    <div>
        <img className="h-44 md:h-80 w-full" src={thumbnail} alt="" />
        <div className="px-3">
      <span className="flex justify-between text-sm md:text-md text-[#6941C6] my-1 md:my-3">
        <p>{blog.author}</p><p>{blog.formattedDate}</p><p>{blog.readingTime}</p>
      </span>
      <span className="flex items-center justify-between">
        <p className="text-md md:text-2xl font-bold my-2 md:my-3">{blog.title}</p>
        <MdOutlineArrowOutward className="h-6 w-6 md:mr-5" />
      </span>

      <p className="md:text-lg">{blog.content}</p>
     <span className="flex  gap-2">
     {
        blog.tags.map(tag =>(
          <p className="text-[#027A48]  md:text-lg font-semibold mb-2">{tag}</p>
        ))
      }
     </span>
     
    </div>
    </div>
  )
}

export default SingleBlog
