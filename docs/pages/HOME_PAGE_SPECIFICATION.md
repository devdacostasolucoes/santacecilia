# Home Page Specification
## Website Institucional da Clínica Santa Cecília

**Documento:** HOME_PAGE_SPECIFICATION.md

**Versão:** 1.0

**Última atualização:** Julho 2026

---

# Objetivo

A Homepage é a principal porta de entrada do Website da Clínica Santa Cecília.

Tem como missão apresentar a instituição, transmitir confiança, facilitar o acesso rápido aos principais serviços e conduzir o utilizador às ações mais importantes.

---

# Objetivos de Negócio

A Homepage deverá:

- Apresentar a Clínica Santa Cecília como uma instituição de excelência.
- Destacar os principais serviços e especialidades.
- Incentivar o agendamento de consultas.
- Promover o Centro de Formação.
- Divulgar notícias e eventos.
- Demonstrar credibilidade através de números, infraestrutura e testemunhos.
- Facilitar o contacto imediato.

---

# Objetivos de UX

O utilizador deverá conseguir responder rapidamente às seguintes perguntas:

- Quem são?
- Que serviços oferecem?
- Quais as especialidades?
- Porque devo confiar?
- Como posso marcar uma consulta?
- Como entro em contacto?

Tempo máximo para encontrar qualquer uma destas respostas:

**Menos de 30 segundos.**

---

# Estrutura Geral

Navbar

↓

Hero

↓

Indicadores

↓

Quem Somos

↓

Especialidades

↓

Serviços

↓

Porque Escolher a Clínica

↓

Centro de Formação

↓

Corpo Clínico

↓

Infraestruturas & Tecnologia

↓

Testemunhos

↓

Galeria

↓

Notícias

↓

Parceiros

↓

FAQ

↓

Call To Action

↓

Mapa

↓

Footer

---

# 1. Navbar

## Objetivo

Permitir navegação rápida.

---

## Conteúdo

- Logotipo
- Home
- Sobre Nós
- Serviços
- Especialidades
- Centro de Formação
- Actualidade
- Contactos

Botão

Marcar Consulta

---

## UX

Desktop

Menu horizontal.

Mobile

Hamburger Menu.

Navbar fixa após scroll.

---

## Componentes

Navbar

Navigation

MobileMenu

Logo

Button

---

# 2. Hero

## Objetivo

Criar uma excelente primeira impressão.

---

## Conteúdo

Imagem institucional em alta resolução.

Título principal.

Subtítulo.

Botões:

- Marcar Consulta
- Conheça os Serviços

Indicadores rápidos.

---

## Dados

Imagem

Texto institucional

CTA

---

## Componentes

Hero

HeroContent

HeroImage

Button

Badge

---

## Critérios

Responsivo.

Imagem otimizada.

Animações discretas.

---

# 3. Indicadores

## Objetivo

Gerar credibilidade.

---

## Conteúdo

Exemplos

- Especialidades
- Médicos
- Pacientes
- Anos de Experiência

---

## UX

Animação de contadores.

---

## Componentes

Statistics

CounterCard

---

# 4. Quem Somos

## Objetivo

Apresentar a instituição.

---

## Conteúdo

Imagem

Resumo institucional

Botão

Conheça a Clínica

---

## Componentes

Section

ImageCard

Button

---

# 5. Especialidades

## Objetivo

Mostrar rapidamente as principais especialidades.

---

## Layout

Grid

Desktop

3 colunas.

Tablet

2.

Mobile

1.

---

## Card

Imagem

Nome

Resumo

Botão

---

## Componentes

SpecialtyCard

SectionTitle

Button

---

# 6. Serviços

## Objetivo

Apresentar os serviços disponíveis.

---

## Layout

Grid

Cards

Ícones

---

## Componentes

ServiceCard

---

# 7. Porque Escolher a Clínica

## Objetivo

Destacar diferenciais.

---

## Conteúdo

- Atendimento Humanizado
- Tecnologia
- Equipa Médica
- Segurança
- Atendimento Permanente
- Qualidade

---

## Layout

Grid

Ícones

---

## Componentes

FeatureCard

---

# 8. Centro de Formação

