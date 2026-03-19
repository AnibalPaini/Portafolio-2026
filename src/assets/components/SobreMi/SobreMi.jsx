import CardContainer from "../UI/CardContainer";

const SobreMi = () => {
  return (
    <CardContainer className="h-full rounded-md py-6 sm:py-10">
      <div className="flex flex-col gap-4 md:flex-row md:gap-6">
        <div className="flex items-center gap-3 md:block md:shrink-0">
          <div className="h-24 w-24 overflow-hidden rounded-full border-2 border-blue-400">
            <img
              src="/IMG.png"
              alt="Foto de Anibal Paini"
              className="h-full w-full object-cover"
            />
          </div>
          <h2 className="text-xl font-bold text-white md:hidden">
            Anibal Paini
          </h2>
        </div>
        <div className="flex-1 text-white">
          <h2 className="hidden text-lg font-bold text-white md:block">
            Anibal Paini
          </h2>
          <div className="mt-3 rounded-md bg-gray-700 p-4 text-base leading-relaxed text-gray-200">
            <p>
              Soy Técnico Superior en Desarrollo de Software, especializado en
              el desarrollo de aplicaciones web utilizando tecnologías del stack
              MERN (MongoDB, Express, React y Node.js).
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
              construyendo proyectos propios y buscando nuevas oportunidades
              para crecer profesionalmente.
            </p>
          </div>

          <div className="mt-5 flex items-center gap-3 text-2xl">
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
      </div>
    </CardContainer>
  );
};

export default SobreMi;
