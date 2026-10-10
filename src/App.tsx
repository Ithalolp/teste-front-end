import { useRef, useState } from "react";
import type { Product } from "./types/product";
import { useProducts } from "./hooks/useProducts";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { CategoryNavigation } from "./components/CategoryNavigation/CategoryNavigation";
import { ProductShowcase } from "./components/ProductShowcase/ProductShowcase";
import { PartnerBanners } from "./components/PartnerBanners/PartnerBanners";
import { BrandsSection } from "./components/BrandsSection/BrandsSection";
import { Newsletter } from "./components/Newsletter/Newsletter";
import { Footer } from "./components/Footer/Footer";
import { ProductModal } from "./components/ProductModal/ProductModal";

const TABS = [
  "Celular",
  "Acessórios",
  "Tablets",
  "Notebooks",
  "TVs",
  "Ver todos",
];

export default function App() {
  const { products, status, error, retry } = useProducts();
  const [selected, setSelected] = useState<Product | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  const showcase = {
    products,
    status,
    errorMessage: error,
    onRetry: retry,
    onSelect: (p: Product, t: HTMLElement) => {
      triggerRef.current = t;
      setSelected(p);
    },
  };

  const handleClose = () => {
    setSelected(null);
    // Devolve o foco ao card só depois que o modal desmontar
    window.setTimeout(() => triggerRef.current?.focus(), 0);
  };

  return (
    <>
      <Header />
      <main>
        <Hero />
        <CategoryNavigation />
        <ProductShowcase id="produtos" tabs={TABS} {...showcase} />
        <PartnerBanners />
        <ProductShowcase id="produtos-2" {...showcase} />
        <PartnerBanners />
        <BrandsSection />
        <ProductShowcase id="produtos-3" {...showcase} />
      </main>
      <Newsletter />
      <Footer />
      {selected && <ProductModal product={selected} onClose={handleClose} />}
    </>
  );
}
