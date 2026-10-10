import { asset } from "../../utils";
import "./BrandsSection.scss";

const LOGO_SRC = asset("images/logo-econverse.svg");

const BRANDS = Array.from({ length: 5 }, (_, i) => ({
  id: i,
  name: "econverse",
}));

export function BrandsSection() {
  return (
    <section className="brands" aria-labelledby="brands-title">
      <h2 id="brands-title" className="brands__title">
        Navegue por marcas
      </h2>

      <ul className="brands__list">
        {BRANDS.map((brand) => (
          <li key={brand.id} className="brands__item">
            <button
              type="button"
              className="brands__circle"
              aria-label={`Ver produtos da marca ${brand.name}`}
            >
              <img
                className="brands__logo-img"
                src={LOGO_SRC}
                alt={brand.name}
                draggable={false}
              />
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
