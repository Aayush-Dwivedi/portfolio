import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Music Player",
    img: "https://images.unsplash.com/photo-1600497900863-2dfbeedb06a0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: " A highly responsive music player that seamlessly adapts to various screen sizes and devices. Its intuitive design ensures smooth navigation and playback controls, providing users with an immersive listening experience. With optimized performance and compatibility, this music player offers a seamless and enjoyable interface for music enthusiasts across platforms.",
    demoLink: "https://raih1107.github.io/Music-player/",
  },
  {
    id: 2,
    title: "To Do List",
    img: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "Designed with a sleek and intuitive user interface, my responsive to-do list elevates task management. Its visually appealing layout enhances usability, making it a delightful experience to stay organized and productive across devices.",
    demoLink: "https://raih1107.github.io/To-Do-list-/index1.html",
  },
  {
    id: 3,
    title: "3D animation website",
    img: "https://fullrotation.com/wp-content/uploads/2021/08/Xpon_frame_136_forweb.jpg",
    desc: "Immersive 3D effects is a digital journey like no other. It transports users into a dynamic world where scrolling unveils captivating layers and animations, creating a mesmerizing experience. This innovative design blurs the line between digital and reality, leaving a lasting impression.",
    demoLink: "https://raih1107.github.io/3d-animation/",
  },
  {
    id: 4,
    title: "Whack A Mole Game",
    img: "https://media.istockphoto.com/id/1153033854/vector/a-game-to-hit-the-mole.jpg?s=612x612&w=0&k=20&c=Zugmk3xO6JASmNN4sNwpaekrstBXjUA2fdIAJRi3v5Y=",
    desc: "Experience the excitement of Whack a Mole, a fast-paced game testing your reflexes and precision as you aim to whack pesky moles before they vanish.",
    demoLink: "https://raih1107.github.io/whack-a-mole-game/",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.demoLink} target="_blank" rel="noopener noreferrer">
              <button>See Demo</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
