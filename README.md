# Vitrine de Produtos — Desafio Front-End Econverse

Vitrine de produtos em React + TypeScript. Os produtos são buscados do JSON oficial
e, ao clicar em "Comprar", um modal exibe os dados do produto selecionado.

## Funcionalidades
- Página completa conforme o Figma: header, hero, categorias, vitrines com carrossel, parceiros, marcas, newsletter e rodapé
- Produtos consumidos do JSON oficial (uma única requisição compartilhada), com carregamento, erro + "Tentar novamente" e lista vazia
- Modal acessível (`<dialog>`) com imagem, nome, preço, descrição e seletor de quantidade; fecha com Esc, botão ou clique no fundo
- Responsivo (4 → 3 → 2 → 1 cards por linha)

## Tecnologias
React 18, TypeScript, Vite, Sass (SCSS), Fetch API.

## Pré-requisitos
Node.js 18+ e npm.

## Comandos
```bash
npm install        # instala dependências
npm run dev        # desenvolvimento
npm run typecheck  # checagem de tipos
npm run build      # build de produção (pasta dist)
npm run preview    # visualiza o build
```

## Estrutura
```
src/
  components/ProductShowcase | ProductCard | ProductModal
  hooks/useProducts.ts
  services/productService.ts
  types/product.ts
  styles/ (_variables, _reset, main)
```

## Fonte dos dados
https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json

## Limitações conhecidas
- Cores e medidas foram estimadas a partir de capturas de tela do Figma; conferir no Inspect.
- Imagens do hero e dos parceiros precisam ser exportadas do Figma para `public/images/` (`hero.jpg`, `parceiros.jpg`); sem elas aparece um fundo escuro.
- Os ícones de categoria e o logo são aproximações em SVG/CSS; substituir pelos SVGs do Figma.
- O JSON só tem nome, descrição, foto e preço: preço antigo, parcelamento e frete grátis (presentes no Figma) não são exibidos nos cards. O link "Veja mais detalhes do produto" do modal também foi omitido (sem destino definido).
- Abas de categoria, menu, rodapé e busca são apenas visuais. A newsletter só valida os campos; o botão COMPRAR do modal avisa que o carrinho está fora do escopo.
- Em desenvolvimento, se a requisição direta ao JSON falhar (ex.: CORS), o app tenta via proxy do Vite (`/econverse-proxy`). Em produção a requisição é direta.
- Se os produtos não carregarem, a mensagem indica a causa (HTTP, rede/CORS ou formato) e o console traz o detalhe.

## Testes manuais
Conferir: 10 produtos nos carrosséis; modal mostra o item clicado; Esc fecha; Tab fica preso no modal;
simular offline no DevTools exibe o erro e "Tentar novamente" recarrega.
