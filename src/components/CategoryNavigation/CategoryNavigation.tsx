import { useState } from "react";
import { asset } from "../../utils";
import "./CategoryNavigation.scss";

type Category = {
  name: string;
  icon: string; // caminho relativo dentro de public/
};

const CATEGORIES: Category[] = [
  { name: "Tecnologia", icon: "images/categorias/tecnologia.png" },
  { name: "Supermercado", icon: "images/categorias/supermercado.png" },
  { name: "Bebidas", icon: "images/categorias/bebidas.png" },
  { name: "Ferramentas", icon: "images/categorias/ferramentas.png" },
  { name: "Saúde", icon: "images/categorias/saude.png" },
  {
    name: "Esportes e Fitness",
    icon: "images/categorias/esportes-fitness.png",
  },
  { name: "Moda", icon: "images/categorias/moda.png" },
];

export function CategoryNavigation() {
  const [active, setActive] = useState(CATEGORIES[0].name);

  return (
    <nav className="categories" aria-label="Navegue por categorias">
      <ul className="categories__list">
        {CATEGORIES.map(({ name, icon }) => {
          const isActive = name === active;
          return (
            <li key={name}>
              <button
                type="button"
                aria-pressed={isActive}
                className={`categories__item${isActive ? " is-active" : ""}`}
                onClick={() => setActive(name)}
              >
                <span className="categories__icon">
                  <img
                    className="categories__icon-img"
                    src={asset(icon)}
                    alt=""
                    draggable={false}
                  />
                </span>
                <span className="categories__label">{name}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
