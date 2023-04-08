import { useState, useEffect, useRef } from "react";
import "./App.css";
import { motion } from "framer-motion";

import fotoPrincipal from "../src/images/foto-principal.png";
import dom from "../src/images/dom.jpg";
import marie from "../src/images/marie.jpg";
import capitu from "../src/images/capitu.jpg";
import laila from "../src/images/laila.jpg";
import cindy from "../src/images/cindy.jpg";
import pretinha from "../src/images/pretinha.jpg";

const images = [fotoPrincipal, dom, marie, capitu, laila, cindy, pretinha];

function App() {
  const carousel = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth);
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

  return (
    <div className="App">
      <motion.div
        ref={carousel}
        className="carousel"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          className="inner"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {images.map((image) => (
            <motion.div className="item" key={image}>
              <img src={image} alt="Texto alt" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default App;