## Objetivo

Divulgar os programas de formação.

---

## Conteúdo

Resumo

Cursos

Botão

Saiba Mais

---

## Componentes

TrainingHighlight

CourseCard

---

# 9. Corpo Clínico

## Objetivo

Humanizar a marca.

---

## Layout

Carousel

---

## Card

Fotografia

Nome

Especialidade

Mini biografia

---

## Componentes

DoctorCarousel

DoctorCard

---

# 10. Infraestruturas & Tecnologia

## Objetivo

Demonstrar capacidade técnica.

---

## Conteúdo

Galeria

Equipamentos

Laboratórios

Bloco Operatório

Internamento

Urgência

---

## Componentes

Gallery

FeatureGrid

---

# 11. Testemunhos

## Objetivo

Gerar prova social.

---

## Layout

Slider.

---

## Conteúdo

Foto

Nome

Comentário

Avaliação

---

## Componentes

Testimonials

TestimonialCard

---

# 12. Galeria

## Objetivo

Mostrar a realidade da clínica.

---

## Layout

Masonry Grid.

---

## Conteúdo

Fotos

Vídeos

---

## Componentes

GalleryGrid

GalleryItem

---

# 13. Notícias

## Objetivo

Demonstrar atividade institucional.

---

## Conteúdo

Últimas Notícias

Eventos

Campanhas

---

## Componentes

NewsCard

NewsGrid

---

# 14. Parceiros

## Objetivo

Reforçar credibilidade.

---

## Conteúdo

Seguradoras

Empresas

Parceiros

---

## Layout

Carousel.

---

## Componentes

PartnerCarousel

---

# 15. FAQ

## Objetivo

Responder rapidamente às dúvidas mais comuns.

---

## Conteúdo

Accordion.

---

## Componentes

Accordion

---

# 16. CTA

## Objetivo

Converter visitantes em pacientes.

---

## Conteúdo

Título

Texto

Botões

Marcar Consulta

Contactar

---

## Componentes

CallToAction

Button

---

# 17. Localização

## Objetivo

Facilitar a deslocação.

---

## Conteúdo

Google Maps

Morada

Telefones

WhatsApp

Email

Horário

---

## Componentes

Map

ContactCard

---

# 18. Footer

## Estrutura

### Institucional

- Sobre Nós
- Missão
- Visão

### Serviços

Lista

### Especialidades

Lista

### Centro de Formação

Links

### Contactos

Telefones

Email

Morada

Mapa

Redes Sociais

Newsletter

Copyright

---

# Animações

Permitidas

- Fade In
- Slide Up
- Scale
- Counter Animation
- Hover

Nunca utilizar animações excessivas.

---

# Performance

Objetivos

- LCP < 2.5 s
- CLS < 0.1
- Lighthouse ≥ 95

Todas as imagens deverão utilizar lazy loading (exceto o Hero).

---

# SEO

A Homepage deverá incluir:

- Meta Title
- Meta Description
- Open Graph
- Twitter Card
- Dados estruturados (Organization, MedicalBusiness e Breadcrumb)
- Canonical URL

---

# Acessibilidade

WCAG 2.2 AA

- Navegação por teclado
- Labels semânticas
- Alt em todas as imagens
- Focus visível
- Contraste adequado

---

# Integração com Backend

Na primeira versão, todos os dados poderão ser simulados (mock data).

Na integração com a API, as seguintes secções passarão a consumir dados dinâmicos:

- Hero (conteúdo)
- Indicadores
- Especialidades
- Serviços
- Centro de Formação
- Corpo Clínico
- Testemunhos
- Galeria
- Notícias
- Parceiros
- FAQ

---

# Critérios de Aceitação

A Homepage será considerada concluída quando:

- Todas as secções estiverem implementadas.
- O layout for totalmente responsivo.
- Os componentes forem reutilizáveis.
- O carregamento inicial for inferior a 3 segundos.
- A pontuação Lighthouse atingir, no mínimo:
  - Performance ≥ 95
  - Accessibility = 100
  - Best Practices = 100
  - SEO = 100
- Todos os CTAs estiverem funcionais.
- O conteúdo estiver preparado para integração com a API.
