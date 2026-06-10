import { useState } from "react";
import CardContainer from "../UI/CardContainer";

const listadoProyectos = [
  {
    nombre: "CanchasYa",
    tecnologias: [
      "React",
      "Node.js",
      "Express",
      "Tailwind CSS",
      "MongoDB",
      "JWT",
      "Mercado Pago",
    ],
    descripcion:
      "Aplicación web SaaS orientada a complejos deportivos para gestionar canchas, reservas y pagos. También permite a clientes reservar de manera simple e incluye envío de correos para recordar turnos.",
    imagenes: [
      "/proyectos/CanchasYa.webp",
      "/proyectos/CanchasYa (2).webp",
      "/proyectos/CanchasYa (3).webp",
      "/proyectos/CanchasYa (4).webp",
      "/proyectos/CanchasYa (5).webp",
      "/proyectos/CanchasYa (6).webp",
      "/proyectos/CanchasYa (7).webp",
      "/proyectos/CanchasYa (8).webp",
      "/proyectos/CanchasYa (9).webp",
    ],
    gitUrl: null,
    gitEstado: "Privado",
    webUrl: null,
    webEstado: "Privada",
    estado: "Próximamente disponible",
  },
  {
    nombre: "PingStatus",
    tecnologias: [
      "React",
      "Node.js",
      "Express",
      "Tailwind CSS",
      "MongoDB",
      "JWT",
      "Socket.io",
    ],
    descripcion:
      "Aplicación para monitorear con pings componentes de red o sistemas web, con alertas de Telegram cuando cambia el estado de un dispositivo. En host gratuito solo se visualiza la parte de interfaz y funciones básicas.",
    imagenes: [
      "/proyectos/PingStatus.webp",
      "/proyectos/PingStatus2.webp",
      "/proyectos/PingStatus3.webp",
      "/proyectos/PingStatus4.webp",
      "/proyectos/PingStatus5.webp",
      "/proyectos/PingStatus6.webp",
      "/proyectos/PingStatus7.webp",
      "/proyectos/PingStatus8.webp",
    ],
    gitUrl: "https://github.com/AnibalPaini/PingStatus",
    webUrl: "https://pingstatus.netlify.app/",
    estado: null,
  },
  {
    nombre: "BoletoWeb",
    tecnologias: ["React", "Node.js", "Express", "CSS"],
    descripcion:
      "Rediseño de la página original de BoletoWeb con una interfaz más moderna y amigable. Desde backend se parsean los datos recibidos desde la página original.",
    imagenes: [
      "/proyectos/BoletoWeb.webp",
      "/proyectos/BoletoWeb (2).webp",
      "/proyectos/BoletoWeb (3).webp",
    ],
    gitUrl: null,
    gitEstado: "No disponible",
    webUrl: "https://consultadeuda.santarosa.gob.ar/",
    estado: null,
  },
  {
    nombre: "PodaWeb",
    tecnologias: [
      "React",
      "Node.js",
      "Express",
      "Tailwind CSS",
      "MongoDB",
      "JWT",
    ],
    descripcion:
      "Aplicación para la Municipalidad de Santa Rosa donde vecinos solicitan poda de árboles y los inspectores analizan cada solicitud para aprobarla o rechazarla. Incluye notificaciones por email con Nodemailer.",
    imagenes: [
      "/proyectos/PodaWeb1.webp",
      "/proyectos/PodaWeb2.webp",
      "/proyectos/PodaWeb3.webp",
      "/proyectos/PodaWeb4.webp",
      "/proyectos/PodaWeb5.webp",
      "/proyectos/PodaWeb6.webp",
      "/proyectos/PodaWeb7.webp",
    ],
    gitUrl: null,
    gitEstado: "No disponible",
    webUrl: "https://podaresponsable.santarosa.gob.ar",
    estado: null,
  },

  {
    nombre: "Conoce Tu Capital",
    tecnologias: [
      "React",
      "Node.js",
      "Express",
      "Tailwind CSS",
      "MongoDB",
      "JWT",
    ],
    descripcion:
      "Desde backend se generan viajes de localidades pampeanas con fechas y tipo de formulario. Luego, las personas completan el formulario al finalizar y los datos se analizan con gráficos y filtros.",
    imagenes: [
      "/proyectos/Conoce-tu-capital.webp",
      "/proyectos/Conoce-tu-capital (2).webp",
      "/proyectos/Conoce-tu-capital (3).webp",
      "/proyectos/Conoce-tu-capital (4).webp",
      "/proyectos/Conoce-tu-capital (5).webp",
      "/proyectos/Conoce-tu-capital (6).webp",
    ],
    gitUrl: null,
    gitEstado: "No disponible",
    webUrl: "https://conocetucapital.santarosa.gob.ar/",
    estado: null,
  },
  {
    nombre: "Hamburguesería",
    tecnologias: [
      "React",
      "Node.js",
      "Express",
      "Tailwind CSS",
      "MongoDB",
      "TypeScript",
    ],
    descripcion:
      "E-commerce para una hamburguesería desarrollado para profundizar TypeScript. Incluye órdenes con retiro o envío, pagos por transferencia, Mercado Pago o efectivo y panel admin con dashboard y CRUDs de productos, promociones y usuarios.",
    imagenes: [],
    gitUrl: null,
    gitEstado: "No disponible",
    webUrl: null,
    webEstado: "No disponible",
    estado: "Actualmente en desarrollo",
  },
  {
    nombre: "Memoria de una foto",
    tecnologias: ["React"],
    descripcion:
      "Página web para la Municipalidad de Santa Rosa en conmemoración del 24 de marzo, Día de la Memoria, donde se publican testimonios de personas. Es responsive y se adaptó al manual de marca del municipio.",
    imagenes: [
      "/proyectos/Memoria-de-una-foto.webp",
      "/proyectos/Memoria-de-una-foto (2).webp",
      "/proyectos/Memoria-de-una-foto (3).webp",
    ],
    gitUrl: null,
    gitEstado: "No disponible",
    webUrl: "https://memoriadeunafoto.santarosa.gob.ar/",
    estado: null,
  },
  {
    nombre: "Fichero-MSR",
    tecnologias: [
      "React Native",
      "Node.js",
      "Express",
      "MongoDB",
      "TypeScript",
      "Claude Code",
    ],
    descripcion:
      "Sistema mobile de para la Municipalidad de Santa Rosa que permite a los encargados fichar la entrada y salida de empleados. Se desarrolló con ayuda de IA.",
    imagenes: [],
    gitUrl: null,
    gitEstado: "No disponible",
    webUrl: null,
    estado: null,
  },
  {
    nombre: "Overtime",
    tecnologias: [
      "React Native",
      "Node.js",
      "Express",
      "MongoDB",
      "GitHub Copilot",
      "IA",
    ],
    descripcion:
      "Sistema mobile desarrolladó para uso propio que permite registrar horas extras de trabajo, con una interfaz moderna e intuitiva, el usuario carga cuantas horas tiene disponible para trabajar, las hs maximas y minimas por día, y el sistema te calcula un plan para completar la cantidad de horas que indicaste, y el usuario en el calendario va cargando las hs que hizo por día, llevando el registro y calculo de horas hechas, ademas el usuario puede cargar el valor de la hora extra y el valor en fin de semanas o feriados. Se desarrolló con ayuda de IA y GitHub Copilot para acelerar el proceso de desarrollo.",
    imagenes: [
      "/proyectos/overtime.webp",
      "/proyectos/overtime1.webp",
      "/proyectos/overtime2.webp",
      "/proyectos/overtime3.webp",
      "/proyectos/overtime4.webp",
      "/proyectos/overtime5.webp",
    ],
    gitUrl: null,
    gitEstado: "No disponible",
    webUrl: null,
    estado: null,
  },
];

