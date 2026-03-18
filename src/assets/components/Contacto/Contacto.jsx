import { useState } from "react";
import CardContainer from "../UI/CardContainer";

const Contacto = () => {
  const [estadoEnvio, setEstadoEnvio] = useState("idle");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setEstadoEnvio("enviando");

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch("https://formspree.io/f/xreyrlqa", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("No se pudo enviar el formulario");
      }

      event.currentTarget.reset();
      setEstadoEnvio("ok");
    } catch {
      setEstadoEnvio("error");
    }
  };

  return (
    <section id="contacto" className="scroll-mt-24">
      <CardContainer className="flex-col border border-slate-700/70 shadow-[0_8px_30px_rgba(2,6,23,0.45)]">
        <div>
          <h2 className="text-xl font-bold text-blue-400">Contacto</h2>
        </div>

        <form
          className="mt-2 grid gap-4 rounded-md  p-3 md:grid-cols-3 md:grid-rows-2"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-2 rounded-lg border border-slate-600/35 bg-slate-700/45 p-3 md:col-span-1 md:row-start-1">
            <label
              htmlFor="nombre"
              className="text-sm font-medium text-slate-200"
            >
              Nombre completo
            </label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              required
              autoComplete="name"
              placeholder="Tu nombre completo"
              className="rounded-lg border border-slate-500/70 bg-slate-900/80 px-3 py-2.5 text-slate-100 outline-none transition-all placeholder:text-slate-500 focus:border-cyan-300/90"
            />
          </div>

          <div className="flex flex-col gap-2 rounded-lg border border-slate-600/35 bg-slate-700/45 p-3 md:col-span-1 md:row-start-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-slate-200"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="tuemail@ejemplo.com"
              className="rounded-lg border border-slate-500/70 bg-slate-900/80 px-3 py-2.5 text-slate-100 outline-none transition-all placeholder:text-slate-500 focus:border-cyan-300/90"
            />
          </div>

          <div className="flex flex-col gap-2 rounded-lg border border-slate-600/35 bg-slate-700/45 p-3 md:col-span-2 md:row-span-2 md:col-start-2 md:row-start-1">
            <label
              htmlFor="mensaje"
              className="text-sm font-medium text-slate-200"
            >
              Mensaje
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows={8}
              required
              placeholder="Escribí tu mensaje..."
              className="h-full min-h-32 resize-y rounded-lg border border-slate-500/70 bg-slate-900/80 px-3 py-2.5 text-slate-100 outline-none transition-all placeholder:text-slate-500 focus:border-cyan-300/90"
            ></textarea>
          </div>

          <div className="md:col-span-3 md:flex md:justify-end">
            <button
              type="submit"
              disabled={estadoEnvio === "enviando"}
              className="inline-flex items-center justify-center rounded-md border border-cyan-400/60 bg-cyan-500/15 px-4 py-2 text-sm font-medium text-cyan-100 transition-colors hover:border-cyan-300/90 hover:bg-cyan-500/25"
            >
              {estadoEnvio === "enviando" ? "Enviando..." : "Enviar mensaje"}
            </button>
          </div>

          {estadoEnvio === "ok" && (
            <p className="md:col-span-3 text-sm text-emerald-300">
              Mensaje enviado con exito.
            </p>
          )}

          {estadoEnvio === "error" && (
            <p className="md:col-span-3 text-sm text-rose-300">
              No se pudo enviar el mensaje. Intenta nuevamente.
            </p>
          )}
        </form>
      </CardContainer>
    </section>
  );
};

export default Contacto;
