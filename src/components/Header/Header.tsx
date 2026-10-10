import { useState, type FormEvent } from "react";
import { Icon, type IconName } from "../Icon/Icon";
import { asset } from "../../utils";
import "./Header.scss";

const LOGO_SRC = asset("images/logo-econverse.svg");

const BENEFITS: { icon: IconName; pre: string; bold: string; post: string }[] =
  [
    { icon: "shield", pre: "Compra ", bold: "100% segura", post: "" },
    { icon: "truck", pre: "", bold: "Frete grátis", post: " acima de R$ 200" },
    { icon: "card", pre: "", bold: "Parcele", post: " suas compras" },
  ];

const NAV: { label: string; icon?: IconName }[] = [
  { label: "Todas categorias" },
  { label: "Supermercado" },
  { label: "Livros" },
  { label: "Moda" },
  { label: "Lançamentos" },
  { label: "Ofertas do dia" },
  { label: "Assinatura", icon: "crown" },
];

const ACTIONS: { icon: IconName; label: string }[] = [
  { icon: "box", label: "Meus pedidos" },
  { icon: "heart", label: "Favoritos" },
  { icon: "user", label: "Minha conta" },
  { icon: "cart", label: "Carrinho" },
];

export function Header() {
  const [query, setQuery] = useState("");
  const onSubmit = (e: FormEvent) => e.preventDefault();

  return (
    <header className="header">
      <ul className="header__benefits">
        {BENEFITS.map((b) => (
          <li key={b.bold}>
            <Icon name={b.icon} size={14} />
            <span>
              {b.pre}
              <strong>{b.bold}</strong>
              {b.post}
            </span>
          </li>
        ))}
      </ul>

      <div className="header__main">
        <a
          href="/"
          className="header__logo"
          aria-label="Econverse — página inicial"
        >
          <img
            className="header__logo-img"
            src={LOGO_SRC}
            alt="econverse"
            draggable={false}
          />
        </a>

        <form className="header__search" role="search" onSubmit={onSubmit}>
          <label htmlFor="search" className="visually-hidden">
            Buscar produtos
          </label>
          <input
            id="search"
            type="search"
            placeholder="O que você está buscando?"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" aria-label="Buscar">
            <Icon name="search" />
          </button>
        </form>

        <div className="header__actions">
          {ACTIONS.map((a) => (
            <button key={a.label} type="button" aria-label={a.label}>
              <Icon name={a.icon} size={22} />
            </button>
          ))}
        </div>
      </div>

      <nav className="header__nav" aria-label="Categorias">
        <ul>
          {NAV.map((item) => (
            <li key={item.label}>
              <a
                href="#"
                className={
                  item.label === "Ofertas do dia" ? "is-highlight" : undefined
                }
              >
                {item.icon && <Icon name={item.icon} size={14} />}
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
