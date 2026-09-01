import { useRef } from "react";
import "./Portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Smartwatch Stress Detector",
    img: "/1.jpg",
    desc: "ESP32-C3 + MAX30102 + XGBoost ML model to detect and notify high stress levels.",
    button: "https://github.com/Kingisline/esp32-Stress-Prediction-using-Machine-learning",
  },
  {
    id: 2,
    title: "DIY VR",
    img: "/2.jpg",
    desc: "	A VR headset using MPU6050 for immersive head tracking, acting like a game controller.",
    button: "https://github.com/Kingisline/Virtual-Reality-with-Gesture-Control",
  },
  {
    id: 3,
    title: "Ad Blocker with Raspberry Pi",
    img: "/3.jpg",
    desc: "	A network-wide ad-blocking solution using Pi-hole on Raspberry Pi connected to home Wi-Fi.",
    button: "https://github.com/Kingisline/-Raspberry-Pi-Zero-W-Alblocker",
  },
  {
    id: 4,
    title: "College Management App",
    img: "/4.jpg",
    desc: "A platform for managing student info, courses, and assignments with a modern UI using Next.js and Tailwind CSS, database using PostgreSQL and authentication using JWT.",
    button: "https://github.com/Kingisline/Next.js-Full-Stack-School-Management-App",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.button}> <button>See Demo</button> </a>
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
