import "./App.css";
import { motion } from "framer-motion";

import fotoPrincipal from "../src/images/foto-principal.png";
import dom from "../src/images/dom.jpg";
import marie from "../src/images/marie.jpg";
import capitu from "../src/images/capitu.jpg";

const images = [fotoPrincipal, dom, marie, capitu];

function App() {
  return (
    <div className="App">
      <motion.div className="carousel">
        <motion.div className="inner">
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
