import CardContainer from "../UI/CardContainer";

const SobreMi = () => {
  return (
    <CardContainer className="h-full flex gap-4 rounded-md py-10">
      <div className="shrink-0">
        <div className="rounded-full h-24 w-24 overflow-hidden border-2 border-blue-400">
          <img
            src="/IMG.png"
            alt="Foto de Anibal Paini"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="flex-1 text-white">
        <h2 className="text-lg font-bold text-white ">Anibal Paini</h2>
        <div className="text-base leading-relaxed text-gray-200 mt-3 bg-gray-700 p-4 rounded-md">
          <p>
            Soy Técnico Superior en Desarrollo de Software, especializado en el
            desarrollo de aplicaciones web utilizando tecnologías del stack MERN
            (MongoDB, Express, React y Node.js).
          </p>

          <p className="mt-1">
            Me enfoco en crear soluciones completas y funcionales, abarcando
            tanto la lógica del backend como la experiencia del usuario en el
            frontend. He desarrollado proyectos como sistemas de reservas,
            paneles administrativos y aplicaciones con integración de APIs y
            bases de datos.
          </p>

          {/* <p className="mt-1">
            Disfruto resolver problemas reales a través del código, priorizando
            la usabilidad, el rendimiento y la escalabilidad de las
            aplicaciones.
          </p> */}

          <p className="mt-1">
            Actualmente continúo formándome en desarrollo web moderno,
            construyendo proyectos propios y buscando nuevas oportunidades para
            crecer profesionalmente.
          </p>
        </div>

        <div className="flex items-center gap-2 mt-5 text-2xl">
          <a
            href="https://github.com/AnibalPaini"
            target="_blank"
            rel="noreferrer"
            className="hover:scale-105 transition-transform duration-200 cursor-pointer"
          >
            <i className="devicon-github-original"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/anibal-paini-0226152b6"
            target="_blank"
            rel="noreferrer"
            className="hover:scale-105 transition-transform duration-200 cursor-pointer"
          >
            <i className="devicon-linkedin-plain hover:scale-105 transition-transform duration-200 cursor-pointer"></i>
          </a>
        </div>
      </div>
    </CardContainer>
  );
};

export default SobreMi;
