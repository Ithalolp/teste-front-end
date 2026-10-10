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
