import Abt_img from "../assets/About_me.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className=" pb-4">
      
      <motion.h2
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-5 mb-20 text-center text-4xl"
      >
        About <span className="text-neutral-500">Me</span>
      </motion.h2>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <motion.div
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="flex items-center justify-center "
          >
            <img
              src={Abt_img}
              alt="About"
              className=" h-[200px] md:h-[300px] lg:h-[450px] rounded-2xl"
            />
          </motion.div>
        </div>
        <motion.div
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: 100, opacity: 0 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2"
        >
          
          <p className="my-2 max-w-lg text-[rgba(246,246,246,0.71)] tracking-wider font font-thin py-6 text-center lg:text-start ">
            {ABOUT_TEXT}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
