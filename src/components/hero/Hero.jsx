import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType:"mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          {/* <motion.h2 variants={textVariants}>HARVEY TYLER</motion.h2> */}
          <motion.h1 variants={textVariants}>
            From Sensors to Software
            <br />
            We Build It All
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>
              See Our Work
            </motion.button>
            <motion.button variants={textVariants}>Partner With Us</motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
       We Design, Build, and Ship
      </motion.div>
      <div className="imageContainer">
      <video
          src="/video.mp4"       
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-right"  // adjust as needed
        />
        {/* <img src={import.meta.env.BASE_URL +"./right.png"} alt="" /> */}
      </div>
    </div>
  );
};

export default Hero;