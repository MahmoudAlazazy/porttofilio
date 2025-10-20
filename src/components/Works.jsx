import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { github } from "../assets";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_website_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl min-w-[280px] sm:w-[280px] h-full flex flex-col"
      >
        <div
          className="w-full h-[220px] relative cursor-pointer"
          onClick={() => {
            window.open(live_website_link, "_blank");
          }}
        >
          <img
            src={image}
            alt={name}
            loading="lazy"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end mt-3 card-img_hover">
            <div
              onClick={(e) => {
                e.stopPropagation();
                window.open(source_code_link, "_blank");
              }}
              className="black-gradient w-10 h-10 rounded-full flex items-center justify-center cursor-pointer"
            >
              <img
                src={github}
                alt="GitHub Icon"
                loading="lazy"
                width="50%"
                height="50%"
                className="object-contain w-1/2 h-1/2"
              />
            </div>
          </div>
        </div>
        <div className="mt-5 flex-grow">
          <h3 className="text-white font-bold text-[22px]">{name}</h3>
          <p className="text-secondary mt-4 text-[15px] flex-grow">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`${tag.color} text-[14px]`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Things I've Built </p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] sm:text-[17px] max-w-3xl sm:leading-[30px] leading-1"
        >
       Here are some of the projects I've built using modern mobile and web technologies.
       From clean UI design to seamless backend integration, each project highlights
       my hands-on experience in developing scalable, high-performance Flutter applications.
       Live demos and source code are available, showcasing my ability to create real,
        functional apps with great user experience.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-col gap-6">
        {/* First row with 7 projects and custom scrollbar */}
        <div className="custom-scrollbar overflow-x-auto pb-4">
          <div className="flex gap-6 min-w-max">
            {projects.slice(0, 7).map((project, index) => (
              <ProjectCard key={`project-${index}`} {...project} index={index} />
            ))}
          </div>
        </div>
        {/* Second row with remaining projects and custom scrollbar */}
        <div className="custom-scrollbar overflow-x-auto pb-4">
          <div className="flex gap-6 min-w-max">
            {projects.slice(7, 14).map((project, index) => (
              <ProjectCard key={`project-${index + 7}`} {...project} index={index + 7} />
            ))}
          </div>
        </div>
      </div>
      
      {/* Custom CSS for dot-style scrollbar */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          height: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #4B5563; /* gray-600 */
          border-radius: 5px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #9CA3AF; /* gray-400 */
        }
      `}</style>
    </>
  );
};

export default SectionWrapper(Works, "");