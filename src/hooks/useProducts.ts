import { useCallback, useEffect, useState } from 'react';
import type { Product } from '../types/product';
import { fetchProducts, ProductsError, PRODUCTS_URL } from '../services/productService';

type Status = 'loading' | 'success' | 'error';

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [status, setStatus] = useState<Status>('loading');
  const [error, setError] = useState<string | null>(null);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    setStatus('loading');
    setError(null);
    fetchProducts(controller.signal)
      .then((list) => {
        setProducts(list);
        setStatus('success');
      })
      .catch((err: unknown) => {
        if (err instanceof DOMException && err.name === 'AbortError') return;
        console.error(`[produtos] falha ao carregar ${PRODUCTS_URL}`, err);
        setError(err instanceof ProductsError ? err.message : 'Erro inesperado ao carregar os produtos.');
        setStatus('error');
      });
    return () => controller.abort();
  }, [attempt]);

  const retry = useCallback(() => setAttempt((n) => n + 1), []);
  return { products, status, error, retry };
}
