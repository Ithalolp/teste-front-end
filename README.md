<h1 align="center">Teste Front-End Jr - Econverse</h1>

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

---

## Índice

- [Sobre o projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias](#tecnologias)
- [Começando](#começando)
- [Scripts disponíveis](#scripts-disponíveis)
- [Como testar](#como-testar)
- [Origem dos dados](#origem-dos-dados)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Decisões técnicas](#decisões-técnicas)
- [Deploy](#deploy)
- [Autor](#autor)

## Sobre o projeto

Projeto desenvolvido como teste técnico para a vaga de Front-End Júnior na Econverse. A aplicação reproduz o layout fornecido no Figma e exibe uma vitrine de produtos carregados a partir de um JSON. Ao clicar em um produto, um modal apresenta suas principais informações.

**Demo:** https://ithalolp.github.io/teste-front-end/

## Funcionalidades

- Vitrine de produtos consumindo o JSON disponibilizado no teste
- Modal com os detalhes do produto selecionado
- Estados de carregamento e de erro
- HTML semântico e boas práticas de SEO
- Estilização com Sass, sem bibliotecas de UI

## Tecnologias

| Tecnologia | Uso |
|---|---|
| [React](https://react.dev/) | Construção da interface e componentização |
| [TypeScript](https://www.typescriptlang.org/) | Tipagem estática |
| [Vite](https://vitejs.dev/) | Servidor de desenvolvimento e build |
| [Sass](https://sass-lang.com/) | Pré-processador de CSS |

## Começando

### Pré-requisitos

- [Node.js](https://nodejs.org/) 18 ou superior (recomendado: 20)
- npm (instalado junto com o Node.js)

### Instalação

```bash
# Clonar o repositório
git clone https://github.com/Ithalolp/teste-front-end.git

# Acessar a pasta do projeto
cd teste-front-end

# Instalar as dependências
npm install
```

### Executando em desenvolvimento

```bash
npm run dev
```

A aplicação ficará disponível no endereço exibido no terminal (normalmente `http://localhost:5173`).

### Gerando o build de produção

```bash
npm run build
```

Os arquivos otimizados são gerados na pasta `dist`. Para visualizar o resultado localmente:

```bash
npm run preview
```

## Scripts disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Verifica os tipos (`tsc`) e gera o build de produção |
| `npm run preview` | Serve localmente o build gerado |

## Como testar

A verificação de tipos é executada junto com o build:

```bash
npm run build
```

Roteiro de teste manual:

1. Execute `npm run dev` e abra a página no navegador.
2. Confirme que a vitrine exibe os produtos.
3. Clique em um produto e verifique se o modal abre com as informações corretas.
4. Feche o modal e abra outro produto para confirmar que os dados mudam.
5. Redimensione a janela para conferir o comportamento em telas menores.

## Origem dos dados

Os produtos são carregados do JSON disponibilizado no teste:

```
https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json
```

O carregamento segue esta ordem de prioridade:

1. **Requisição direta** ao endereço acima.
2. **Proxy do Vite** (apenas em desenvolvimento), que contorna possíveis bloqueios de CORS.
3. **Cópia local** em `src/data/products.json`, usada como último recurso caso as requisições falhem.

## Estrutura do projeto

```
.
├── .github/workflows/    # Pipeline de deploy (GitHub Actions)
├── public/               # Arquivos estáticos
├── src/
│   ├── components/       # Componentes React
│   ├── data/             # Cópia local do JSON de produtos
│   ├── services/         # Acesso aos dados (productService.ts)
│   ├── styles/           # Arquivos Sass
│   └── types/            # Tipagens TypeScript
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Decisões técnicas

- **Componentização:** a interface é dividida em componentes reutilizáveis, cada um com uma responsabilidade clara.
- **Camada de serviço:** a lógica de acesso aos dados fica isolada em `services/`, separada dos componentes.
- **Tratamento de erros:** falhas de rede, de HTTP e de formato são tratadas com erros tipados (`ProductsError`).
- **Validação dos dados:** itens fora do formato esperado são descartados e imagens só são carregadas se a URL usar `https`.
- **Resiliência:** em caso de falha na requisição, a aplicação recorre a uma cópia local dos dados.
- **Acessibilidade e SEO:** uso de HTML semântico e das boas práticas de SEO exigidas no teste.

## Deploy

O deploy é automático no **GitHub Pages**, via GitHub Actions (`.github/workflows/deploy.yml`), a cada push na branch `main`.

O `vite.config.ts` define `base: '/teste-front-end/'`, necessário para servir a aplicação no subcaminho do GitHub Pages.

## Autor

**Ithalo**

[![GitHub](https://img.shields.io/badge/GitHub-Ithalolp-181717?style=flat&logo=github)](https://github.com/Ithalolp)
