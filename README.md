# CCBB São Paulo — Sistema de Programação e Cadastro em Eventos
## Projeto Integrador / Projeto Desafio 01 — FATEC (2º Semestre ADS)

> **Instituição de Ensino**: FATEC — Faculdade de Tecnologia do Estado de São Paulo  
> **Curso**: Análise e Desenvolvimento de Sistemas (ADS) — 2º Semestre  
> **Tema**: Redesign e Sistema de Cadastro em Eventos para o Centro Cultural Banco do Brasil de São Paulo ([ccbb.com.br/sao-paulo](https://ccbb.com.br/sao-paulo))  
> **Diferencial Exclusivo**: **Pesquisa de campo presencial** realizada pela equipe de estudantes no edifício histórico da Rua Álvares Penteado, com fotos reais integradas ao sistema.  
> **Diretriz Pedagógica**: 100% aderente à matriz *"O que pode e o que não pode"* da disciplina.

---

## 🏛️ 1. Pesquisa de Campo Presencial da Equipe

Diferente de projetos baseados apenas em dados teóricos, a equipe da FATEC visitou presencialmente o **Centro Cultural Banco do Brasil de São Paulo**:
* **Fotos Reais no Sistema**:
  - `assets/ccbb_entrada_marlene_barros.jpg`: Registro da entrada monumental na esquina das ruas Álvares Penteado e da Quitanda com o cartaz oficial da exposição *Marlene Barros: Tecitura do Feminino*.
  - `assets/ccbb_fachada_completa.jpg`: Registro vertical da arquitetura neoclássica de 1901 até a cúpula com as bandeiras.
  - `assets/equipe_fatec_ccbb.jpg`: Registro da equipe de estudantes na entrada do CCBB, em frente à placa de mármore do Banco do Brasil, comprovando a pesquisa in loco.
* **Diagnóstico in loco**:
  - Teste prático do fluxo de visitantes na portaria;
  - Avaliação da acessibilidade física (rampas, elevadores e sinalização);
  - Identificação dos gargalos de conexão móvel no Centro Velho, reforçando a necessidade de um comprovante leve que funcione instantaneamente na tela.

---

## 📋 2. Enquadramento às Regras da Disciplina

Este projeto foi construído respeitando com rigor máximo as limitações técnicas do 2º semestre da FATEC:

| Diretriz Oficial | Como foi atendido no projeto |
| :--- | :--- |
| **HTML5 Semântico (PODE)** | Estrutura construída com `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`, `<figure>` e `<form>`. |
| **CSS3 Próprio com Flexbox e Grid (PODE)** | Arquivo `style.css` autoral com CSS Grid para galeria e hero, Flexbox para cards e modais, variáveis `:root` e animações `@keyframes`. **Zero Frameworks**. |
| **Design Profissional Sem Emojis (PODE)** | Ícones vetoriais em **SVG puro** integrados nativamente no HTML, proporcionando visual sóbrio de centro cultural. |
| **JS Básico Estruturado (PODE)** | Variáveis (`let`, `const`), arrays de objetos, condicionais (`if/else`), laços e funções tradicionais comentadas linha por linha. |
| **Manipulação de DOM (PODE)** | Uso de `document.querySelector`, `querySelectorAll`, `textContent`, `innerHTML` e `createElement`. |
| **Eventos (PODE)** | Manipulação de eventos nativos: `click` (filtros e modais), `input` (busca em tempo real) e `change` (horários). |
| **Métodos de Array (PODE)** | Uso de `filter` (busca e categorias), `find` (seleção de evento), `forEach` (renderização de cards) e `length` (contador de ingressos). |
| **Proibições Respeitadas (NÃO PODE)** | ❌ Sem React, Vue, jQuery ou Bootstrap<br>❌ Sem `fetch`, `async/await` ou `.json` externo (dados em array no próprio JS)<br>❌ Sem `import`/`export` (código em script único)<br>❌ Sem `localStorage` ou cookies (estado em memória)<br>❌ Sem Node, PHP ou banco de dados<br>❌ Sem temas prontos baixados |

---

## 📁 3. Estrutura do Repositório

```
c:\fatec\Museu\
├── assets/                              # Fotografias reais da pesquisa de campo
│   ├── ccbb_entrada_marlene_barros.jpg  # Entrada oficial com cartaz da mostra
│   ├── ccbb_fachada_completa.jpg        # Fachada neoclássica de 1901
│   └── equipe_fatec_ccbb.jpg            # Equipe de estudantes em frente ao CCBB
├── index.html                           # Interface visual em HTML5 semântico
├── style.css                            # Estilização autoral com animações leves e CSS Grid
├── script.js                            # Lógica interativa, array de eventos e fluxo de cadastro
├── README.md                            # Visão geral, conformidade e autoria
└── docs/
    ├── 01-VISAO-E-DIAGNOSTICO.md        # Estudo comparativo do ccbb.com.br/sao-paulo vs. projeto
    ├── 02-GUIA-TECNOLOGIAS-PERMITIDAS.md# Explicação das regras do slide da FATEC
    ├── 03-ESTRUTURA-E-DESIGN-SYSTEM.md  # Paleta de cores, tipografia, SVG e micro-interações
    ├── 04-LOGICA-E-FLUXO-DE-CADASTRO.md # Como funciona o cadastro com arrays e DOM
    └── 05-ROTEIRO-DE-DEFESA-ORAL.md     # Guia estratégico para a banca avaliadora
```

---

## 🚀 4. Como Executar

Basta abrir o arquivo **`index.html`** em qualquer navegador moderno (Chrome, Edge ou Firefox). Não há dependência de servidores locais, terminais ou conexão com internet para carregar as fotos e estilos essenciais.
