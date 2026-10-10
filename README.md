# Teste Front-End Jr - Econverse

Vitrine de produtos com modal de detalhes, desenvolvida em **React** e **TypeScript** a partir do layout do Figma do teste.

🔗 **Demo online:** https://ithalolp.github.io/teste-front-end/

## Sobre o projeto

A página exibe uma vitrine de produtos carregados a partir de um JSON. Ao clicar em um produto, abre-se um modal com as principais informações dele.

### Funcionalidades

- Vitrine de produtos consumindo o JSON da Econverse
- Modal com os detalhes do produto selecionado
- Estados de carregamento e de erro
- HTML semântico e boas práticas de SEO
- Estilos com Sass, sem bibliotecas de UI (Bootstrap, Foundation etc.)

## Tecnologias

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Sass](https://sass-lang.com/)

## Pré-requisitos

- [Node.js](https://nodejs.org/) 18 ou superior (recomendado: 20)
- npm (já vem com o Node.js)

Para conferir as versões instaladas:

```bash
node --version
npm --version
```

## Como rodar o projeto

```bash
# 1. Clonar o repositório
git clone https://github.com/Ithalolp/teste-front-end.git

# 2. Entrar na pasta do projeto
cd teste-front-end

# 3. Instalar as dependências
npm install

# 4. Iniciar o servidor de desenvolvimento
npm run dev
```

Depois, abra no navegador o endereço exibido no terminal (normalmente `http://localhost:5173`).

## Como compilar

```bash
npm run build
```

Os arquivos de produção são gerados na pasta `dist`. O comando também executa a checagem de tipos do TypeScript (`tsc`), então o build só conclui se não houver erros de tipagem.

Para visualizar localmente o resultado do build:

```bash
npm run preview
```

## Como testar

Verificação de tipos e build:

```bash
npm run build
```

Teste manual:

1. Rode `npm run dev` e abra a página.
2. Confira se a vitrine carrega os produtos.
3. Clique em um produto e verifique se o modal abre com as informações corretas.
4. Feche o modal (botão de fechar, clique fora ou tecla `Esc`, conforme implementado) e abra outro produto.
5. Redimensione a janela para conferir o comportamento em telas menores.

## Origem dos dados

Os produtos são carregados do JSON disponibilizado no teste:

https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json

O carregamento segue esta ordem:

1. **Requisição direta** ao link acima.
2. **Proxy do Vite** (somente em desenvolvimento), que contorna possíveis bloqueios de CORS.
3. **Cópia local** do JSON (`src/data/products.json`), usada como último recurso caso as requisições falhem.

Os dados recebidos são validados antes de serem exibidos. Itens fora do formato esperado são descartados, e imagens só são carregadas se a URL usar `https`.

## Estrutura do projeto

```
.
├── public/               # Arquivos estáticos
├── src/
│   ├── components/       # Componentes React (vitrine, card, modal etc.)
│   ├── data/             # Cópia local do JSON de produtos (fallback)
│   ├── services/         # Acesso aos dados (productService.ts)
│   ├── styles/           # Arquivos Sass
│   └── types/            # Tipagens TypeScript
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Deploy

O deploy é feito automaticamente no **GitHub Pages** por meio do GitHub Actions (`.github/workflows/deploy.yml`) a cada push na branch `main`.

O `vite.config.ts` define `base: '/teste-front-end/'`, necessário para o site funcionar no subcaminho do GitHub Pages.

## Autor

Desenvolvido por **Ithalo** - [GitHub](https://github.com/Ithalolp)
