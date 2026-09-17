import CardContainer from "../UI/CardContainer";
import { motion } from "motion/react";
import { useState } from "react";

const technologies = [
  {
    name: "JavaScript",
    label: "JS",
    iconClass: "devicon-javascript-plain colored",
  },
  {
    name: "Node.js",
    label: "NodeJS",
    iconClass: "devicon-nodejs-plain colored",
  },
  {
    name: "React",
    label: "React",
    iconClass: "devicon-react-original colored",
  },
  {
    name: "MongoDB",
    label: "Mongo",
    iconClass: "devicon-mongodb-plain colored",
  },
  { name: "Express", label: "Express", iconClass: "devicon-express-original" },
  { name: "JWT", label: "JWT", icono: "jwt" },
  {
    name: "TypeScript",
    label: "TS",
    iconClass: "devicon-typescript-plain colored",
  },

  {
    name: "MySQL",
    label: "MySQL",
    iconClass: "devicon-mysql-original colored",
  },
  {
    name: "PostgreSQL",
    label: "PostgreSQL",
    iconClass: "devicon-postgresql-plain colored",
  },
  { name: "HTML", label: "HTML", iconClass: "devicon-html5-plain colored" },
  { name: "CSS", label: "CSS", iconClass: "devicon-css3-plain colored" },
  {
    name: "Tailwind CSS",
    label: "Tailwind",
    iconClass: "devicon-tailwindcss-original colored",
  },
  { name: "Git", label: "Git", iconClass: "devicon-git-plain colored" },
  { name: "GitHub", label: "GitHub", iconClass: "devicon-github-original" },
  {
    name: "Postman",
    label: "Postman",
    iconClass: "devicon-postman-plain colored",
  },
  { name: "Claude Code", label: "Claude Code", icono: "claude" },
];

const ClaudeIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-8 w-8"
    aria-label="Claude Code"
    role="img"
  >
    <g
      stroke="#D97757"
      strokeWidth="1.7"
      strokeLinecap="round"
      fill="none"
      transform="translate(12 12)"
    >
      {Array.from({ length: 12 }, (_, index) => (
        <line
          key={index}
          x1="0"
          y1="0"
          x2="0"
          y2={index % 2 === 0 ? -9.5 : -6.5}
          transform={`rotate(${index * 30})`}
        />
      ))}
    </g>
  </svg>
);

const IconoTecnologia = ({ tech }) => {
  if (tech.icono === "claude") return <ClaudeIcon />;

  if (tech.icono === "jwt") {
    return (
      <span className="flex h-9 w-9 items-center justify-center rounded-md border border-amber-400/40 bg-amber-500/15 text-xs font-bold text-amber-300">
        JWT
      </span>
    );
  }

  return (
    <i className={`${tech.iconClass} text-3xl`} aria-label={tech.name}></i>
  );
};

const Tecnologias = () => {
  const [rotations] = useState(() =>
    technologies.map(() => Math.floor(Math.random() * 30) - 15),
  );
  return (
    <CardContainer className="h-full flex-col border border-slate-700/70 shadow-[0_8px_30px_rgba(2,6,23,0.45)]">
      <h2 className="text-xl font-bold text-blue-400">Tecnologías</h2>
      <div className="grid auto-rows-fr grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
        {technologies.map((tech, index) => (
          <motion.article
            whileHover={{ rotate: rotations[index] }}
            transition={{ duration: 0.2 }}
            key={tech.name}
            className="flex min-h-20 flex-col items-center justify-center gap-2 rounded-lg border border-slate-600/35 bg-slate-700/45 px-2 py-3 text-center transition-transform duration-200 hover:-translate-y-0.5"
          >
            <IconoTecnologia tech={tech} />
            <span className="text-xs font-semibold tracking-wide text-slate-200">
              {tech.label}
            </span>
          </motion.article>
        ))}
      </div>
    </CardContainer>
  );
};

export default Tecnologias;
