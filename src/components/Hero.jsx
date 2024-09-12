// import { Link } from "react-router-dom";

import { FaReact } from "react-icons/fa";

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { BsFiletypeSql } from "react-icons/bs";
import { FaRegDotCircle } from "react-icons/fa";

import { motion } from "framer-motion";

const animation = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});
const tech_animaton = (duration) => ({
  initial: { y: 0 },
  whileInView: {
    x: [5, -5],
    y: [15, -15],
    boxShadow: "0px 0px 30px 0px rgba(250, 250, 250,0.5 )",
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Hero = () => {
  return (
    <div className="border-neutral-900 pb-4 lg:mb-36">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={animation(0.3)}
              initial="hidden"
              whileInView="visible"
              className="pb-8 text-4xl font-thin tracking-tight lg:ml-28 lg:mt-16 lg:text-6xl "
            >
              Somansh <br /> <p className="lg:ml-10">Nandkani</p>
            </motion.h1>
            <motion.span
              variants={animation(0.5)}
              initial="hidden"
              whileInView="visible"
              className="lg:ml-28  bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl md:text-3xl lg:text-4xl text-transparent"
            >
              Software Developer
            </motion.span>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex flex-col  fixed -right-20 lg:right-10  gap-2 text-xs ">
            <motion.button
              initial={{ scale: 2, opacity: 0 }}
              whileInView={{
                scale: 1,
                opacity: 1,
                duration: 2,
                transition: { duration: 0.5, delay: 0.3 },
              }}
              onClick={() => {
                window.scroll({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              <div className="h-2 w-2 rounded-full border-white border-2"></div>
            </motion.button>
            <motion.button
              initial={{ scale: 2, opacity: 0 }}
              whileInView={{
                scale: 1,
                opacity: 1,
                duration: 2,
                transition: { duration: 0.5, delay: 0.6 },
              }}
              onClick={() => {
                window.scroll({
                  top: 750,
                  behavior: "smooth",
                });
              }}
            >
              <div className="h-2 w-2 rounded-full border-white border-2"></div>
            </motion.button>
            <motion.button
              initial={{ scale: 2, opacity: 0 }}
              whileInView={{
                scale: 1,
                opacity: 1,
                duration: 2,
                transition: { duration: 0.5, delay: 0.9 },
              }}
              onClick={() => {
                window.scroll({
                  top: 1520,
                  behavior: "smooth",
                });
              }}
            >
              <div className="h-2 w-2 rounded-full border-white border-2"></div>
            </motion.button>
            <motion.button
              initial={{ scale: 2, opacity: 0 }}
              whileInView={{
                scale: 1,
                opacity: 1,
                duration: 2,
                transition: { duration: 0.5, delay: 1.2 },
              }}
              onClick={() => {
                window.scroll({
                  top: 2300,
                  behavior: "smooth",
                });
              }}
            >
              <div className="h-2 w-2 rounded-full border-white border-2"></div>
            </motion.button>
          </div>
          <div className="flex flex-row-reverse pt-20 lg:pt-44 gap-4 pr-10 text-neutral-400 text-3xl">
            <a target="_blank" href="https://www.instagram.com/_somansh_14_">
              <FaInstagram className="hover:text-pink-500 hover:scale-110" />
            </a>
            <a href="https://github.com/Somansh14" target="_blank">
              <FaGithub className="hover:text-white hover:scale-110" />
            </a>
            <a
              href="https://www.linkedin.com/in/somansh-nandkani-bb6215322"
              target="_blank"
            >
              <FaLinkedin className="hover:text-blue-500  p-0 hover:scale-110" />
            </a>
          </div>
          <div className=" pt-10">
            <motion.p
              variants={animation(0.9)}
              initial="hidden"
              whileInView="visible"
              className="text-xl item-center text-center lg:text-left antialiased tracking-wide "
            >
              Technologies:
            </motion.p>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="  flex flex-wrap mt-12 gap-10 text-2xl md:text-3xl lg:text-4xl"
            >
              <motion.div
                variants={tech_animaton(3)}
                initial="initial"
                whileInView="whileInView"
                className="rounded-2xl  border-2 border-neutral-500 p-4"
              >
                <FaHtml5 className="text-amber-500" />
              </motion.div>
              <motion.div
                variants={tech_animaton(3.6)}
                initial="initial"
                whileInView="whileInView"
                className="rounded-2xl  border-2 border-neutral-500 p-4"
              >
                <FaCss3Alt className="text-sky-600" />
              </motion.div>
              <motion.div
                variants={tech_animaton(4.2)}
                initial="initial"
                whileInView="whileInView"
                className="rounded-2xl  border-2 border-neutral-500 p-4"
              >
                <FaJs className="text-yellow-300" />
              </motion.div>
              <motion.div
                variants={tech_animaton(4.8)}
                initial="initial"
                whileInView="whileInView"
                className="rounded-2xl  border-2 border-neutral-500 p-4"
              >
                <FaReact className="text-cyan-400" />
              </motion.div>
              <motion.div
                variants={tech_animaton(5.4)}
                initial="initial"
                whileInView="whileInView"
                className="rounded-2xl  border-2 border-neutral-500 p-4"
              >
                <RiTailwindCssFill className="text-cyan-600" />
              </motion.div>
              <motion.div
                variants={tech_animaton(6)}
                initial="initial"
                whileInView="whileInView"
                className="rounded-2xl  border-2 border-neutral-500 p-4"
              >
                <BsFiletypeSql className="text-amber-500" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
