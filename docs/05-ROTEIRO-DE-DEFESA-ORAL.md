# 05. Roteiro de Estudo e Defesa Oral para a Apresentação

> **Aviso da Avaliação da FATEC**: *"Na apresentação eu aponto uma linha e peço para explicar."*  
> Este documento prepara qualquer membro do grupo para explicar com total segurança o código do projeto.

---

## ❓ 1. As 12 Perguntas Clássicas do Professor e Como Responder

### Pergunta 1: "Por que vocês não usaram emojis e optaram por ícones em SVG?"
* **Resposta Esperada**:  
  *"Professor, como o CCBB é uma instituição cultural centenária e de prestígio internacional, emojis geram um aspecto informal e inconsistente, pois cada sistema operacional (Windows, Android, iOS) renderiza emojis de forma diferente. Por isso, utilizamos **ícones vetoriais em SVG puro** com traço uniforme de 2px. O SVG é nativo do HTML5, não depende de bibliotecas externas, escala com perfeição em qualquer tela e garante um visual limpo e profissional."*

---

### Pergunta 2: "Como foram feitas as animações dos cards e do modal em CSS puro?"
* **Resposta Esperada**:  
  *"Usamos a diretiva nativa `@keyframes` do CSS3 combinada com a propriedade `animation`. Por exemplo, a animação `cardFadeIn` faz o card surgir com `opacity: 0` e `transform: translateY(12px)` indo até `opacity: 1` e `transform: translateY(0)`. A curva de transição `cubic-bezier(0.16, 1, 0.3, 1)` garante uma desaceleração natural e suave, sem pesar no processador."*

---

### Pergunta 3: "O que é aquela regra `@media (prefers-reduced-motion: reduce)` no final do CSS?"
* **Resposta Esperada**:  
  *"É uma diretriz de **acessibilidade digital (WCAG)**. Ela detecta se o visitante configurou seu sistema operacional (Windows, Mac ou celular) para reduzir efeitos visuais (comum em pessoas com sensibilidade vestibular ou labirintite). Quando ativada, ela zera a duração das animações, garantindo que o site continue elegante e acessível a todos."*

---

### Pergunta 4: "O que faz a linha `e.preventDefault()` dentro do evento de submit?"
* **Resposta Esperada**:  
  *"Por padrão, quando um formulário HTML é enviado, o navegador tenta recarregar a página para enviar os dados via GET ou POST. O `e.preventDefault()` cancela esse comportamento padrão, permitindo que nosso JavaScript capture os dados e processe a inscrição em memória sem recarregar a tela."*

---

### Pergunta 5: "Como funciona a função `filtrarEventos()` e o método `filter`?"
* **Resposta Esperada**:  
  *"O `filter` é um método nativo de arrays do JavaScript que percorre cada item do array `eventos` e aplica um teste lógico. Se o callback retornar `true`, o item vai para o novo array filtrado. Testamos duas condições: se a categoria do evento bate com o botão selecionado (ou se é 'todos') e se o título, descrição ou espaço contêm o texto digitado na busca através do método `.includes()`."*

---

### Pergunta 6: "Onde ficam guardados os dados do visitante e as inscrições?"
* **Resposta Esperada**:  
  *"Como as regras da disciplina proíbem banco de dados, Node e localStorage, os dados ficam temporariamente guardados na memória volátil da página no array `inscricoes`. Quando o visitante confirma a reserva, fazemos um `inscricoes.push()` com o objeto do bilhete. Se a página for atualizada (F5), os dados voltam ao estado inicial."*

---

### Pergunta 7: "Como vocês fizeram para o número de vagas diminuir na tela após a inscrição?"
* **Resposta Esperada**:  
  *"Primeiro, localizamos o evento selecionado com `eventos.find(ev => ev.id === id)`. Quando os dados são válidos, decrementamos o valor: `evento.vagasDisponiveis--`. Em seguida, chamamos novamente a função `filtrarEventos()`. Ela limpa a grade com `innerHTML = ''` e redesenha os cards com o novo saldo de vagas e status atualizados."*

---

### Pergunta 8: "Por que vocês usaram CSS Grid na galeria e Flexbox nos cartões?"
* **Resposta Esperada**:  
  *"O **CSS Grid** é bidimensional (linhas e colunas), ideal para criar a galeria responsiva com `grid-template-columns: repeat(auto-fill, minmax(330px, 1fr))`, adaptando-se do celular ao monitor sem precisar de Bootstrap. Já o **Flexbox** é unidimensional, perfeito para alinhar verticalmente o conteúdo interno do card e empurrar o botão de inscrição para a base com `flex-grow: 1` na descrição."*

---

### Pergunta 9: "Como a janela modal abre e fecha sem usar jQuery ou Bootstrap?"
* **Resposta Esperada**:  
  *"Criamos uma classe CSS utilitária `.oculto` com a propriedade `display: none !important;`. No JavaScript, quando o usuário clica em 'Garantir Ingresso', pegamos o modal com `document.querySelector('#modal-inscricao')` e fazemos `modal.classList.remove('oculto')`. Para fechar, executamos `modal.classList.add('oculto')`."*

---

### Pergunta 10: "Qual é a diferença entre o evento `click` e o evento `input` que vocês usaram?"
* **Resposta Esperada**:  
  *"O evento `click` é disparado quando o usuário clica com o mouse sobre um botão de categoria ou aba. Já o evento `input` é disparado imediatamente a cada tecla digitada ou apagada dentro do `<input>`, o que permitiu criar a busca instantânea sem precisar de um botão 'Pesquisar'."*

---

### Pergunta 11: "Por que vocês usaram `textContent` em alguns lugares e `innerHTML` em outros?"
* **Resposta Esperada**:  
  *"Usamos `textContent` quando precisamos apenas alterar o texto de um elemento de forma segura (como no código do ingresso ou nas mensagens de erro), evitando vulnerabilidades. Usamos `innerHTML` quando precisamos gerar ou limpar blocos completos de marcação HTML, como os cards de eventos dinâmicos."*

---

### Pergunta 12: "Por que o código está em um único arquivo `script.js` sem `import`/`export`?"
* **Resposta Esperada**:  
  *"Porque os módulos ES6 (`import`/`export`) constavam explicitamente na lista de proibições do slide da FATEC (tema da aula 8). Por isso, organizamos toda a lógica de forma clara e estruturada em um único arquivo `script.js` importado com a tag `<script src="script.js"></script>` antes de fechar o `</body>`."*
