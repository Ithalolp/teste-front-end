import productsData from "../data/products.json";
import type { Product, ProductsResponse } from "../types/product";

export const PRODUCTS_URL =
  "https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json";

const DEV_PROXY_URL =
  "/econverse-proxy/teste-front-end/junior/tecnologia/lista-produtos/produtos.json";

export type ProductsErrorKind = "http" | "network" | "format";

export class ProductsError extends Error {
  constructor(
    public readonly kind: ProductsErrorKind,
    message: string,
  ) {
    super(message);
    this.name = "ProductsError";
  }
}

function networkError(): ProductsError {
  return new ProductsError(
    "network",
    "Não foi possível conectar ao servidor de produtos (rede indisponível ou requisição bloqueada pelo navegador). Veja o console para detalhes.",
  );
}

function isProduct(value: unknown): value is Product {
  if (typeof value !== "object" || value === null) return false;
  const p = value as Record<string, unknown>;
  return (
    typeof p.productName === "string" &&
    typeof p.descriptionShort === "string" &&
    typeof p.photo === "string" &&
    typeof p.price === "number" &&
    Number.isFinite(p.price)
  );
}

function isSafeImageUrl(url: string): boolean {
  try {
    return new URL(url).protocol === "https:";
  } catch {
    return false;
  }
}

/**
 * Retorna os produtos.
 *
 * Agora a fonte é o JSON LOCAL (`src/data/products.json`), o que permite
 * controlar os preços exibidos nos cards. A URL oficial continua exportada
 * como `PRODUCTS_URL` caso você queira voltar a consumir a API remota depois.
 */
export async function fetchProducts(signal?: AbortSignal): Promise<Product[]> {
  // Se quiser SIMULAR erro de rede/HTTP para testar as telas de erro,
  // descomente uma das linhas abaixo:
  //
  // throw networkError();
  // throw new ProductsError('http', 'O servidor respondeu com erro (HTTP 500).');
  // throw new ProductsError('format', 'A resposta do servidor não tem o formato esperado.');

  // Respeita AbortSignal (cancelamento ao desmontar o componente)
  if (signal?.aborted) {
    throw new DOMException("Aborted", "AbortError");
  }

  // Simula latência para o estado de loading continuar visível
  await new Promise<void>((resolve, reject) => {
    const timer = setTimeout(resolve, 200);
    signal?.addEventListener("abort", () => {
      clearTimeout(timer);
      reject(new DOMException("Aborted", "AbortError"));
    });
  });

  const body = productsData as Partial<ProductsResponse> | null;

  if (!body || body.success !== true || !Array.isArray(body.products)) {
    throw new ProductsError(
      "format",
      "A resposta do servidor não tem o formato esperado.",
    );
  }

  return body.products.filter(isProduct).map((p) => ({
    ...p,
    photo: isSafeImageUrl(p.photo) ? p.photo : "",
  }));
}
