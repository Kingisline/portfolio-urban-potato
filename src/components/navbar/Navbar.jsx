import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          className="logo"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          URBAN POTATO
        </motion.span>

        <div className="social">
          <a
            href="https://www.linkedin.com/in/kalaivanan-c/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={`${import.meta.env.BASE_URL}linkedin.png`} alt="LinkedIn" />
          </a>
          <a
            href="https://www.instagram.com/ppl_call_me_as_bad_capton?igsh=NG1tYmpsYW5jcWY="
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={`${import.meta.env.BASE_URL}instagram.png`} alt="Instagram" />
          </a>
          <a
            href="https://youtube.com/@ctrlalttech-k7j?si=L2CU2veKi0uFh6lF"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={`${import.meta.env.BASE_URL}youtube.png`} alt="YouTube" />
          </a>
          <a
            href="https://github.com/Kingisline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={`${import.meta.env.BASE_URL}github.png`} alt="GitHub" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;