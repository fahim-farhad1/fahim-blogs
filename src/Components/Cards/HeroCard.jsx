import React from "react";
import thumbnail from "../../assets/1600w-96HZcTYEWQA.webp";
import { MdOutlineArrowOutward } from "react-icons/md";
import moment from "moment";

const HeroCard = ({title,content,author,datePublished,tags,readingTime}) => {
  const formattedDate = moment(datePublished).format('D MMMM YYYY');
  return (
    <div className="border my-5 md:my-0">
      <div className="md:flex md:h-full">
      <img
        className="h-44 md:h-56 w-fit"
        src={thumbnail}
        alt="Blog thumbnail"
      />
      <div className="px-3">
        <span className="flex justify-between text-sm md:text-md text-[#6941C6] my-1 md:my-3">
          <p>{author}</p><p>{formattedDate}</p><p>{readingTime}</p>
        </span>
        <span className="flex items-center justify-between">
          <p className="text-md md:text-2xl font-bold my-2 md:my-3">{title}</p>
          <MdOutlineArrowOutward className="h-6 w-6 md:mr-5" />
        </span>

        <p className="md:text-lg">{content}</p>
       <span className="flex  gap-2">
       {
          tags.map(tag =>(
            <p className="text-[#027A48]  md:text-lg font-semibold mb-2">{tag}</p>
          ))
        }
       </span>
       
      </div>
      </div>
    </div>
  )
}

export default HeroCard
