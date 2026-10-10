import { useState } from "react";
import type { Product } from "../../types/product";
import { formatPrice } from "../../utils";
import "./ProductCard.scss";

interface Props {
  product: Product;
  onSelect: (product: Product, trigger: HTMLElement) => void;
}

export function ProductCard({ product, onSelect }: Props) {
  const [imageFailed, setImageFailed] = useState(false);

  // Valores que NÃO existem no JSON — fixos como no print.
  const oldPrice = 30.9;
  const installments = 2;
  const installmentValue = 49.95;

  return (
    <li className="product-card">
      <div className="product-card__image">
        {product.photo && !imageFailed ? (
          <img
            src={product.photo}
            alt={product.productName}
            width={160}
            height={200}
            loading="lazy"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <span className="product-card__placeholder">Imagem indisponível</span>
        )}
      </div>

      <p className="product-card__description">{product.descriptionShort}</p>

      <p className="product-card__old-price">{formatPrice(oldPrice)}</p>
      <p className="product-card__price">{formatPrice(product.price)}</p>
      <p className="product-card__installments">
        ou {installments}x de {formatPrice(installmentValue)} sem juros
      </p>
      <p className="product-card__shipping">Frete grátis</p>

      <button
        type="button"
        className="product-card__button"
        aria-label={`Comprar ${product.productName}`}
        onClick={(e) => onSelect(product, e.currentTarget)}
      >
        Comprar
      </button>
    </li>
  );
}
