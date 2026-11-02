# 02. Guia de Tecnologias e Conformidade com as Regras da FATEC

> **Projeto Integrador / Desafio 01**: 2º Semestre ADS  
> **Tema**: Regras Oficiais da Apresentação — "O que pode e o que não pode"  

---

## 1. Tabela Comparativa de Conformidade

O projeto foi submetido a uma checagem rigorosa contra o slide de avaliação:

```
┌──────────────────────────────────────┬─────────────┬────────────────────────────────────────────────────────┐
│ EXIGÊNCIA DO PROFESSOR               │ STATUS      │ COMO FOI IMPLEMENTADO NO PROJETO                      │
├──────────────────────────────────────┼─────────────┼────────────────────────────────────────────────────────┤
│ HTML5 Semântico                      │ ✅ APROVADO │ Usa <header>, <nav>, <main>, <section>, <article>,     │
│                                      │             │ <aside>, <footer>, <figure>, <form> e <dialog>/modais. │
├──────────────────────────────────────┼─────────────┼────────────────────────────────────────────────────────┤
│ CSS3 Escrito pela Equipe             │ ✅ APROVADO │ 100% autoral em style.css. Uso extensivo de CSS Grid  │
│                                      │             │ para galeria e Flexbox para alinhamentos internos.     │
├──────────────────────────────────────┼─────────────┼────────────────────────────────────────────────────────┤
│ Sem Frameworks CSS (Bootstrap/TW)    │ ✅ APROVADO │ Nenhum framework ou biblioteca externa de estilo.      │
├──────────────────────────────────────┼─────────────┼────────────────────────────────────────────────────────┤
│ Sem Frameworks JS (React/Vue/jQuery) │ ✅ APROVADO │ JavaScript puro (Vanilla JS).                          │
├──────────────────────────────────────┼─────────────┼────────────────────────────────────────────────────────┤
│ Sem fetch, async/await ou .json      │ ✅ APROVADO │ Todos os dados dos eventos estão em um array de        │
│                                      │             │ objetos diretamente no arquivo script.js.              │
├──────────────────────────────────────┼─────────────┼────────────────────────────────────────────────────────┤
│ Sem import / export                  │ ✅ APROVADO │ Script único vinculado via <script src="script.js">.   │
├──────────────────────────────────────┼─────────────┼────────────────────────────────────────────────────────┤
│ Sem localStorage / cookies           │ ✅ APROVADO │ As inscrições são salvas em um array 'inscricoes'      │
│                                      │             │ na memória volátil da página durante a execução.       │
├──────────────────────────────────────┼─────────────┼────────────────────────────────────────────────────────┤
│ Sem Backend / Node / Banco de Dados  │ ✅ APROVADO │ Execução 100% client-side estática no navegador.       │
├──────────────────────────────────────┼─────────────┼────────────────────────────────────────────────────────┤
│ Métodos de Array Exigidos            │ ✅ APROVADO │ Uso ativo de filter, forEach, find, map e length.      │
├──────────────────────────────────────┼─────────────┼────────────────────────────────────────────────────────┤
│ Manipulação de DOM Exigida           │ ✅ APROVADO │ Uso de querySelector, textContent, innerHTML, etc.     │
├──────────────────────────────────────┼─────────────┼────────────────────────────────────────────────────────┤
│ Eventos de Interação Exigidos        │ ✅ APROVADO │ Uso de addEventListener com 'click', 'input', 'change'.│
└──────────────────────────────────────┴─────────────┴────────────────────────────────────────────────────────┘
```

---

## 2. Detalhamento dos Recursos Permitidos Utilizados

### 2.1. HTML5 Semântico
Cada elemento da página tem um significado estrutural claro:
- `<header class="cabecalho-principal">`: Logotipo do CCBB, título institucional e navegação principal.
- `<nav class="navegacao-abas">`: Botões para alternar entre "Programação em Cartaz" e "Meus Ingressos".
- `<section class="secao-filtros">`: Barra de busca em tempo real e botões de filtro por categoria.
- `<main class="conteudo-principal">`: Contêiner principal onde a lista de eventos é renderizada.
- `<article class="card-evento">`: Cada cartão de evento, contendo imagem, título, data, espaço físico e botão de ação.
- `<footer>`: Informações do edifício histórico, horário de visitação, endereço na Sé e créditos do projeto integrador.

### 2.2. CSS3 com Flexbox e Grid
- **CSS Grid**: Utilizado para a grade de eventos (`display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 24px;`). Isso garante que os cartões se organizem perfeitamente tanto em celulares quanto em monitores grandes.
- **Flexbox**: Utilizado nos cabeçalhos dos cartões, nas barras de busca, nos botões de filtro e na estrutura interna do modal (`display: flex; align-items: center; justify-content: space-between;`).
- **Variáveis CSS (`:root`)**: Centralizam as cores institucionais do CCBB (Azul Nobre `--azul-ccbb: #002D72;`, Dourado `--dourado: #D97706;`, Fundo `--fundo-claro: #F8F9FA;`).

### 2.3. JavaScript Puro (Vanilla JS)
- **Declaração de Dados**:
  ```javascript
  const eventos = [
    {
      id: 1,
      titulo: "Marlene Barros: Tecitura do Feminino",
      categoria: "exposicao",
      espaco: "Rotunda e 1º Andar",
      horarios: ["10:00", "14:00", "16:00"],
      vagasDisponiveis: 15,
      // ...
    }
  ];
  const inscricoes = [];
  ```
- **Manipulação do DOM**:
  ```javascript
  const listaContainer = document.querySelector("#lista-eventos");
  listaContainer.innerHTML = ""; // Limpa a tela
  ```
- **Métodos de Array**:
  - `eventos.filter(...)`: Filtra os eventos pelo texto digitado no campo de busca ou pela categoria clicada.
  - `eventos.forEach(...)`: Percorre o array para montar os cards de eventos dinamicamente na tela.
  - `eventos.find(...)`: Localiza exatamente o evento cujo botão "Garantir Ingresso" foi clicado.
  - `inscricoes.length`: Exibe o contador de ingressos já emitidos na aba "Meus Ingressos".
- **Eventos (`addEventListener`)**:
  - `'click'`: Abertura e fechamento de modais, clique em botões de categoria.
  - `'input'`: Busca dinâmica por texto que filtra enquanto o usuário digita.
  - `'change'`: Atualização ao trocar de opção no formulário.
