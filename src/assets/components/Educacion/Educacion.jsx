import { useState } from "react";
import CardContainer from "../UI/CardContainer";

const formacionAcademica = [
  {
    titulo: "Certificado en Reparación de Computadoras",
    institucion: "Formación Técnica",
    tipo: "Certificación",
    imagenes: ["/educacion/Reparacion-PC.webp"],
  },
  {
    titulo: "Certificado en Desarrollo Web",
    institucion: "Coderhouse",
    tipo: "Certificación",
    imagenes: ["/educacion/DesarrolloWeb.webp"],
  },
  {
    titulo: "Certificado en JavaScript",
    institucion: "Coderhouse",
    tipo: "Certificación",
    imagenes: ["/educacion/JS.webp"],
  },
  {
    titulo: "Certificado en React",
    institucion: "Coderhouse",
    tipo: "Certificación",
    imagenes: ["/educacion/React.webp"],
  },
  {
    titulo: "Certificado en Backend 1",
    institucion: "Coderhouse",
    tipo: "Certificación",
    imagenes: ["/educacion/BackEnd.webp"],
  },
  {
    titulo: "Certificado en Backend 2",
    institucion: "Coderhouse",
    tipo: "Certificación",
    imagenes: ["/educacion/BackEnd2.webp"],
  },
  {
    titulo: "Certificado en Backend 3",
    institucion: "Coderhouse",
    tipo: "Certificación",
    imagenes: ["/educacion/Backend3.webp"],
  },
  {
    titulo: "Tecnicatura Superior en Desarrollo de Software",
    institucion: "Educación Superior",
    tipo: "Carrera",
    imagenes: [],
  },
];

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

const Educacion = () => {
  const [itemActivo, setItemActivo] = useState(null);

  const cerrarModal = () => setItemActivo(null);

  return (
    <section id="educacion" className="scroll-mt-24">
      <CardContainer className="flex-col border border-slate-700/70 shadow-[0_8px_30px_rgba(2,6,23,0.45)]">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-xl font-bold text-blue-400">Educación</h2>
          <span className="rounded-full border border-slate-600/80 bg-slate-700/60 px-3 py-1 text-xs text-slate-200">
            {formacionAcademica.length} estudios
          </span>
        </div>

        <div className="mt-2 grid gap-4 md:grid-cols-2 md:auto-rows-fr">
          {formacionAcademica.map((item) => (
            <article
              key={`${item.titulo}-${item.institucion}`}
              className="flex h-full flex-col rounded-lg border border-slate-600/35 bg-slate-700/45 p-4"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold text-slate-100">
                    {item.titulo}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-cyan-200">
                    {item.institucion}
                  </p>
                </div>

                <span className="rounded-full border border-amber-300/40 bg-amber-500/15 px-2 py-0.5 text-xs font-medium text-amber-200">
                  {item.tipo}
                </span>
              </div>

              <div className="mt-auto flex items-center gap-2 pt-4">
                <button
                  type="button"
                  onClick={() => setItemActivo(item)}
                  aria-label={`Imágenes de ${item.titulo}`}
                  title={
                    item.imagenes.length > 0
                      ? "Ver imágenes"
                      : "Aún sin imágenes cargadas"
                  }
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-500/60 bg-slate-700/40 text-slate-100 transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-300/90 hover:text-cyan-200"
                >
                  <ImageIcon />
                </button>
              </div>
            </article>
          ))}
        </div>
      </CardContainer>

      {itemActivo && (
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
                {itemActivo.titulo}
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
              {itemActivo.imagenes.length > 0 ? (
                <img
                  src={itemActivo.imagenes[0]}
                  alt={`Certificado de ${itemActivo.titulo}`}
                  className="max-h-[70vh] w-full rounded-md object-contain"
                />
              ) : (
                <p className="max-w-md text-center text-sm text-slate-300">
                  Este estudio aún no tiene imágenes cargadas. Completá el
                  arreglo <strong>imagenes</strong> cuando tengas el archivo del
                  certificado.
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Educacion;
