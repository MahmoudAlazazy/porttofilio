import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { slideIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { github, linkedin } from "../assets";
import { useForm, ValidationError } from "@formspree/react"; // ✅ Formspree import

const Contact = () => {
  const formRef = useRef();

  // ✅ استخدم useForm من Formspree
  const [state, handleSubmit] = useForm("xanljpgw");
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // ✅ لما ينجح الإرسال، نظف الحقول
  if (state.succeeded) {
    setTimeout(() => {
      setForm({ name: "", email: "", message: "" });
    }, 1000);
  }

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <div className="flex items-center gap-4">
          <p className={styles.sectionSubText}>Get in touch</p>
          <div className="flex gap-3">
            {/* GitHub */}
            <a href="https://github.com/MahmoudAlazazy" target="_blank" rel="noopener noreferrer">
              <img
                src={github}
                alt="GitHub"
                className="w-8 h-8 cursor-pointer hover:opacity-80 transition-opacity"
              />
            </a>
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/mahmoud-mohamed-ahmed-20b007367/" target="_blank" rel="noopener noreferrer">
              <img
                src={linkedin}
                alt="LinkedIn"
                className="w-8 h-8 cursor-pointer hover:opacity-80 transition-opacity"
              />
            </a>
          </div>
        </div>

        <h3 className={styles.sectionHeadText}>Contact.</h3>

        {/* ✅ استخدم handleSubmit من Formspree */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          {/* Name */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              id="name"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              required
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </label>

          {/* Email */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              id="email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              required
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </label>

          {/* Message */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              id="message"
              rows={5}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              required
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </label>

          {/* Button */}
          <button
            type="submit"
            disabled={state.submitting}
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {state.submitting ? "Sending..." : "Send"}
          </button>

          {/* Success Message */}
          {state.succeeded && (
            <p className="text-green-400 font-medium mt-4">
              ✅ Thank you! Your message has been sent successfully.
            </p>
          )}
        </form>
      </motion.div>

      {/* Earth 3D Canvas */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
