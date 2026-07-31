# Design System
## Website Institucional da Clínica Santa Cecília

**Versão:** 1.0.0

**Última atualização:** Julho de 2026

---

# Objetivo

Este documento define a identidade visual, princípios de design, componentes, padrões e diretrizes para o desenvolvimento do Website da Clínica Santa Cecília.

O objetivo é garantir consistência visual, escalabilidade, acessibilidade e facilidade de manutenção durante todo o desenvolvimento do projeto.

Este documento deve ser considerado a única fonte de verdade para qualquer decisão relacionada com a interface.

---

# Filosofia

A Clínica Santa Cecília é uma instituição de saúde.

O website deve transmitir imediatamente:

- Confiança
- Excelência
- Humanização
- Tecnologia
- Organização
- Prestígio

O utilizador deve sentir a mesma confiança que teria ao entrar fisicamente na clínica.

O website não deverá parecer um template.

Queremos uma experiência moderna e memorável.

---

# Personalidade da Marca

A identidade visual comunica:

✔ Saúde

✔ Segurança

✔ Humanização

✔ Transparência

✔ Modernidade

✔ Inovação

✔ Acolhimento

---

# Conceito Visual

Healthcare Premium

Inspirado em produtos digitais modernos.

Características:

- muito espaço em branco
- layout respirável
- poucas cores
- tipografia elegante
- componentes minimalistas
- fotografias grandes
- animações discretas
- excelente usabilidade

---

# Logotipo

O logotipo nunca deverá ser alterado.

Não alterar:

- proporções
- cores
- margens
- tipografia

Sempre utilizar versões oficiais.

Manter área de proteção equivalente à altura da cruz.

---

# Identidade Cromática

## Verde

Cor principal da marca.

```text
#4FB27F
```

Representa

- Saúde
- Vida
- Crescimento
- Recuperação
- Esperança

Utilização

- botões principais
- links
- ícones
- indicadores
- estados activos

---

## Azul

```text
#17A2D4
```

Representa

- confiança
- tecnologia
- profissionalismo
- estabilidade

Utilização

- elementos médicos
- hover
- destaques
- secções institucionais

---

## Laranja

```text
#FBA546
```

Representa

- acolhimento
- energia
- proximidade
- cuidado humano

Utilizar apenas para destaque.

Nunca dominar a interface.

---

# Cores Neutras

Background

```text
#F8FAFC
```

Surface

```text
#FFFFFF
```

Texto

```text
#1F2937
```

Texto Secundário

```text
#6B7280
```

Bordas

```text
#E5E7EB
```

---

# Gradientes

Principal

```css
linear-gradient(
135deg,
#4FB27F,
#17A2D4
)
```

Usar apenas em:

- Hero
- CTA
- Backgrounds especiais

---

# Tipografia

## Fonte Principal

Poppins

Uso

- títulos
- menus
- botões

---

## Fonte Secundária

Inter

Uso

- textos
- formulários
- descrições
- tabelas

---

# Escala Tipográfica

| Elemento | Tamanho |
|----------|---------|
| H1 | 56px |
| H2 | 42px |
| H3 | 32px |
| H4 | 26px |
| H5 | 22px |
| Body | 18px |
| Small | 16px |
| Caption | 14px |

---

# Espaçamento

Todo o sistema utiliza múltiplos de 8.

```
4
8
16
24
32
40
48
64
80
96
120
```

---

# Border Radius

Inputs

12px

Botões

14px

Cards

18px

Containers

24px

Hero

32px

---

# Sombras

Nunca utilizar sombras exageradas.

Pequenas elevações.

```
sm

md

lg

xl
```

---

# Grid

Desktop

12 colunas

Tablet

8 colunas

Mobile

4 colunas

---

# Breakpoints

```text
sm
640

md
768

lg
1024

xl
1280

2xl
1536
```

---

# Containers

Largura máxima

```text
1280px
```

Padding

Desktop

32px

Tablet

24px

Mobile

16px

---

# Layout

Navbar

88px

Hero

90vh

Footer

Padding Superior

96px

Espaçamento entre secções

120px

---

# Componentes

## Layout

- AppLayout
- Navbar
- Footer
- Container
- Section
- Hero
- Breadcrumb

---

## Botões

- Primary
- Secondary
- Outline
- Ghost
- Link

Todos devem suportar:

- loading
- disabled
- ícones
- tamanhos

---

## Cards

- DoctorCard
- ServiceCard
- SpecialtyCard
- TestimonialCard
- EventCard
- NewsCard
- GalleryCard
- PartnerCard
- TrainingCard

---

## Inputs

- TextInput
- PasswordInput
- TextArea
- Select
- Checkbox
- Radio
- Switch

---

## Feedback

- Alert
- Toast
- Modal
- Spinner
- Skeleton
- Progress

---

## Navegação

- Navbar
- MobileMenu
- MegaMenu
- Breadcrumb
- Pagination

---

## Conteúdo

- Accordion
- Tabs
- Timeline
- Statistics
- FAQ

---

# Ícones

Biblioteca

Lucide React

Todos os ícones devem utilizar:

Stroke

2px

Outline

---

# Fotografia

Dar prioridade a fotografias reais da Clínica Santa Cecília.

Evitar bancos de imagens sempre que possível.

Caso seja necessário utilizar imagens externas:

- ambiente hospitalar moderno
- diversidade
- tecnologia
- atendimento humanizado

Nunca utilizar imagens de baixa qualidade.

---

# Ilustrações

Minimalistas.

Poucas.

Preferencialmente SVG.

---

# Animações

Discretas.

Tipos permitidos

- Fade
- Slide
- Scale
- Hover

Evitar:

- Bounce
- Flash
- Shake
- Zoom exagerado

---

# Responsividade

Todo o desenvolvimento seguirá Mobile First.

Todos os componentes devem funcionar em:

- telemóvel
- tablet
- desktop

---

# Acessibilidade

O sistema deverá cumprir WCAG AA.

Requisitos

- contraste adequado
- navegação por teclado
- focus visível
- alt em imagens
- labels em formulários
- HTML semântico

---

# Performance

Metas

Lighthouse

Performance

95+

Accessibility

100

SEO

100

Best Practices

100

---

# Estrutura do Frontend

resources/
└── js/
    ├── design-system/
    ├── Components/
    ├── Layouts/
    ├── Pages/
    ├── Hooks/
    ├── Utils/
    ├── Services/
    ├── Data/
    ├── Types/
    └── Assets/

---

# Estrutura do Design System

design-system/

    README.md

    tokens.ts

    theme.ts

    typography.ts

    spacing.ts

    radius.ts

    shadows.ts

    animations.ts

    index.ts

---

# Convenções

## Componentes

PascalCase

```
DoctorCard.tsx
```

---

## Hooks

camelCase

```
useTheme.ts
```

---

## Páginas

PascalCase

```
Home.tsx
```

---

## Tipos

```
Doctor.ts

News.ts
```

---

# Princípios de Desenvolvimento

Todo componente deve ser:

- reutilizável
- desacoplado
- tipado
- documentado
- responsivo
- acessível

---

# Stack

Laravel 13

Inertia.js v2

React 19

TypeScript

Tailwind CSS v4

Vite

Lucide React

Axios

---

# Evolução

No futuro este Design System deverá tornar-se uma biblioteca própria contendo:

- documentação
- exemplos
- Storybook
- tokens
- componentes
- temas
- ícones
- guidelines de UX

Este documento deverá ser atualizado sempre que houver alterações significativas na identidade visual, arquitetura de componentes ou padrões de desenvolvimento.
