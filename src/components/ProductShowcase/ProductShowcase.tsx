import { useRef, useState } from 'react';
import type { Product } from '../../types/product';
import { ProductCard } from '../ProductCard/ProductCard';
import { Icon } from '../Icon/Icon';
import './ProductShowcase.scss';

interface Props {
  id: string;
  title?: string;
  tabs?: string[];
  products: Product[];
  status: 'loading' | 'success' | 'error';
  errorMessage?: string | null;
  onRetry: () => void;
  onSelect: (product: Product, trigger: HTMLElement) => void;
}

export function ProductShowcase({ id, title = 'Produtos relacionados', tabs, products, status, errorMessage, onRetry, onSelect }: Props) {
  const listRef = useRef<HTMLUListElement>(null);
  const [activeTab, setActiveTab] = useState(tabs?.[0]);

  const scroll = (direction: 1 | -1) => {
    const list = listRef.current;
    if (!list) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    list.scrollBy({ left: direction * list.clientWidth, behavior: reduce ? 'auto' : 'smooth' });
  };

  return (
    <section className="showcase" id={id} aria-labelledby={`${id}-title`}>
      <h2 id={`${id}-title`} className="showcase__title"><span>{title}</span></h2>

      {tabs ? (
        <ul className="showcase__tabs">
          {tabs.map((tab) => (
            <li key={tab}>
              <button type="button" aria-pressed={tab === activeTab}
                className={tab === activeTab ? 'is-active' : undefined} onClick={() => setActiveTab(tab)}>
                {tab}
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <a href="#" className="showcase__see-all">Ver todos</a>
      )}

      {status === 'loading' && <p role="status" className="showcase__message">Carregando produtos…</p>}
      {status === 'error' && (
        <div role="alert" className="showcase__message">
          <p>Não foi possível carregar os produtos.</p>
          {errorMessage && <p className="showcase__error-detail">{errorMessage}</p>}
          <button type="button" className="showcase__retry" onClick={onRetry}>Tentar novamente</button>
        </div>
      )}
      {status === 'success' && products.length === 0 && <p className="showcase__message">Nenhum produto disponível.</p>}

      {status === 'success' && products.length > 0 && (
        <div className="showcase__carousel">
          <button type="button" className="showcase__arrow showcase__arrow--prev" aria-label="Produtos anteriores" onClick={() => scroll(-1)}>
            <Icon name="left" size={14} />
          </button>
          <ul ref={listRef} className="showcase__list">
            {products.map((product, index) => (
              <ProductCard key={`${product.productName}-${index}`} product={product} onSelect={onSelect} />
            ))}
          </ul>
          <button type="button" className="showcase__arrow showcase__arrow--next" aria-label="Próximos produtos" onClick={() => scroll(1)}>
            <Icon name="right" size={14} />
          </button>
        </div>
      )}
    </section>
  );
}
