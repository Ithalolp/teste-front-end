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

function isAbortError(error: unknown): boolean {
  return error instanceof DOMException && error.name === "AbortError";
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

async function requestJson(url: string, signal?: AbortSignal): Promise<unknown> {
  let response: Response;
  try {
    response = await fetch(url, { signal });
  } catch (error) {
    if (isAbortError(error)) throw error;
    throw networkError();
  }

  if (!response.ok) {
    throw new ProductsError(
      "http",
      `O servidor respondeu com erro ${response.status}.`,
    );
  }

  try {
    return await response.json();
  } catch {
    throw new ProductsError("format", "A resposta não é um JSON válido.");
  }
}

async function loadBody(signal?: AbortSignal): Promise<unknown> {
  // Em desenvolvimento, tenta também o proxy do Vite (contorna CORS).
  const urls = import.meta.env.DEV
    ? [PRODUCTS_URL, DEV_PROXY_URL]
    : [PRODUCTS_URL];

  for (const url of urls) {
    try {
      return await requestJson(url, signal);
    } catch (error) {
      if (isAbortError(error)) throw error;
      console.warn(`Falha ao carregar produtos de ${url}`, error);
    }
  }

  // Último recurso: cópia local do JSON.
  console.warn("Usando a cópia local dos produtos.");
  return productsData;
}

export async function fetchProducts(signal?: AbortSignal): Promise<Product[]> {
  const body = (await loadBody(signal)) as Partial<ProductsResponse> | null;

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
