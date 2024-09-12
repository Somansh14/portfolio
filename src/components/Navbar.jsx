import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div>
      <nav className="mb-20 lg:mx-32 flex items-center justify-between py-6 lg:pt-12">
        <div className="flex items-center flex-shrink-0">
          <motion.a
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            href="/"
            className=" font-Baskervville text-3xl  font-bold"
          >
            Sn
          </motion.a>
        </div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <a
            href="https://drive.google.com/file/d/1OIb2y9hqEDLsPTM6p2W7UXp9ovma3qg4/view?usp=drivesdk"
            target="_blank"
            className="px-8 py-2 text-2xl bg-[rgba(255,255,255,0.04)] hover:border hover:border-slate-600  ease-in duration-300 rounded-xl"
          >
            Resume
          </a>
        </motion.div>
      </nav>
    </div>
  );
};

export default Navbar;
