# Estrutura Frontend: `resources/js`

Este documento descreve apenas a estrutura da pasta `resources/js` e serve como guia rapido para humanos ou agentes que precisem gerar novas paginas React/Inertia de forma componentizada.

Estado actual: o projecto ja possui `Pages/` e `design-system/`. As pastas `Components/` e `Layout/` ainda nao existem fisicamente, mas devem ser criadas quando a primeira pagina exigir componentes reutilizaveis ou um layout comum.

---

## Arvore Actual

```text
resources/js/
|-- Pages/
|   `-- Home.jsx
|-- design-system/
|   |-- DesignSystem.md
|   |-- animations.ts
|   |-- index.ts
|   |-- radius.ts
|   |-- shadows.ts
|   |-- spacing.ts
|   |-- theme.ts
|   |-- tokens.ts
|   `-- typography.ts
|-- app.jsx
`-- bootstrap.js
```

---

## Estrutura Recomendada Para Evolucao

```text
resources/js/
|-- Components/
|   |-- UI/
|   |-- Shared/
|   |-- Home/
|   |-- Forms/
|   `-- Layout/
|-- Layout/
|   |-- PublicLayout.jsx
|   |-- AuthLayout.jsx
|   `-- AdminLayout.jsx
|-- Pages/
|   |-- Home.jsx
|   |-- About.jsx
|   |-- Services.jsx
|   |-- Specialties.jsx
|   |-- Training.jsx
|   |-- News.jsx
|   |-- Gallery.jsx
|   `-- Contact.jsx
|-- design-system/
|-- app.jsx
`-- bootstrap.js
```

---

## `app.jsx`

Ponto de entrada do frontend React/Inertia.

Inclui:

- inicializacao do Inertia React;
- resolucao automatica de paginas dentro de `Pages/**/*.jsx`;
- montagem da app com `createRoot`;
- configuracao da barra de progresso do Inertia;
- import de `bootstrap.js`.

Regra pratica:

- nao colocar UI de pagina aqui;
- nao colocar regras de negocio aqui;
- manter este ficheiro apenas como bootstrap da aplicacao React.

---

## `bootstrap.js`

Ficheiro de inicializacao de bibliotecas globais.

Inclui:

- configuracao do `axios`;
- header `X-Requested-With` para chamadas AJAX ao backend Laravel.

Regra pratica:

- adicionar aqui apenas configuracoes globais e transversais;
- clientes de API por dominio devem viver futuramente em `Services/`, nao aqui.

---

## `Pages/`

Pasta das paginas Inertia. Cada ficheiro em `Pages/` representa uma tela renderizada a partir de uma rota Laravel.

Actual:

```text
Pages/
`-- Home.jsx
```

O que deve conter:

- paginas de rota, como `Home.jsx`, `About.jsx`, `Contact.jsx`;
- composicao de secoes e componentes;
- chamadas a layouts;
- definicao de `<Head />` para titulo e metadados da pagina.

O que evitar:

- componentes pequenos reutilizaveis;
- estilos complexos inline;
- logica duplicada;
- chamadas de API espalhadas directamente pela pagina, quando puderem virar services/hooks.

Padrao recomendado para uma pagina:

```jsx
import { Head } from '@inertiajs/react';
import PublicLayout from '../Layout/PublicLayout';
import Hero from '../Components/Home/Hero';
import ServicesPreview from '../Components/Home/ServicesPreview';

export default function Home(props) {
    return (
        <PublicLayout>
            <Head title="Inicio" />
            <Hero />
            <ServicesPreview />
        </PublicLayout>
    );
}
```

Regra pratica para agentes:

- ao gerar uma nova pagina, criar primeiro o ficheiro em `Pages/`;
- se a pagina tiver blocos grandes, extrair cada bloco para `Components/<NomeDaPagina>/`;
- se algo for usado por mais de uma pagina, mover para `Components/Shared/` ou `Components/UI/`.

---

