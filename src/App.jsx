import React from "react";
import Header from "./assets/components/Header/Header";
import SobreMi from "./assets/components/SobreMi/SobreMi";
import Tecnologias from "./assets/components/Tecnologias/Tecnologias";
import Proyectos from "./assets/components/Proyectos/Proyectos";
import Experiencia from "./assets/components/Experiencia/Experiencia";
import Educacion from "./assets/components/Educacion/Educacion";
import Contacto from "./assets/components/Contacto/Contacto";
import Footer from "./assets/components/Footer/Footer";
import { motion, useScroll } from "motion/react";

const App = () => {
  const { scrollYProgress } = useScroll();
  const fadeUp = {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <>
      <div className="bg-gray-900">
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-blue-500 z-50 origin-left"
          style={{ scaleX: scrollYProgress }}
        />
        <Header />

        <section className="grid grid-cols-1 items-stretch gap-4 max-w-7xl mx-auto px-4 py-10 text-white md:grid-cols-3">
          <motion.div
            className="h-full md:col-span-2"
            initial={{ opacity: 0, x: -100 }} // empieza fuera a la izquierda
            whileInView={{ opacity: 1, x: 0 }} // entra a su posición
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <SobreMi />
          </motion.div>
          <motion.div
            className="h-full md:col-span-1"
            initial={{ opacity: 0, x: 100 }} // empieza fuera a la izquierda
            whileInView={{ opacity: 1, x: 0 }} // entra a su posición
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Tecnologias />
          </motion.div>
        </section>

        <motion.section
          className="max-w-7xl mx-auto px-4 pb-10 text-white"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Proyectos />
        </motion.section>

        <motion.section
          className="max-w-7xl mx-auto px-4 pb-10 text-white"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Experiencia />
        </motion.section>

        <motion.section
          className="max-w-7xl mx-auto px-4 pb-10 text-white"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Educacion />
        </motion.section>

        <motion.section
          className="max-w-7xl mx-auto px-4 pb-10 text-white"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Contacto />
        </motion.section>

        <Footer />
      </div>
    </>
  );
};

export default App;
