# Estrutura de Pastas do Projecto

Este documento descreve a estrutura actual do projecto Laravel 13 com Inertia.js e React.

Directorias pesadas ou geradas, como `node_modules/`, `vendor/`, `storage/framework/` e `public/build/`, foram omitidas da arvore para manter a leitura limpa.

---

## Visao Geral

```text
santacecilia/
|-- app/
|   |-- Http/
|   |   |-- Controllers/
|   |   `-- Middleware/
|   |-- Models/
|   `-- Providers/
|-- bootstrap/
|   |-- app.php
|   |-- providers.php
|   `-- cache/
|-- config/
|-- database/
|   |-- factories/
|   |-- migrations/
|   `-- seeders/
|-- docs/
|   `-- pages/
|-- public/
|-- resources/
|   |-- css/
|   |-- js/
|   |-- lang/
|   `-- views/
|-- routes/
|-- storage/
|-- tests/
|-- artisan
|-- composer.json
|-- package.json
|-- package-lock.json
|-- phpunit.xml
`-- vite.config.js
```

---

## Backend em Destaque

O backend esta concentrado nas pastas `app/`, `bootstrap/`, `config/`, `database/` e `routes/`.

```text
app/
|-- Http/
|   |-- Controllers/
|   |   `-- Controller.php
|   `-- Middleware/
|       `-- HandleInertiaRequests.php
|-- Models/
|   `-- User.php
`-- Providers/
    `-- AppServiceProvider.php

bootstrap/
|-- app.php
|-- providers.php
`-- cache/
    `-- .gitignore

config/
|-- app.php
|-- auth.php
|-- broadcasting.php
|-- cache.php
|-- database.php
|-- filesystems.php
|-- hashing.php
|-- logging.php
|-- mail.php
|-- queue.php
|-- services.php
|-- session.php
`-- view.php

database/
|-- factories/
|   `-- UserFactory.php
|-- migrations/
|   |-- 0001_01_01_000000_create_users_table.php
|   |-- 0001_01_01_000001_create_cache_table.php
|   `-- 0001_01_01_000002_create_jobs_table.php
`-- seeders/
    `-- DatabaseSeeder.php

routes/
|-- console.php
`-- web.php
```

### Responsabilidades Principais

- `app/Http/Controllers/`: controladores HTTP da aplicacao.
- `app/Http/Middleware/HandleInertiaRequests.php`: middleware que integra Laravel com Inertia.
- `app/Models/`: modelos Eloquent, incluindo `User`.
- `app/Providers/`: service providers da aplicacao.
- `bootstrap/app.php`: configuracao principal do Laravel 13, incluindo rotas e middleware.
- `config/`: configuracoes da aplicacao, autenticacao, base de dados, cache, mail, queue e sessao.
- `database/migrations/`: estrutura versionada da base de dados.
- `database/factories/`: factories para testes e seeders.
- `database/seeders/`: seeders da base de dados.
- `routes/web.php`: rotas web carregadas pelo Laravel.
- `routes/console.php`: comandos Artisan definidos pela aplicacao.

---

## Frontend em Destaque

O frontend esta concentrado em `resources/js/`, `resources/css/`, `resources/views/` e na configuracao `vite.config.js`.

```text
resources/
|-- css/
|   `-- app.css
|-- js/
|   |-- Pages/
|   |   `-- Home.jsx
|   |-- design-system/
|   |   |-- DesignSystem.md
|   |   |-- animations.ts
|   |   |-- index.ts
|   |   |-- radius.ts
|   |   |-- shadows.ts
|   |   |-- spacing.ts
|   |   |-- theme.ts
|   |   |-- tokens.ts
|   |   `-- typography.ts
|   |-- app.jsx
|   `-- bootstrap.js
|-- lang/
|   `-- en/
|       |-- auth.php
|       |-- pagination.php
|       |-- passwords.php
|       `-- validation.php
`-- views/
    |-- app.blade.php
    `-- welcome.blade.php

vite.config.js
package.json
package-lock.json
```

### Responsabilidades Principais

- `resources/js/app.jsx`: ponto de entrada React/Inertia.
- `resources/js/bootstrap.js`: configuracao inicial do Axios.
- `resources/js/Pages/`: paginas React renderizadas pelo Inertia.
- `resources/js/design-system/`: tokens e documentacao do design system.
- `resources/css/app.css`: estilos globais carregados pelo Vite.
- `resources/views/app.blade.php`: template raiz usado pelo Inertia.
- `resources/lang/`: ficheiros de traducao/localizacao.
- `vite.config.js`: configuracao do Vite, React, Tailwind e Laravel Vite Plugin.
- `package.json`: dependencias e scripts do frontend.

---

## Testes

```text
tests/
|-- Feature/
|   `-- ExampleTest.php
|-- Unit/
|   `-- ExampleTest.php
`-- TestCase.php
```

---

## Documentacao

```text
docs/
|-- API_SPECIFICATION.md
|-- BACKEND_ARCHITECTURE.md
|-- BRAND_GUIDELINES.md
|-- CONTRIBUTING.md
|-- DATABASE.md
|-- DEPLOYMENT.md
|-- DESIGN_SYSTEM.md
|-- FRONTEND_ARCHITECTURE.md
|-- GIT_WORKFLOW.md
|-- PROJECT_STRUCTURE.md
|-- PROJECT_VISION.md
|-- UX_GUIDELINES.md
`-- pages/
    |-- HOME_PAGE_SPECIFICATION.md
    `-- LANDING_PAGE_STRUCTURE.md
```

---

## Ficheiros de Configuracao na Raiz

```text
.editorconfig
.env
.env.example
.gitattributes
.gitignore
.npmrc
.styleci.yml
artisan
composer.json
package.json
package-lock.json
phpunit.xml
server.php
vite.config.js
```

