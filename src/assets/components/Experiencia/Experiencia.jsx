import CardContainer from "../UI/CardContainer";

const experiencias = [
  {
    organizacion: "Municipalidad de Santa Rosa",
    puesto: "Soporte IT - Desarrollador Web",
    periodo: "2022 - Actualidad",
    tareas: [
      "Diseño y desarrollo de aplicaciones web con stack MERN para la gestión de solicitudes municipales, utilizadas por inspectores y áreas administrativas.",
      "Rediseño del frontend del sistema de pago de impuestos municipales, alineado al manual de marca institucional y orientado a mejorar la experiencia de usuario.",
      "Soporte técnico a usuarios municipales: gestión de accesos, desbloqueo y reseteo de credenciales, correo electrónico, cuentas de dominio y permisos de red.",
      "Soporte básico en infraestructura: verificación de conectividad en switches y PCs, configuración y monitoreo de cámaras IP, y control de backups.",
      "Diseño de formularios web básicos con HTML, CSS y JavaScript para la digitalización de trámites de Obras Particulares.",
      "Participación en el desarrollo de soluciones digitales para Libre Deuda y otros trámites municipales.",
    ],
    proyectosRelacionados: [
      "PodaWeb",
      "BoletoWeb",
      "Conoce Tu Capital",
      "Memoria de una foto",
    ],
  },
  {
    organizacion: "Soporte Técnico Freelance",
    puesto: "Soporte Técnico",
    periodo: "2025 - Actualidad",
    tareas: [
      "Diagnóstico y resolución de problemas en equipos de escritorio y notebooks.",
      "Instalación y configuración de sistemas operativos y software.",
      "Mantenimiento preventivo y correctivo de hardware.",
      "Asistencia a usuarios finales y puesta a punto de equipos.",
    ],
    instagramUrl: "https://www.instagram.com/paini.tech?igsh=dnR0eGVpMXZucHgy",
    instagramLabel: "@paini.tech",
    proyectosRelacionados: [],
  },
];

const Experiencia = () => {
  return (
    <section id="habilidades" className="scroll-mt-24">
      <CardContainer className="flex-col border border-slate-700/70 shadow-[0_8px_30px_rgba(2,6,23,0.45)]">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-xl font-bold text-blue-400">Experiencia</h2>
          <span className="rounded-full border border-slate-600/80 bg-slate-700/60 px-3 py-1 text-xs text-slate-200">
            {experiencias.length} roles
          </span>
        </div>

        <div className="mt-2 grid gap-4 md:grid-cols-2 md:auto-rows-fr">
          {experiencias.map((item) => (
            <article
              key={`${item.organizacion}-${item.periodo}`}
              className="flex h-full flex-col rounded-lg border border-slate-600/35 bg-slate-700/45 p-4"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold text-slate-100">
                    {item.organizacion}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-cyan-200">
                    {item.puesto}
                  </p>
                </div>
                <span className="rounded-full border border-amber-300/40 bg-amber-500/15 px-2 py-0.5 text-xs font-medium text-amber-200">
                  {item.periodo}
                </span>
              </div>

              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-200">
                {item.tareas.map((tarea) => (
                  <li key={tarea} className="flex items-start gap-2">
                    <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                    <span>{tarea}</span>
                  </li>
                ))}
              </ul>

              {item.instagramUrl && (
                <div className="mt-5 border-t border-slate-600/35 pt-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-300">
                    Instagram
                  </p>
                  <a
                    href={item.instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-flex rounded-full border border-fuchsia-400/40 bg-fuchsia-500/10 px-2.5 py-1 text-xs font-medium text-fuchsia-100 transition-colors hover:border-fuchsia-300/90"
                    title="Abrir perfil de Instagram"
                  >
                    {item.instagramLabel ?? "Perfil"}
                  </a>
                </div>
              )}

              {item.proyectosRelacionados.length > 0 && (
                <div className="mt-5 border-t border-slate-600/35 pt-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-300">
                    Proyectos relacionados
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {item.proyectosRelacionados.map((proyecto) => (
                      <a
                        key={`${item.organizacion}-${proyecto}`}
                        href="#proyectos"
                        className="rounded-full border border-cyan-400/35 bg-cyan-500/10 px-2.5 py-1 text-xs font-medium text-cyan-100 transition-colors hover:border-cyan-300/80"
                        title="Ver en la sección de proyectos"
                      >
                        {proyecto}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>
      </CardContainer>
    </section>
  );
};

export default Experiencia;
