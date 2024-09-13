import React from "react";
import Contact_me from "../assets/Contact_me.jpg";
import Contact from "../assets/contact.jpg";
import { CONTACT } from "../constants";
import Swal from "sweetalert2";
import { motion } from "framer-motion";

const Get_in_Touch = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e081eea1-7cbc-48f0-b833-c96d41dd49da");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your Message has been sent.",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id="contact" className="border-b border-neutral-900">
      <motion.h2
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="my-5 text-center text-4xl"
      >
        Get in Touch
      </motion.h2>
      <div className="text-center tracking-tighter mb-6">
        <motion.div
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a href="tel:9034952636" className="my-2">
            {CONTACT.phoneNo}
          </a>
        </motion.div>
        <motion.div
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a href="mailto:somansh2002@gmail.com" className="my-4 border-b ">
            {CONTACT.email}
          </a>
        </motion.div>
      </div>

      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:px-8">
          <form
            onSubmit={onSubmit}
            className="flex flex-col gap-8 m-10 lg:m-20 "
          >
            <motion.div
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className=" flex flex-col gap-3 text-white"
            >
              <label>Your Name*</label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                required
                className="p-3 rounded-lg bg-slate-900 shadow-slate-600 shadow"
              />
            </motion.div>
            <motion.div
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className=" flex flex-col gap-3 text-white"
            >
              <label>Your E-mail*</label>
              <input
                type="text"
                name="email"
                placeholder="E-mail"
                required
                className="p-3 rounded-lg bg-slate-900 shadow-slate-600 shadow"
              />
            </motion.div>
            <motion.div
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className=" flex flex-col gap-3 text-white"
            >
              <label>Your Message*</label>
              <textarea
                type="text"
                name="message"
                placeholder="Message"
                required
                className="p-3 rounded-lg bg-slate-900 shadow-slate-600 shadow"
              />
            </motion.div>

            <motion.button
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.5 }}
              type="submit"
              className="bg-slate-800 hover:bg-slate-600 shadow-slate-400 shadow h-8 rounded-lg  "
            >
              Send
            </motion.button>
          </form>
        </div>
        <div className="w-full lg:w-1/2 lg:px-8">
          <motion.div
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: 100, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center"
          >
            <img
              src={Contact}
              alt="Contact"
              height={450}
              width={450}
              className="rounded-lg hidden lg:block"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Get_in_Touch;
