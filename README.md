# Teste Front-End Jr - Econverse

Vitrine de produtos com modal de detalhes, desenvolvida em React e TypeScript, consumindo os dados de um JSON externo.

## Funcionalidades

- Vitrine de produtos carregada a partir do JSON da API
- Modal com as principais informações do produto ao clicar no card
- Layout responsivo seguindo o design do Figma
- HTML semântico e boas práticas de SEO

## Tecnologias

- React
- TypeScript
- Vite
- Sass

## Pré-requisitos

- [Node.js](https://nodejs.org/) 18 ou superior
- npm

## Como rodar o projeto

```bash
# 1. Clonar o repositório
git clone https://github.com/Ithalolp/teste-front-end.git

# 2. Entrar na pasta
cd teste-front-end

# 3. Instalar as dependências
npm install

# 4. Rodar em modo desenvolvimento
npm run dev
```

Depois, acesse o endereço que aparecer no terminal (normalmente `http://localhost:5173`).

## Como compilar

```bash
npm run build
```

Os arquivos de produção serão gerados na pasta `dist`. Para visualizar o resultado:

```bash
npm run preview
```

## Como testar

```bash
npm test
```

> Se o projeto não tiver testes automatizados, remova esta seção ou descreva o teste manual: abrir a página, conferir a vitrine e clicar em um produto para verificar o modal.

## Estrutura do projeto

```
src/
├── components/   # Componentes reutilizáveis (card, modal, vitrine)
├── services/     # Requisição dos produtos
├── styles/       # Arquivos Sass
└── types/        # Tipagens TypeScript
public/           # Arquivos estáticos
```

## Dados

Os produtos são carregados de:
https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json

## Autor

Ithalo - [GitHub](https://github.com/Ithalolp)
