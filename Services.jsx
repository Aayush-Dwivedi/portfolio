import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
        I focus on  building responsive web applications
          <br />  with a focus on high-quality animations. 
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Unique</motion.b> touch
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business.
          </h1>
          <button>WHAT I DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>ReactJS</h2>
          <p>
          With expertise in ReactJS, I craft dynamic user interfaces and interactive web applications, ensuring seamless functionality and an engaging user experience. Leveraging React's component-based architecture, I create scalable and efficient solutions tailored to your needs.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>TailwindCSS</h2>
          <p>
          Utilizing TailwindCSS, I design responsive and visually appealing UIs with streamlined code. By leveraging its utility-first approach, I ensure fast development and easy maintenance, allowing for rapid prototyping and consistent design across devices.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Framer Motion</h2>
          <p>
          I harness the power of Framer Motion to bring life to interfaces through smooth animations and transitions. By incorporating custom motion designs, I enhance user engagement and create immersive experiences that captivate and delight users.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>GSAP</h2>
          <p>
          With proficiency in GSAP (GreenSock Animation Platform), I add fluid and expressive animations to web projects, elevating user interactions and storytelling. Through precise control and creativity, I bring your designs to life with stunning visuals and seamless motion.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
