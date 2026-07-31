# Frontend Architecture
## Website Institucional da Clínica Santa Cecília

**Versão:** 1.0.0

---

# Objetivo

Este documento define a arquitetura do Frontend da aplicação.

O objetivo é estabelecer uma estrutura organizada, escalável e reutilizável, baseada em Laravel + Inertia.js + React, permitindo que a equipa desenvolva novas funcionalidades de forma consistente e com baixo acoplamento.

---

# Stack Tecnológica

Frontend

- React 19
- TypeScript
- Inertia.js v2
- Vite
- Tailwind CSS v4
- Axios
- Lucide React

Backend

- Laravel 13

---

# Filosofia

O frontend deverá ser:

- Component Based
- Mobile First
- Atomic
- Responsivo
- Reutilizável
- Tipado
- Escalável

Nenhuma página deverá conter código excessivo.

Toda interface deve ser composta por pequenos componentes.

---

# Estrutura do Projeto

resources/

└── js/

    ├── app.tsx
    
    ├── bootstrap.ts
    
    ├── Layouts/
    
    ├── Pages/
    
    ├── Components/
    
    ├── Hooks/
    
    ├── Services/
    
    ├── Utils/
    
    ├── Data/
    
    ├── Types/
    
    ├── Config/
    
    ├── Constants/
    
    ├── Assets/
    
    ├── design-system/
    
    └── lib/

---

# Pages

Cada ficheiro representa uma rota Inertia.

Exemplo

Pages/

Home/

About/

Services/

Specialties/

Training/

News/

Gallery/

Contact/

Cada página apenas organiza componentes.

A lógica deverá permanecer nos componentes ou hooks.

---

# Layouts

Layouts definem a estrutura comum.

Exemplo

PublicLayout

AdminLayout

AuthLayout

Cada Layout deverá conter:

Navbar

Footer

SEO

Breadcrumb

Providers

---

# Components

Os componentes deverão ser agrupados por domínio.

Components/

UI/

Layout/

Home/

About/

Services/

Specialties/

News/

Gallery/

Training/

Forms/

Shared/

---

# Componentes UI

São completamente reutilizáveis.

Exemplos

Button

Card

Badge

Input

Avatar

Container

Section

Modal

Drawer

Tabs

Accordion

Tooltip

Spinner

Skeleton

---

# Componentes Shared

São utilizados em várias páginas.

Exemplo

DoctorCard

NewsCard

Statistics

CTA

FloatingButtons

PartnerCarousel

Testimonials

---

# Componentes de Página

Cada página poderá possuir componentes exclusivos.

Exemplo

Home/

Hero.tsx

Features.tsx

Statistics.tsx

Services.tsx

Doctors.tsx

Testimonials.tsx

News.tsx

Gallery.tsx

CTA.tsx

---

# Assets

Organização

Assets/

images/

icons/

videos/

logos/

backgrounds/

---

# Services

Responsável pela comunicação com APIs.

Exemplo

news.service.ts

doctor.service.ts

contact.service.ts

---

# Hooks

Toda lógica reutilizável deverá ficar aqui.

Exemplo

useWindowSize

useScroll

useBreakpoint

useCounter

useTheme

useModal

---

# Utils

Funções auxiliares.

Exemplo

formatDate

truncate

slugify

currency

validators

---

# Constants

Informação fixa.

Exemplo

navigation.ts

social.ts

routes.ts

colors.ts

---

# Types

Interfaces.

Exemplo

Doctor.ts

News.ts

Gallery.ts

Service.ts

Specialty.ts

---

# Config

Configurações.

Exemplo

seo.ts

axios.ts

animations.ts

---

# Design System

Toda identidade visual.

Nunca utilizar valores fixos.

Sempre utilizar Tokens.

---

# Estrutura dos Componentes

Cada componente deverá conter:

Component.tsx

types.ts

index.ts

Opcionalmente

hooks.ts

constants.ts

---

# Convenções

Componentes

PascalCase

Button.tsx

Pages

PascalCase

Home.tsx

Hooks

camelCase

useScroll.ts

Interfaces

PascalCase

Doctor.ts

---

# Estado

Nesta primeira versão

Preferir

Props

State Local

Context API

Evitar Redux.

---

# Comunicação

Sempre descendente.

Page

↓

Section

↓

Component

↓

UI

---

# Responsabilidade

Pages

Organização

Components

Interface

Hooks

Lógica

Services

API

Utils

Funções

---

# Performance

Lazy Loading

Code Splitting

Dynamic Imports

Image Optimization

Memoização quando necessário.

---

# SEO

Cada página deverá definir:

Title

Description

Open Graph

Canonical URL

---

# Acessibilidade

Todos componentes deverão possuir:

Keyboard Support

ARIA Labels

Focus States

Contraste WCAG AA

---

# Objetivo Final

A arquitetura deverá permitir que qualquer novo módulo seja desenvolvido sem alterar módulos existentes, promovendo baixo acoplamento, alta reutilização e facilidade de manutenção.
