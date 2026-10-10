<h1 align="center">Teste Econverse - Desenvolvedor Front-End</h1>

<p align="center">
  Vitrine de produtos com modal de detalhes, desenvolvida em React e TypeScript.
</p>

<p align="center">
  <a href="https://ithalolp.github.io/teste-front-end/">
    <img src="https://img.shields.io/badge/▶_VER_DEMO_ONLINE-2ea44f?style=for-the-badge&logo=github" alt="Ver demo online" />
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Sass-CC6699?style=flat&logo=sass&logoColor=white" alt="Sass" />
</p>

Este projeto foi desenvolvido como parte do processo seletivo para a vaga de Desenvolvedor Front-End na Econverse.

---

## 🖥️ Página

<p align="center">
  <a href="https://ithalolp.github.io/teste-front-end/">
    <img src="docs/preview.png" alt="Pré-visualização da página" width="800" />
  </a>
</p>

---

## 📱 Responsividade

<p align="center">
  <img src="docs/responsivo.png" alt="Layout em diferentes tamanhos de tela" width="800" />
</p>

---

## 📋 Sobre o Projeto

Aplicação desenvolvida em React e TypeScript que exibe uma vitrine de produtos carregados a partir de um JSON. Ao clicar em um produto, um modal interativo apresenta as principais informações dele. O layout segue o design do Figma fornecido no teste.

**Demo:** https://ithalolp.github.io/teste-front-end/

## 🚀 Tecnologias Utilizadas

- **React** - Biblioteca JavaScript para construção de interfaces
- **TypeScript** - Superset do JavaScript com tipagem estática
- **Vite** - Build tool moderna e rápida
- **Sass (SCSS)** - Pré-processador CSS
- **HTML5 Semântico** - Estrutura semântica para melhor SEO e acessibilidade
- **GitHub Actions + GitHub Pages** - Deploy automático

## 📦 Pré-requisitos

- [Node.js](https://nodejs.org/) 18 ou superior (recomendado: 20)
- npm (instalado junto com o Node.js)

## 🛠️ Instalação

1. Clone o repositório:

```bash
git clone https://github.com/Ithalolp/teste-front-end.git
cd teste-front-end
```

2. Instale as dependências:

```bash
npm install
```

## ▶️ Executando o Projeto

### Modo de Desenvolvimento

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`.

### Build para Produção

```bash
npm run build
```

Os arquivos otimizados são gerados na pasta `dist`. O comando também executa a checagem de tipos do TypeScript (`tsc`).

### Pré-visualizar o Build

```bash
npm run preview
```

## 🧪 Como Testar

1. Execute `npm run dev` e abra a página.
2. Confirme que a vitrine exibe os produtos.
3. Clique em um produto e verifique se o modal abre com as informações corretas.
4. Feche o modal e abra outro produto para conferir que os dados mudam.
5. Redimensione a janela para conferir o comportamento em telas menores.
6. Rode `npm run build` para validar a tipagem e a geração do build.

## 🔌 Origem dos Dados

Os produtos são carregados do JSON disponibilizado no teste:

```
https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json
```

O carregamento segue esta ordem:

1. **Requisição direta** ao endereço acima.
2. **Proxy do Vite** (apenas em desenvolvimento), que contorna possíveis bloqueios de CORS.
3. **Cópia local** em `src/data/products.json`, usada como último recurso caso as requisições falhem.

Os dados são validados antes de serem exibidos: itens fora do formato esperado são descartados e imagens só são carregadas se a URL usar `https`.

## 📁 Estrutura do Projeto

```
teste-front-end/
├── .github/workflows/      # Deploy automático (GitHub Actions)
├── docs/                   # Imagens usadas no README
├── public/                 # Arquivos estáticos
├── src/
│   ├── components/         # Componentes React
│   ├── data/               # Cópia local do JSON de produtos (fallback)
│   ├── services/           # Acesso aos dados (productService.ts)
│   ├── styles/             # Estilos Sass
│   ├── types/              # Definições TypeScript
│   ├── App.tsx             # Componente principal
│   └── main.tsx            # Ponto de entrada
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## 🎯 Funcionalidades Implementadas

- ✅ Vitrine de produtos consumindo dados do JSON via requisição
- ✅ Modal interativo ao clicar em um produto
- ✅ Estados de carregamento e de erro
- ✅ Tratamento de falhas com erros tipados e fallback local
- ✅ Componentização adequada e reutilizável
- ✅ HTML semântico
- ✅ Boas práticas de SEO
- ✅ Estilização com Sass
- ✅ Deploy automático no GitHub Pages

## 📝 Especificações Técnicas Atendidas

- ✅ Desenvolvido em React e TypeScript
- ✅ Layout conforme o Figma do teste
- ✅ Consumo de produtos via JSON
- ✅ Modal com as informações do produto clicado
- ✅ Pré-processador Sass utilizado
- ✅ Sem uso de bibliotecas de UI (Bootstrap, Foundation etc.)
- ✅ HTML semântico
- ✅ Boas práticas de SEO

---

<p align="center">
  Desenvolvido por <strong>Ithalo</strong><br /><br />
  <a href="https://github.com/Ithalolp">
    <img src="https://img.shields.io/badge/GitHub-Ithalolp-181717?style=flat&logo=github" alt="GitHub" />
  </a>
</p>
