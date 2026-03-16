import React from "react";

const SobreMi = () => {
  return (
    <div className="bg-gray-800 p-6 flex gap-4">
      <div className="flex-shrink-0">
        <div className="rounded-full h-24 w-24 overflow-hidden border-2 border-blue-400">
          <img
            src="/IMG.png"
            alt="Foto de Anibal"
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-lg font-bold text-white mt-3">Anibal</h2>
        <p className="text-sm text-gray-400">@anibal.dev</p>
      </div>
      <div className="flex-1 text-white">
        <p className="text-base leading-relaxed text-gray-300">
          Soy Técnico Superior en Desarrollo de Software, con experiencia en el
          desarrollo de aplicaciones web utilizando stack MERN. Me gusta crear
          productos web completos: desde la lógica del backend hasta la
          experiencia del usuario en el frontend. Actualmente sigo aprendiendo,
          construyendo proyectos y mejorando mis habilidades en desarrollo web
          moderno.
        </p>
      </div>
    </div>
  );
};

export default SobreMi;
