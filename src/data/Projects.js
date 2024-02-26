import Veterinaria from "../assets/images/veterinaria.jpg";
import Estancia from "../assets/images/avemaria.jpg";
import Luli from "../assets/images/luli-sulichin.jpg";
import Cepil from "../assets/images/cepil.jpg";
import {
  SiBootstrap,
  SiCss3,
  SiHtml5,
  SiReact,
  SiTailwindcss,
  SiWordpress,
} from "react-icons/si";

export const projects = [
  {
    title: "Seguimiento Pacientes Veterinaria",
    description:
      "Trabajo practico de curso realizado en plataforma  UDEMY de seguimiento de pacientes para una veterinaria utilizando las tecnologias de React.js &Tailwind.css",
    image: `${Veterinaria}`,
    code: "https://github.com/agubanchi/citas_react",
    link: "https://listado-veterinaria.netlify.app/",
    icon01_name: "React.Js",
    icon02_name: "Tailwind.css",
    icon01: SiReact,
    icon02: SiTailwindcss,
  },
  {
    title: "Estancia Ave Maria",
    description: `Diseño y desarrollo de sitio web  profesional para estancia ubicada en la ciudad de Tandil, provincia de Bs.As.
      Se trabajó en un rediseño completo de sitio, teniendo como prioridad una mejor experiencia para los usuarios.`,
    image: `${Estancia}`,
    link: "https://avemariatandil.com/",
    icon01_name: "Wordpress",
    icon02_name: "CSS3",
    icon01: SiWordpress,
    icon02: SiCss3,
  },

  {
    title: "Luli Sulichin - Portfolio Personal",
    description: `Diseño de sitio web institucional de arte para clienta en Miami, EE.UU.
    Su intención era un diseño super minimalista y limpio para dar a conocer sus obras y que estas tengan mayor visibilidad.`,
    image: `${Luli}`,
    link: "https://lulisulichin.com/",
    icon01_name: "Wordpress",
    icon02_name: "CSS3",
    icon01: SiWordpress,
    icon02: SiCss3,
  },

  {
    title: "C.E.P.I.L - Centro de Psicologia Internacional Libedinsky",
    description: `Diseño y desarrollo de sitio web institucional “One-page” para familia de Psicólogos profesionales.
    El concepto de diseño era realizar algo simple y funcional`,
    image: `${Cepil}`,
    link: "https://www.centrolibedinsky.com/",
    icon01_name: "HTML5",
    icon02_name: "Bootstrap",
    icon01: SiHtml5,
    icon02: SiBootstrap,
  },
];
