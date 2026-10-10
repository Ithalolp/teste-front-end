import { asset } from "../../utils";
import "./Footer.scss";

const LOGO_SRC = asset("images/logo-econverse.svg");

const COLUMNS = [
  {
    title: "Institucional",
    links: ["Sobre Nós", "Movimento", "Trabalhe conosco"],
  },
  {
    title: "Ajuda",
    links: ["Suporte", "Fale Conosco", "Perguntas Frequentes"],
  },
  {
    title: "Termos",
    links: [
      "Termos e Condições",
      "Política de Privacidade",
      "Troca e Devolução",
    ],
  },
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <a href="/" className="footer__logo" aria-label="econverse">
            <img
              className="footer__logo-img"
              src={LOGO_SRC}
              alt="econverse"
              draggable={false}
            />
          </a>

          <p className="footer__about">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <ul className="footer__social" aria-label="Redes sociais">
            <li>
              <a href="#" aria-label="Instagram">
                <svg
                  viewBox="0 0 24 24"
                  width="22"
                  height="22"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="#" aria-label="Facebook">
                <svg
                  viewBox="0 0 24 24"
                  width="22"
                  height="22"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path d="M14 8h2V5h-2a4 4 0 0 0-4 4v2H8v3h2v6h3v-6h2.5l.5-3H13V9a1 1 0 0 1 1-1Z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#" aria-label="LinkedIn">
                <svg
                  viewBox="0 0 24 24"
                  width="22"
                  height="22"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 0 1 4 0v4M11 10v7" />
                </svg>
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__columns">
          {COLUMNS.map((col) => (
            <div key={col.title} className="footer__column">
              <h3 className="footer__column-title">{col.title}</h3>
              <ul className="footer__links">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="footer__legal">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>
    </footer>
  );
}
