# 04. Lógica e Fluxo do Sistema de Cadastro de Ingressos

> **Projeto Integrador**: CCBB São Paulo — Módulo de Cadastro em Eventos  
> **Tecnologia**: JavaScript Puro (Vanilla JS) — Manipulação de DOM e Arrays  

---

## 1. Estrutura de Dados em Memória

Como a disciplina proíbe back-end, banco de dados ou `localStorage`, os dados operam de forma 100% dinâmica na memória do navegador:

### 1.1. Array de Eventos (`eventos`)
Cada evento é um objeto com propriedades claras:
```javascript
const eventos = [
  {
    id: 1,
    titulo: "Marlene Barros: Tecitura do Feminino",
    categoria: "exposicao", // exposicao | cinema | teatro | educativo
    espaco: "Rotunda e 1º Andar",
    periodo: "Em cartaz até 25/01/2027",
    classificacao: "Livre",
    gratuito: true,
    vagasDisponiveis: 12,
    horarios: ["10:00", "12:00", "14:00", "16:00", "18:00"],
    descricao: "Mais de 120 obras que exploram a identidade, a memória e a poética visual feminina brasileira.",
    imagem: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=600&auto=format&fit=crop&q=80"
  },
  // Outros eventos de cinema, teatro e oficinas educativas...
];
```

### 1.2. Array de Inscrições Realizadas (`inscricoes`)
Inicia vazio e recebe cada nova reserva confirmada:
```javascript
const inscricoes = [];
// Cada item adicionado com inscricoes.push({ ... })
```

---

## 2. Diagrama do Fluxo de Inscrição e Atualização

```
[ Usuário clica em "Garantir Ingresso" no card ]
                       │
                       ▼
    [ eventos.find(e => e.id === id) localiza o evento ]
                       │
                       ▼
  [ Modal de Inscrição se abre com os dados do evento ]
                       │
                       ▼
[ Usuário escolhe horário, preenche Nome, E-mail, Celular, CPF ]
                       │
                       ▼
     [ Evento 'submit' do formulário interceptado ]
                       │
                       ▼
   [ Validação: campos preenchidos e há vagas? ]
        │                             │
       Sim                           Não ──► Exibe mensagem de erro
        │
        ├─► inscricoes.push(novaInscricao)
        ├─► evento.vagasDisponiveis = evento.vagasDisponiveis - 1
        ├─► renderizarEventos() (atualiza o contador de vagas na tela!)
        └─► exibirComprovante(novaInscricao) (mostra o ingresso com QR Code)
```

---

## 3. Explicação dos Métodos de Array Usados

Durante a apresentação para a banca avaliadora da FATEC, os métodos de array podem ser justificados assim:

### 1. `filter` (Filtragem de Eventos)
Usado para buscar eventos pelo texto digitado ou pela categoria selecionada:
```javascript
const eventosFiltrados = eventos.filter(evento => {
  const coincideCategoria = (categoriaAtual === "todos" || evento.categoria === categoriaAtual);
  const coincideTexto = evento.titulo.toLowerCase().includes(termoBusca.toLowerCase());
  return coincideCategoria && coincideTexto;
});
```

### 2. `forEach` (Renderização de Elementos no DOM)
Usado para percorrer a lista de eventos e gerar o HTML de cada card na tela:
```javascript
eventosFiltrados.forEach(evento => {
  // Cria e anexa o card de evento na grade principal
});
```

### 3. `find` (Busca Específica de 1 Item)
Usado quando o usuário clica no botão de inscrição de um evento específico:
```javascript
const eventoSelecionado = eventos.find(evento => evento.id === idClicado);
```

### 4. `length` (Controle de Quantidade)
Usado para exibir na tela o total de eventos encontrados e quantos ingressos o usuário já emitiu:
```javascript
contadorIngressos.textContent = inscricoes.length;
```
