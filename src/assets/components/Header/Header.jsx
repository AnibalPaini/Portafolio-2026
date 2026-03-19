import { useState } from "react";

const Header = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const secciones = [
    { href: "#sobre-mi", label: "Inicio" },
    { href: "#proyectos", label: "Proyectos" },
    { href: "#experiencia", label: "Experiencia" },
    { href: "#educacion", label: "Educación" },
    { href: "#contacto", label: "Contacto" },
  ];

  const cerrarMenu = () => setMenuAbierto(false);

  return (
    <header className="bg-gray-950 py-5">
      <div className="mx-auto w-full max-w-7xl px-4">
        <div className="flex items-center justify-between gap-4">
          <h1 className="text-2xl font-bold text-white sm:text-3xl">
            Anibal E. Paini
          </h1>

          <button
            type="button"
            aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuAbierto}
            onClick={() => setMenuAbierto((prev) => !prev)}
            className="rounded-md border border-gray-700 p-2 text-white transition-colors hover:border-blue-400 md:hidden"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              {menuAbierto ? (
                <path d="M6 6 18 18M6 18 18 6" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>

          <nav className="hidden md:block">
            <ul className="flex gap-5 text-white">
              {secciones.map((seccion) => (
                <li key={seccion.href}>
                  <a
                    href={seccion.href}
                    className="transition-colors duration-200 hover:text-blue-400"
                  >
                    {seccion.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <nav className={`${menuAbierto ? "mt-4 block" : "hidden"} md:hidden`}>
          <ul className="flex flex-col gap-2 rounded-lg border border-gray-800 bg-gray-900/70 p-3 text-white">
            {secciones.map((seccion) => (
              <li key={`mobile-${seccion.href}`}>
                <a
                  href={seccion.href}
                  onClick={cerrarMenu}
                  className="block rounded-md px-3 py-2 transition-colors duration-200 hover:bg-gray-800 hover:text-blue-400"
                >
                  {seccion.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
