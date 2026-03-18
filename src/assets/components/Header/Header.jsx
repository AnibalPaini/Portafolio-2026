import React from "react";

const Header = () => {
  return (
    <header className="py-5 bg-gray-950 ">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center w-full">
        <h1 className="text-3xl text-white font-bold">Anibal E. Paini</h1>
        <nav>
          <ul className="flex gap-5 text-white">
            <li>
              <a href="#sobre-mi">Inicio</a>
            </li>
            <li>
              <a href="#proyectos">Proyectos</a>
            </li>
            <li>
              <a href="#experiencia">Experiencia</a>
            </li>
            <li>
              <a href="#educacion">Educación</a>
            </li>
            <li>
              <a href="#contacto">Contacto</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