## `Components/`

Pasta recomendada para componentes React reutilizaveis. Ainda nao existe fisicamente no projecto actual.

Estrutura sugerida:

```text
Components/
|-- UI/
|   |-- Button/
|   |-- Card/
|   |-- Input/
|   |-- Modal/
|   |-- Tabs/
|   `-- Tooltip/
|-- Shared/
|   |-- CTA/
|   |-- DoctorCard/
|   |-- NewsCard/
|   |-- Statistics/
|   `-- Testimonials/
|-- Home/
|   |-- Hero/
|   |-- ServicesPreview/
|   |-- DoctorsPreview/
|   `-- NewsPreview/
|-- Forms/
|   |-- ContactForm/
|   `-- NewsletterForm/
`-- Layout/
    |-- Navbar/
    |-- Footer/
    |-- Breadcrumb/
    `-- MobileMenu/
```

### `Components/UI/`

Componentes genericos e reutilizaveis, sem conhecimento do dominio da clinica.

Inclui:

- `Button`;
- `Card`;
- `Badge`;
- `Input`;
- `TextArea`;
- `Select`;
- `Modal`;
- `Tabs`;
- `Accordion`;
- `Tooltip`;
- `Spinner`;
- `Skeleton`.

Regra pratica:

- um componente UI deve funcionar em qualquer pagina;
- deve receber dados por props;
- nao deve importar dados de pagina;
- deve usar tokens do `design-system` quando precisar de valores visuais partilhados.

### `Components/Shared/`

Componentes reutilizados em varias paginas, ja com significado do dominio.

Inclui:

- `DoctorCard`;
- `NewsCard`;
- `ServiceCard`;
- `SpecialtyCard`;
- `Statistics`;
- `CTA`;
- `Testimonials`;
- `PartnerCarousel`;
- `GalleryCard`.

Regra pratica:

- se o componente aparece em duas ou mais paginas, deve sair da pasta especifica da pagina e ir para `Shared/`.

### `Components/<NomeDaPagina>/`

Componentes exclusivos de uma pagina.

Exemplo para a home:

```text
Components/Home/
|-- Hero/
|-- ServicesPreview/
|-- DoctorsPreview/
|-- TestimonialsSection/
|-- NewsPreview/
`-- ContactCTA/
```

Regra pratica:

- componentes grandes de secao pertencem aqui;
- a pagina em `Pages/` apenas organiza a ordem dessas secoes;
- se a secao passar a ser reutilizada, mover para `Shared/`.

### Estrutura Interna de um Componente

Para componentes simples:

```text
Button/
|-- Button.jsx
`-- index.js
```

Para componentes com logica:

```text
ContactForm/
|-- ContactForm.jsx
|-- constants.js
|-- hooks.js
|-- schema.js
`-- index.js
```

Regra pratica:

- `index.js` deve exportar o componente principal;
- manter ficheiros auxiliares junto do componente quando forem usados apenas por ele;
- mover helpers reutilizaveis para uma pasta futura `Utils/` ou `Hooks/`.

---

## `Layout/`

Pasta recomendada para layouts de pagina. Ainda nao existe fisicamente no projecto actual.

Estrutura sugerida:

```text
Layout/
|-- PublicLayout.jsx
|-- AuthLayout.jsx
`-- AdminLayout.jsx
```

O que deve conter:

- estrutura comum de pagina;
- navbar;
- footer;
- wrappers de conteudo;
- providers visuais ou contextos globais;
- areas consistentes para breadcrumbs, SEO e slots.

### `PublicLayout.jsx`

Layout para paginas publicas do site institucional.

Inclui normalmente:

- `Navbar`;
- `main`;
- `Footer`;
- botoes flutuantes, quando existirem;
- estrutura base de pagina publica.

### `AuthLayout.jsx`

Layout para paginas de autenticacao.

Inclui normalmente:

- container centralizado;
- marca/logotipo;
- area para formulario;
- mensagens de feedback.

