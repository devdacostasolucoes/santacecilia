# UX Guidelines
## Website Institucional da Clínica Santa Cecília

**Versão:** 1.0.0

**Última Atualização:** Julho de 2026

---

# Objetivo

Este documento estabelece os princípios de Experiência do Utilizador (UX) para o website da Clínica Santa Cecília.

O objetivo é garantir uma experiência intuitiva, consistente, acessível e centrada nas necessidades dos utilizadores, independentemente do dispositivo utilizado.

Todas as decisões de interface deverão priorizar a simplicidade, rapidez e confiança.

---

# Princípios de UX

O website deverá obedecer aos seguintes princípios:

## 1. Clareza

Cada página deve comunicar imediatamente:

- onde o utilizador está
- o que pode fazer
- qual o próximo passo

Nunca obrigar o utilizador a pensar.

---

## 2. Simplicidade

Cada ecrã deverá apresentar apenas a informação necessária.

Eliminar distrações.

Evitar excesso de elementos.

---

## 3. Consistência

Botões iguais devem comportar-se da mesma forma.

Menus iguais devem funcionar da mesma forma.

Mensagens devem seguir o mesmo padrão.

---

## 4. Rapidez

A interface deve parecer rápida.

Mesmo quando existir carregamento, o utilizador deve receber feedback visual.

---

## 5. Confiança

Por se tratar de uma instituição de saúde, o website deve transmitir segurança.

Evitar comportamentos inesperados.

---

## 6. Humanização

A linguagem deverá ser próxima.

Evitar linguagem demasiado técnica.

Utilizar mensagens claras.

Exemplo

❌ Erro HTTP 500

✔ Não foi possível concluir a operação. Tente novamente.

---

# Jornada do Utilizador

O website deverá responder rapidamente às principais intenções dos visitantes.

## Paciente

Deseja

- conhecer a clínica
- marcar consulta
- encontrar uma especialidade
- localizar contactos
- consultar notícias

---

## Empresa

Deseja

- conhecer serviços
- estabelecer parceria
- contactar a administração

---

## Médico

Deseja

- conhecer a instituição
- candidatar-se
- acompanhar eventos

---

## Formando

Deseja

- conhecer cursos
- inscrever-se
- consultar calendário

---

# Estrutura de Navegação

A navegação principal deverá ser simples.

```
Home

Sobre Nós

Serviços

Especialidades

Centro de Formação

Actualidade

Contactos
```

Nenhum submenu deverá possuir excesso de opções.

---

# Fluxo de Navegação

O utilizador nunca deverá estar a mais de três cliques da informação que procura.

Exemplo

```
Home

↓

Especialidades

↓

Cardiologia
```

---

# Navbar

A Navbar deverá:

- permanecer fixa após scroll
- reduzir ligeiramente de altura ao fazer scroll
- destacar a página atual
- possuir CTA para "Marcar Consulta"

---

# Hero

O Hero deverá responder imediatamente:

Quem somos?

O que fazemos?

Como contactar?

Qual a principal ação?

---

# Botões

Cada página deverá possuir apenas um CTA principal.

Exemplo

Marcar Consulta

Os restantes serão secundários.

---

# Scroll

O scroll deverá ser suave.

As animações apenas deverão ocorrer uma vez.

Nunca bloquear o scroll.

---

# Feedback

Toda ação deverá produzir feedback.

Exemplo

Clique

↓

Loading

↓

Sucesso

ou

Erro

Nunca deixar o utilizador sem resposta.

---

# Estados

Todos os componentes deverão possuir:

## Default

Estado normal.

---

## Hover

Resposta visual.

---

## Active

Elemento selecionado.

---

## Focus

Especialmente importante para teclado.

---

## Disabled

Visualmente diferente.

---

## Loading

Spinner ou Skeleton.

---

## Empty

Caso não existam dados.

Exemplo

Ainda não existem notícias publicadas.

---

## Error

Mensagem clara.

---

# Formulários

Todos deverão:

- validar antes do envio
- indicar campos obrigatórios
- mostrar erro imediatamente
- preservar valores introduzidos

Nunca limpar o formulário após erro.

---

# Mensagens

Sempre positivas.

Exemplo

✔ A sua mensagem foi enviada com sucesso.

Evitar

Operação concluída.

---

# Validação

Mostrar erro junto ao campo.

Nunca apenas no topo.

Exemplo

Nome

Este campo é obrigatório.

---

# Pesquisa

A pesquisa deverá:

- responder rapidamente
- permitir limpar resultados
- sugerir resultados

---

# Breadcrumb

Todas as páginas internas deverão possuir Breadcrumb.

Exemplo

```
Home

>

Especialidades

>

Cardiologia
```

---

# Cards

Todos deverão possuir áreas clicáveis.

Nunca obrigar o utilizador a clicar apenas num pequeno botão.

---

# Links

Links deverão ser reconhecidos facilmente.

Hover obrigatório.

---

# Animações

Objetivo

Guiar.

Nunca impressionar.

Permitidas

- Fade
- Slide
- Scale

Evitar

- Bounce
- Rotate
- Flash

---

# Mobile

O website será Mobile First.

Prioridades

- menus simples
- botões grandes
- texto legível
- imagens adaptáveis

---

# Tempo de Resposta

Objetivos

Mudança de página

< 300ms

Resposta visual

< 100ms

---

# Skeleton Loading

Sempre preferível ao Spinner.

Utilizar Skeleton em:

- notícias
- médicos
- galeria
- especialidades

Spinner apenas em ações.

---

# Erros

Nunca mostrar erros técnicos.

Exemplo

❌ SQLSTATE...

✔ Não foi possível carregar esta informação.

---

# Página 404

Mensagem amigável.

Botão

Voltar à Página Inicial

---

# Página 500

Mensagem simples.

Botão

Tentar Novamente

---

# Acessibilidade

Todo componente deverá suportar:

- teclado
- leitores de ecrã
- contraste AA
- focus visível
- labels

---

# Conteúdo

Utilizar títulos curtos.

Parágrafos pequenos.

Máximo recomendado

4 linhas.

---

# Fotografias

Sempre relevantes.

Evitar imagens genéricas.

Dar preferência a:

- equipa
- instalações
- equipamentos
- pacientes (com autorização)

---

# Ícones

Devem complementar o texto.

Nunca substituir completamente um texto.

---

# SEO

Cada página deverá possuir:

- título único
- descrição
- URL amigável
- Open Graph
- imagem de partilha

---

# Microinterações

Permitidas

- Hover em botões
- Hover em cards
- Contadores animados
- Fade ao aparecer
- Menu com transição suave

Nunca exagerar.

---

# Princípios de Conteúdo

O conteúdo deverá responder rapidamente às perguntas:

Quem somos?

O que fazemos?

Por que confiar?

Como contactar?

Como marcar uma consulta?

---

# Objetivo Final

Cada utilizador deverá conseguir concluir a sua tarefa sem ajuda.

Se uma funcionalidade exigir explicações extensas, a interface deverá ser redesenhada.

---

# Regra de Ouro

A interface não existe para impressionar.

Existe para transmitir confiança, facilitar o acesso à informação e permitir que o utilizador encontre rapidamente os serviços da Clínica Santa Cecília.

Sempre que existir conflito entre estética e usabilidade, a usabilidade deverá prevalecer.