const ActionButton = ({ href, onClick, label, disabled, title, children }) => {
  const baseClassName =
    "inline-flex h-10 w-10 items-center justify-center rounded-md border text-slate-100 transition-all duration-200";

  if (href && !disabled) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        aria-label={label}
        title={title ?? label}
        className={`${baseClassName} border-slate-500/60 bg-slate-700/40 hover:-translate-y-0.5 hover:border-cyan-300/90 hover:text-cyan-200`}
      >
        {children}
      </a>
    );
  }

  if (onClick && !disabled) {
    return (
      <button
        type="button"
        onClick={onClick}
        aria-label={label}
        title={title ?? label}
        className={`${baseClassName} cursor-pointer border-slate-500/60 bg-slate-700/40 hover:-translate-y-0.5 hover:border-cyan-300/90 hover:text-cyan-200`}
      >
        {children}
      </button>
    );
  }

  return (
    <span
      aria-label={label}
      title={title ?? "No disponible"}
      className={`${baseClassName} cursor-not-allowed border-slate-700/70 bg-slate-800/70 text-slate-500`}
    >
      {children}
    </span>
  );
};

const ImageIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
    <path
      d="M3.75 6.75A2.25 2.25 0 0 1 6 4.5h12A2.25 2.25 0 0 1 20.25 6.75v10.5A2.25 2.25 0 0 1 18 19.5H6a2.25 2.25 0 0 1-2.25-2.25V6.75Z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="m4.5 15 4.125-4.125a1.5 1.5 0 0 1 2.12 0L14.25 14.4l1.005-1.005a1.5 1.5 0 0 1 2.12 0L19.5 15.52"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="8.25" cy="8.25" r="1.125" fill="currentColor" />
  </svg>
);

const GitIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-5 w-5"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 .5C5.65.5.5 5.65.5 12A11.5 11.5 0 0 0 8.35 22.9c.58.1.8-.26.8-.57v-2.1c-3.2.7-3.87-1.35-3.87-1.35-.53-1.3-1.28-1.65-1.28-1.65-1.04-.7.08-.69.08-.69 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.34.95.1-.74.4-1.24.72-1.52-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.12-3.04 0 0 .96-.31 3.15 1.18a10.8 10.8 0 0 1 5.74 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.58.24 2.75.12 3.04.74.8 1.18 1.83 1.18 3.08 0 4.41-2.68 5.39-5.25 5.67.41.35.78 1.05.78 2.12v3.15c0 .31.2.67.8.57A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
  </svg>
);

const LinkIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
    <path
      d="M13.5 6.75h4.875v4.875"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m10.5 13.5 7.875-7.875"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19.5 13.5v3A2.25 2.25 0 0 1 17.25 18.75h-9A2.25 2.25 0 0 1 6 16.5v-9A2.25 2.25 0 0 1 8.25 5.25h3"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Proyectos = () => {
  const [modalProyecto, setModalProyecto] = useState(null);
  const [imagenActual, setImagenActual] = useState(0);

  const cerrarModal = () => {
    setModalProyecto(null);
    setImagenActual(0);
  };

  const siguienteImagen = () => {
    if (modalProyecto && imagenActual < modalProyecto.imagenes.length - 1) {
      setImagenActual(imagenActual + 1);
    }
  };

  const imagenAnterior = () => {
    if (imagenActual > 0) {
      setImagenActual(imagenActual - 1);
    }
  };

  return (
    <section id="proyectos">
      <CardContainer className="flex-col border border-slate-700/70 shadow-[0_8px_30px_rgba(2,6,23,0.45)]">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-xl font-bold text-blue-400">Proyectos</h2>
          <span className="rounded-full border border-slate-600/80 bg-slate-700/60 px-3 py-1 text-xs text-slate-200">
            {listadoProyectos.length} proyectos
          </span>
        </div>

        <div className="mt-2 grid gap-4 md:grid-cols-2">
          {listadoProyectos.map((proyecto) => {
            const estadoGit = proyecto.gitEstado ?? "No disponible";
            const estadoWeb = proyecto.webEstado ?? "No disponible";

            return (
              <article
                key={proyecto.nombre}
                className="flex h-full flex-col rounded-lg border border-slate-600/35 bg-slate-700/45 p-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold text-slate-100">
                    {proyecto.nombre}
                  </h3>
                  {proyecto.estado && (
                    <span className="rounded-full border border-amber-300/40 bg-amber-500/15 px-2 py-0.5 text-xs font-medium text-amber-200">
                      {proyecto.estado}
                    </span>
                  )}
                </div>

                <p className="mt-3 text-sm leading-relaxed text-slate-200">
                  {proyecto.descripcion}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {proyecto.tecnologias.map((tech) => (
                    <span
                      key={`${proyecto.nombre}-${tech}`}
                      className="rounded-full border border-cyan-400/35 bg-cyan-500/10 px-2.5 py-1 text-xs font-medium text-cyan-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex items-center gap-2 pt-2">
                  <ActionButton
                    label={`Imágenes de ${proyecto.nombre}`}
                    onClick={() => setModalProyecto(proyecto)}
                    title={
                      proyecto.imagenes.length > 0
                        ? "Ver imágenes"
                        : "Aún sin imágenes cargadas"
                    }
                  >
                    <ImageIcon />
                  </ActionButton>

                  <ActionButton
                    label={`Repositorio de ${proyecto.nombre}`}
                    href={proyecto.gitUrl}
                    disabled={!proyecto.gitUrl}
                    title={proyecto.gitUrl ? "Abrir repositorio" : estadoGit}
                  >
                    <GitIcon />
                  </ActionButton>

                  <ActionButton
                    label={`Web de ${proyecto.nombre}`}
                    href={proyecto.webUrl}
                    disabled={!proyecto.webUrl}
                    title={proyecto.webUrl ? "Abrir sitio" : estadoWeb}
                  >
                    <LinkIcon />
                  </ActionButton>
                </div>
              </article>
            );
          })}
        </div>
      </CardContainer>

      {modalProyecto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4"
          onClick={cerrarModal}
        >
          <div
            className="w-full max-w-3xl rounded-xl border border-slate-600/70 bg-slate-900 p-4 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-lg font-semibold text-slate-100">
                {modalProyecto.nombre}
              </h3>
              <button
                type="button"
                onClick={cerrarModal}
                className="rounded-md border border-slate-500/70 bg-slate-700/60 px-3 py-1 text-sm text-slate-100 transition-colors hover:border-slate-300"
              >
                Cerrar
              </button>
            </div>

            <div className="mt-4 flex min-h-72 items-center justify-center rounded-lg border border-dashed border-slate-600/70 bg-slate-800/70 p-4">
              {modalProyecto.imagenes.length > 0 ? (
                <div className="relative w-full">
                  <img
                    src={modalProyecto.imagenes[imagenActual]}
                    alt={`Captura ${imagenActual + 1} de ${modalProyecto.nombre}`}
                    className="max-h-[70vh] w-full rounded-md object-contain"
                  />

                  {modalProyecto.imagenes.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={imagenAnterior}
                        disabled={imagenActual === 0}
                        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full border border-slate-500/60 bg-slate-700/60 p-2 text-slate-100 transition-all hover:border-cyan-300/90 hover:text-cyan-200 disabled:cursor-not-allowed disabled:border-slate-700/70 disabled:bg-slate-800/70 disabled:text-slate-500"
                      >
                        <svg
                          className="h-5 w-5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>

                      <button
                        type="button"
                        onClick={siguienteImagen}
                        disabled={
                          imagenActual === modalProyecto.imagenes.length - 1
                        }
                        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-slate-500/60 bg-slate-700/60 p-2 text-slate-100 transition-all hover:border-cyan-300/90 hover:text-cyan-200 disabled:cursor-not-allowed disabled:border-slate-700/70 disabled:bg-slate-800/70 disabled:text-slate-500"
                      >
                        <svg
                          className="h-5 w-5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M9 19l7-7-7-7" />
                        </svg>
                      </button>

                      <div className="mt-3 flex items-center justify-center gap-2">
                        {modalProyecto.imagenes.map((_, index) => (
                          <button
                            key={index}
                            type="button"
                            onClick={() => setImagenActual(index)}
                            className={`h-2 rounded-full transition-all ${
                              index === imagenActual
                                ? "w-6 bg-cyan-400"
                                : "w-2 bg-slate-500/60 hover:bg-slate-400"
                            }`}
                            aria-label={`Ir a imagen ${index + 1}`}
                          />
                        ))}
                      </div>

                      <p className="mt-3 text-center text-xs text-slate-400">
                        {imagenActual + 1} de {modalProyecto.imagenes.length}
                      </p>
                    </>
                  )}
                </div>
              ) : (
                <p className="max-w-md text-center text-sm text-slate-300">
                  Este proyecto aún no tiene imágenes cargadas. Completa el
                  arreglo <strong>imágenes</strong> en la lista cuando las
                  tengas listas.
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Proyectos;