### `AdminLayout.jsx`

Layout para area administrativa, se vier a existir.

Inclui normalmente:

- sidebar;
- topbar;
- area de conteudo;
- breadcrumbs;
- menu de utilizador.

Regra pratica para agentes:

- uma pagina publica deve usar `PublicLayout`;
- uma pagina de login/registo deve usar `AuthLayout`;
- uma pagina interna administrativa deve usar `AdminLayout`;
- componentes de navbar/footer devem ficar em `Components/Layout/`, enquanto o wrapper da pagina fica em `Layout/`.

---

## `design-system/`

Pasta existente. Contem a fonte de verdade visual do frontend.

```text
design-system/
|-- DesignSystem.md
|-- animations.ts
|-- index.ts
|-- radius.ts
|-- shadows.ts
|-- spacing.ts
|-- theme.ts
|-- tokens.ts
`-- typography.ts
```

### `DesignSystem.md`

Documento de referencia da identidade visual e guidelines.

Inclui:

- personalidade da marca;
- cores;
- tipografia;
- espacamento;
- radius;
- sombras;
- grid;
- acessibilidade;
- performance;
- convencoes de componentes.

### `tokens.ts`

Tokens principais da marca.

Inclui:

- cores primarias;
- cores secundarias;
- cor de destaque;
- neutros;
- cores semanticas.

### `typography.ts`

Escala e regras tipograficas.

Usar para:

- tamanhos de titulos;
- tamanhos de texto;
- pesos;
- familia tipografica, quando definida.

### `spacing.ts`

Escala de espacamento.

Usar para:

- padding;
- margin;
- gap;
- espacamento entre secoes.

### `radius.ts`

Escala de border radius.

Usar para:

- inputs;
- botoes;
- cards;
- modais;
- containers.

### `shadows.ts`

Escala de sombras.

Usar para:

- elevacao discreta;
- cards;
- dropdowns;
- modais.

### `animations.ts`

Tokens e padroes de animacao.

Usar para:

- fades;
- slides;
- transicoes discretas;
- hover states.

### `theme.ts`

Tokens de tema e layout.

Inclui:

- breakpoints;
- largura de container;
- altura de navbar;
- espacamento de footer;
- altura de hero;
- duracoes de transicao.

### `index.ts`

Agregador dos tokens do design system.

Usar para:

- importar tokens a partir de um unico ponto;
- evitar imports espalhados quando um componente precisar de varios grupos de tokens.

Regra pratica para agentes:

- antes de criar valores visuais fixos, verificar `design-system/`;
- preferir tokens existentes para cores, sombras, radius, spacing e breakpoints;
- se um token novo for necessario, adicionar no ficheiro adequado e exportar pelo `index.ts`.

---

## Fluxo Recomendado Para Gerar Uma Nova Pagina

1. Criar a pagina em `resources/js/Pages/NomeDaPagina.jsx`.
2. Adicionar `<Head title="..." />` na pagina.
3. Envolver a pagina com o layout adequado em `Layout/`.
4. Criar secoes especificas em `Components/NomeDaPagina/`.
5. Reutilizar componentes existentes de `Components/UI/` e `Components/Shared/`.
6. Usar tokens de `design-system/` para decisoes visuais.
7. Manter `Pages/` como composicao e nao como deposito de UI complexa.

---

## Regras Rapidas de Decisao

- E uma rota/tela? Colocar em `Pages/`.
- E estrutura comum da pagina? Colocar em `Layout/`.
- E navbar, footer ou breadcrumb? Colocar em `Components/Layout/`.
- E um botao, input, card ou modal generico? Colocar em `Components/UI/`.
- E usado por varias paginas e tem dominio da clinica? Colocar em `Components/Shared/`.
- E exclusivo de uma pagina? Colocar em `Components/<NomeDaPagina>/`.
- E cor, spacing, typography, shadow ou radius? Procurar primeiro em `design-system/`.

