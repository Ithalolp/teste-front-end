import { useEffect, useRef, useState } from "react";
import type { Product } from "../../types/product";
import { formatPrice } from "../../utils";
import { Icon } from "../Icon/Icon";
import "./ProductModal.scss";

const MAX_QUANTITY = 99;
const CLOSE_ANIMATION_MS = 160;

interface Props {
  product: Product;
  onClose: () => void;
}

export function ProductModal({ product, onClose }: Props) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const closingRef = useRef(false);
  const [quantity, setQuantity] = useState(1);
  const [notice, setNotice] = useState(false);
  const [closing, setClosing] = useState(false);

  const showDescription =
    product.descriptionShort.trim() !== product.productName.trim();

  // Fecha com animação
  const startClose = () => {
    if (closingRef.current) return;
    closingRef.current = true;
    setClosing(true);
    window.setTimeout(() => onClose(), CLOSE_ANIMATION_MS);
  };

  // Esc fecha
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") startClose();
    };
    document.addEventListener("keydown", onKey);
    // Bloqueia o scroll do body enquanto o modal está aberto
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, []);

  return (
    <div
      ref={overlayRef}
      className={`product-modal${closing ? " is-closing" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-modal-title"
      onClick={(e) => {
        if (e.target === overlayRef.current) startClose();
      }}
    >
      <div className="product-modal__content">
        <button
          type="button"
          className="product-modal__close"
          aria-label="Fechar"
          onClick={(e) => {
            e.stopPropagation();
            startClose();
          }}
        >
          <Icon name="close" size={20} />
        </button>

        <div className="product-modal__media">
          {product.photo && (
            <img src={product.photo} alt={product.productName} />
          )}
        </div>

        <div className="product-modal__info">
          <h2 id="product-modal-title">{product.productName}</h2>

          <p className="product-modal__price">{formatPrice(product.price)}</p>

          {showDescription && (
            <p className="product-modal__description">
              {product.descriptionShort}
            </p>
          )}

          <a href="#" className="product-modal__link">
            Veja mais detalhes do produto &gt;
          </a>

          <div className="product-modal__actions">
            <div
              className="product-modal__quantity"
              role="group"
              aria-label="Quantidade"
            >
              <button
                type="button"
                aria-label="Diminuir quantidade"
                disabled={quantity <= 1}
                onClick={() => setQuantity((q) => q - 1)}
              >
                −
              </button>
              <output aria-live="polite">
                {String(quantity).padStart(2, "0")}
              </output>
              <button
                type="button"
                aria-label="Aumentar quantidade"
                disabled={quantity >= MAX_QUANTITY}
                onClick={() => setQuantity((q) => q + 1)}
              >
                +
              </button>
            </div>

            <button
              type="button"
              className="product-modal__buy"
              onClick={() => setNotice(true)}
            >
              Comprar
            </button>
          </div>

          {notice && (
            <p role="status" className="product-modal__notice">
              Carrinho e checkout não fazem parte do escopo deste desafio.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
