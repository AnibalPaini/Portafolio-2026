import React from "react";
import Header from "./assets/components/Header/Header";
import SobreMi from "./assets/components/SobreMi/SobreMi";
import Tecnologias from "./assets/components/Tecnologias/Tecnologias";
import Proyectos from "./assets/components/Proyectos/Proyectos";
import Experiencia from "./assets/components/Experiencia/Experiencia";
import Educacion from "./assets/components/Educacion/Educacion";

const App = () => {
  return (
    <div className="bg-gray-900">
      <Header />
      <section className="grid grid-cols-1 items-stretch gap-4 max-w-7xl mx-auto px-4 py-10 text-white md:grid-cols-3">
        <div className="h-full md:col-span-2">
          <SobreMi />
        </div>
        <div className="h-full md:col-span-1">
          <Tecnologias />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-10 text-white">
        <Proyectos />
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-10 text-white">
        <Experiencia />
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-10 text-white">
        <Educacion />
      </section>
    </div>
  );
};

export default App;
