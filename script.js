/* ==========================================================================
   CCBB SÃO PAULO — SCRIPT PRINCIPAL (FATEC ADS - 2º SEMESTRE)
   Conforme diretrizes:
   - JavaScript Puro (Vanilla JS);
   - Zero dependências, zero frameworks (Sem React, Sem jQuery);
   - Sem fetch / sem arquivos .json (dados em array no próprio código);
   - Sem import / export (script autocontido);
   - Sem localStorage / cookies (armazenamento dinâmico em memória);
   - Fotos reais da visita técnica da equipe utilizadas nas atrações.
   ========================================================================== */

// ---------------------------------------------------------------------------
// 1. DADOS EM MEMÓRIA (ARRAY DE OBJETOS)
// ---------------------------------------------------------------------------

/**
 * Array principal com a programação cultural em cartaz no CCBB São Paulo.
 * Integra fotos reais registradas presencialmente pela equipe no edifício histórico.
 */
const eventos = [
  {
    id: 1,
    titulo: "Marlene Barros: Tecitura do Feminino",
    categoria: "exposicao",
    espaco: "Rotunda e 1º Andar",
    periodo: "Em cartaz até 25/01/2027",
    classificacao: "Livre",
    gratuito: true,
    vagasDisponiveis: 16,
    horarios: ["10:00", "12:00", "14:00", "16:00", "18:00"],
    descricao: "Exposição com mais de 120 obras que exploram a identidade, as memórias afetivas e a riqueza das artes visuais femininas brasileiras.",
    imagem: "assets/ccbb_entrada_marlene_barros.jpg" // Foto real registrada na fachada com o cartaz oficial
  },
  {
    id: 2,
    titulo: "21º Festival de Cinema Italiano no Brasil",
    categoria: "cinema",
    espaco: "Sala de Cinema (1º Andar)",
    periodo: "Sessões de 05/11 a 30/11",
    classificacao: "14 anos",
    gratuito: true,
    vagasDisponiveis: 8,
    horarios: ["15:30", "17:45", "20:00"],
    descricao: "Mostra internacional com clássicos restaurados do neo-realismo e grandes produções contemporâneas do cinema italiano.",
    imagem: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    titulo: "O Vaso de Argila: Memórias do Prédio de 1901",
    categoria: "teatro",
    espaco: "Teatro CCBB (Subsolo)",
    periodo: "Quintas a Domingos, às 19h",
    classificacao: "12 anos",
    gratuito: true,
    vagasDisponiveis: 4, // Poucas vagas: status em alerta âmbar
    horarios: ["17:00", "19:00"],
    descricao: "Espetáculo intimista encenado no edifício histórico que reconstrói os passos dos primeiros frequentadores do centro velho de São Paulo.",
    imagem: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 4,
    titulo: "Visita Guiada ao Prédio Histórico e Cúpula",
    categoria: "educativo",
    espaco: "Rotunda, Cúpula e Bastidores",
    periodo: "Quarta a Domingo, às 11h e 15h",
    classificacao: "Livre",
    gratuito: true,
    vagasDisponiveis: 10,
    horarios: ["11:00", "15:00", "17:00"],
    descricao: "Percurso mediado pela imponente arquitetura neoclássica de 1901, conhecendo a cúpula, os vitrais e a história bancária nacional.",
    imagem: "assets/ccbb_fachada_completa.jpg" // Foto real registrada do edifício histórico
  },
  {
    id: 5,
    titulo: "Oficina Infantil de Gravura e Aquarela",
    categoria: "educativo",
    espaco: "Espaço CCBB Educativo (2º Andar)",
    periodo: "Sábados e Domingos pela manhã",
    classificacao: "Livre (Recomendado 5 a 12 anos)",
    gratuito: true,
    vagasDisponiveis: 12,
    horarios: ["10:30", "14:30"],
    descricao: "Atividade prática para crianças e famílias experimentarem técnicas tradicionais de gravura com os monitores de arte do museu.",
    imagem: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 6,
    titulo: "Concerto de Cordas na Rotunda",
    categoria: "teatro",
    espaco: "Rotunda Central",
    periodo: "Sessão Especial de Domingo",
    classificacao: "Livre",
    gratuito: true,
    vagasDisponiveis: 0, // Exemplo de evento com ingressos esgotados
    horarios: ["19:30"],
    descricao: "Apresentação acústica aproveitando a reverberação natural e os vitrais neoclássicos da Rotunda central do CCBB.",
    imagem: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=600&auto=format&fit=crop&q=80"
  }
];

/**
 * Array dinâmico que acumula as reservas de ingressos nesta sessão em memória.
 */
const inscricoes = [];

// Variáveis de estado da busca e dos filtros
let categoriaAtiva = "todos";
let textoBuscaAtual = "";

// ---------------------------------------------------------------------------
// 2. SELEÇÃO DE ELEMENTOS DO DOM (document.querySelector)
// ---------------------------------------------------------------------------

// Navegação por Abas
const btnAbaProgramacao = document.querySelector("#btn-aba-programacao");
const btnAbaIngressos = document.querySelector("#btn-aba-ingressos");
const visaoProgramacao = document.querySelector("#visao-programacao");
const visaoIngressos = document.querySelector("#visao-ingressos");
const contadorMeusIngressos = document.querySelector("#contador-meus-ingressos");

// Elementos de Busca e Filtro
const campoBusca = document.querySelector("#campo-busca");
const btnLimparBusca = document.querySelector("#btn-limpar-busca");
const botoesCategoria = document.querySelectorAll(".btn-filtro");
const gradeEventos = document.querySelector("#grade-eventos");
const contadorResultados = document.querySelector("#contador-resultados");
const mensagemSemResultados = document.querySelector("#mensagem-sem-resultados");

// Lista de Ingressos do Usuário
const listaMeusIngressos = document.querySelector("#lista-meus-ingressos");
const mensagemSemIngressos = document.querySelector("#mensagem-sem-ingressos");
const btnIrProgramacao = document.querySelector("#btn-ir-programacao");

// Modal de Formulário de Inscrição
const modalInscricao = document.querySelector("#modal-inscricao");
const btnFecharModal = document.querySelector("#btn-fechar-modal");
const btnCancelarInscricao = document.querySelector("#btn-cancelar-inscricao");
const formInscricao = document.querySelector("#form-inscricao");
const modalTitulo = document.querySelector("#modal-titulo");
const modalEspaco = document.querySelector("#modal-espaco");
const selectHorario = document.querySelector("#select-horario");
const inputEventoId = document.querySelector("#evento-id-selecionado");
const campoNome = document.querySelector("#campo-nome");
const campoEmail = document.querySelector("#campo-email");
const campoTelefone = document.querySelector("#campo-telefone");
const campoCpf = document.querySelector("#campo-cpf");
const checkAcessibilidade = document.querySelector("#check-acessibilidade");
const alertaFormulario = document.querySelector("#alerta-formulario");

// Modal de Comprovante de Reserva
const modalComprovante = document.querySelector("#modal-comprovante");
const comprovanteCodigo = document.querySelector("#comprovante-codigo");
const comprovanteEventoNome = document.querySelector("#comprovante-evento-nome");
const comprovanteEspaco = document.querySelector("#comprovante-espaco");
const comprovanteHorario = document.querySelector("#comprovante-horario");
const comprovanteNome = document.querySelector("#comprovante-nome");
const comprovanteCpf = document.querySelector("#comprovante-cpf");
const btnImprimirComprovante = document.querySelector("#btn-imprimir-comprovante");
const btnConcluirComprovante = document.querySelector("#btn-concluir-comprovante");

// ---------------------------------------------------------------------------
// 3. RENDERIZAÇÃO DA PROGRAMAÇÃO (MÉTODOS forEach e filter)
// ---------------------------------------------------------------------------

/**
 * Renderiza os cartões de eventos no elemento #grade-eventos usando forEach.
 * @param {Array} lista - Array de objetos de eventos a serem exibidos
 */
function renderizarEventos(lista) {
  // Limpa o contêiner antes de desenhar
  gradeEventos.innerHTML = "";

  // Atualiza o texto do contador de resultados
  if (lista.length === 1) {
    contadorResultados.textContent = "Exibindo 1 atração em cartaz";
  } else {
    contadorResultados.textContent = `Exibindo ${lista.length} atrações em cartaz`;
  }

  // Exibe ou esconde o estado de lista vazia
  if (lista.length === 0) {
    mensagemSemResultados.classList.remove("oculto");
    return;
  } else {
    mensagemSemResultados.classList.add("oculto");
  }

  // Percorre cada evento com forEach para criar os cards dinamicamente
  lista.forEach(evento => {
    const card = document.createElement("article");
    card.className = "card-evento";

    // Avalia o nível de lotação
    const estaEsgotado = evento.vagasDisponiveis <= 0;
    const poucasVagas = evento.vagasDisponiveis > 0 && evento.vagasDisponiveis <= 5;

    let classeVaga = "vaga-disponivel";
    let textoVaga = `${evento.vagasDisponiveis} vagas disponíveis`;

    if (estaEsgotado) {
      card.classList.add("esgotado");
      classeVaga = "vaga-esgotada";
      textoVaga = "Esgotado";
    } else if (poucasVagas) {
      classeVaga = "vaga-baixa";
      textoVaga = `Últimas ${evento.vagasDisponiveis} vagas`;
    }

    // Monta a estrutura HTML limpa e profissional com ícones em SVG
    card.innerHTML = `
      <div class="card-imagem-container">
        <img 
          src="${evento.imagem}" 
          alt="Fotografia da atração ${evento.titulo}" 
          class="card-imagem"
          loading="lazy"
        >
        <span class="badge-categoria">${evento.categoria}</span>
        <span class="badge-preco">Acesso Gratuito</span>
      </div>

      <div class="card-corpo">
        <p class="card-espaco">
          <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          <span>${evento.espaco}</span>
        </p>

        <h3 class="card-titulo">${evento.titulo}</h3>
        <p class="card-descricao">${evento.descricao}</p>
        
        <div class="card-meta">
          <span class="card-periodo">
            <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            <span>${evento.periodo}</span>
          </span>

          <span class="status-vaga ${classeVaga}">
            <span class="ponto-status" aria-hidden="true"></span>
            <span>${textoVaga}</span>
          </span>
        </div>

        <button 
          class="btn-inscrever" 
          type="button" 
          data-id="${evento.id}"
          ${estaEsgotado ? "disabled" : ""}
        >
          <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"/>
          </svg>
          <span>${estaEsgotado ? "Ingressos Esgotados" : "Garantir Ingresso Gratuito"}</span>
        </button>
      </div>
    `;

    // Vincula o evento 'click' do botão de inscrição do card
    const btnAcao = card.querySelector(".btn-inscrever");
    if (!estaEsgotado) {
      btnAcao.addEventListener("click", () => {
        abrirModalInscricao(evento.id);
      });
    }

    // Anexa o card criado à grade
    gradeEventos.appendChild(card);
  });
}

/**
 * Filtra a lista de eventos usando o método nativo filter.
 * Considera a categoria ativa e o texto digitado na busca.
 */
function filtrarEventos() {
  const eventosFiltrados = eventos.filter(evento => {
    // 1. Condição de categoria
    const categoriaBate = (categoriaAtiva === "todos" || evento.categoria === categoriaAtiva);

    // 2. Condição de busca de texto (título, descrição ou espaço físico)
    const termo = textoBuscaAtual.toLowerCase().trim();
    const tituloBate = evento.titulo.toLowerCase().includes(termo);
    const descricaoBate = evento.descricao.toLowerCase().includes(termo);
    const espacoBate = evento.espaco.toLowerCase().includes(termo);

    return categoriaBate && (termo === "" || tituloBate || descricaoBate || espacoBate);
  });

  renderizarEventos(eventosFiltrados);
}

// ---------------------------------------------------------------------------
// 4. LÓGICA DO MODAL DE CADASTRO
// ---------------------------------------------------------------------------

/**
 * Abre o modal de inscrição com os dados do evento clicado.
 * @param {number} eventoId - Identificador do evento
 */
function abrirModalInscricao(eventoId) {
  // Localiza o evento específico com o método find
  const evento = eventos.find(item => item.id === eventoId);

  if (!evento) return;

  // Preenche as informações no cabeçalho do modal
  inputEventoId.value = evento.id;
  modalTitulo.textContent = evento.titulo;
  modalEspaco.textContent = `Local: ${evento.espaco} • Classificação: ${evento.classificacao}`;

  // Preenche dinamicamente as opções de horário disponíveis
  selectHorario.innerHTML = "";
  evento.horarios.forEach(horario => {
    const opcao = document.createElement("option");
    opcao.value = horario;
    opcao.textContent = `Sessão das ${horario} (Entrada com horário marcado)`;
    selectHorario.appendChild(opcao);
  });

  // Limpa mensagens anteriores de erro
  alertaFormulario.classList.add("oculto");
  alertaFormulario.textContent = "";

  // Abre o modal removendo a classe oculto
  modalInscricao.classList.remove("oculto");

  // Coloca o foco no primeiro campo
  campoNome.focus();
}

/**
 * Fecha a janela modal de cadastro.
 */
function fecharModalInscricao() {
  modalInscricao.classList.add("oculto");
  formInscricao.reset();
}

/**
 * Processa a submissão do formulário de cadastro.
 * @param {Event} e - Evento de submit do formulário
 */
function processarInscricao(e) {
  // Impede o recarregamento da página (comportamento nativo de forms)
  e.preventDefault();

  const id = parseInt(inputEventoId.value, 10);
  const evento = eventos.find(ev => ev.id === id);

  // Validação 1: O evento existe e possui vagas?
  if (!evento || evento.vagasDisponiveis <= 0) {
    alertaFormulario.textContent = "Desculpe, as vagas para este evento foram esgotadas.";
    alertaFormulario.classList.remove("oculto");
    return;
  }

  // Validação 2: CPF com no mínimo 11 dígitos
  const cpfLimpo = campoCpf.value.replace(/\D/g, "");
  if (cpfLimpo.length < 11) {
    alertaFormulario.textContent = "Por favor, informe um CPF válido com 11 dígitos numéricos.";
    alertaFormulario.classList.remove("oculto");
    campoCpf.focus();
    return;
  }

  // Decrementa 1 vaga do evento
  evento.vagasDisponiveis--;

  // Gera código único institucional (ex: CCBB-SP-9824)
  const numeroAleatorio = Math.floor(1000 + Math.random() * 9000);
  const codigoReserva = `CCBB-SP-${numeroAleatorio}`;

  // Cria o objeto da nova inscrição
  const novaInscricao = {
    idInscricao: Date.now(),
    codigo: codigoReserva,
    eventoId: evento.id,
    eventoTitulo: evento.titulo,
    espaco: evento.espaco,
    horario: selectHorario.value,
    nome: campoNome.value.trim(),
    email: campoEmail.value.trim(),
    telefone: campoTelefone.value.trim(),
    cpf: campoCpf.value.trim(),
    acessibilidade: checkAcessibilidade.checked,
    dataCadastro: new Date().toLocaleDateString("pt-BR")
  };

  // Salva no array de inscrições em memória
  inscricoes.push(novaInscricao);

  // Atualiza o contador de ingressos no cabeçalho
  contadorMeusIngressos.textContent = inscricoes.length;

  // Fecha o modal de formulário
  fecharModalInscricao();

  // Re-renderiza a lista de eventos para atualizar a contagem de vagas
  filtrarEventos();

  // Abre a janela de comprovante com o ingresso gerado
  exibirComprovante(novaInscricao);
}

// ---------------------------------------------------------------------------
// 5. LÓGICA DO COMPROVANTE E MEUS INGRESSOS
// ---------------------------------------------------------------------------

/**
 * Exibe o comprovante/bilhete com código e QR Code vetorial.
 * @param {Object} inscricao - Objeto contendo os dados do ingresso
 */
function exibirComprovante(inscricao) {
  comprovanteCodigo.textContent = inscricao.codigo;
  comprovanteEventoNome.textContent = inscricao.eventoTitulo;
  comprovanteEspaco.textContent = inscricao.espaco;
  comprovanteHorario.textContent = inscricao.horario;
  comprovanteNome.textContent = inscricao.nome;
  comprovanteCpf.textContent = inscricao.cpf;

  modalComprovante.classList.remove("oculto");
}

/**
 * Fecha a janela de comprovante.
 */
function fecharComprovante() {
  modalComprovante.classList.add("oculto");
}

/**
 * Renderiza os ingressos cadastrados na aba 'Meus Ingressos'.
 */
function renderizarMeusIngressos() {
  listaMeusIngressos.innerHTML = "";

  if (inscricoes.length === 0) {
    mensagemSemIngressos.classList.remove("oculto");
    return;
  } else {
    mensagemSemIngressos.classList.add("oculto");
  }

  // Percorre todas as inscrições efetuadas
  inscricoes.forEach(item => {
    const cardIngresso = document.createElement("article");
    cardIngresso.className = "bilhete-cultural";

    cardIngresso.innerHTML = `
      <div class="bilhete-topo">
        <span class="bilhete-instituicao">CENTRO CULTURAL BANCO DO BRASIL • SP</span>
        <span class="bilhete-codigo">${item.codigo}</span>
      </div>

      <div class="bilhete-corpo">
        <h4 class="bilhete-evento">${item.eventoTitulo}</h4>
        <p class="bilhete-espaco">${item.espaco}</p>

        <div class="grade-detalhes-bilhete">
          <div>
            <span class="rotulo-mini">Horário Reservado</span>
            <strong class="valor-mini">${item.horario}</strong>
          </div>
          <div>
            <span class="rotulo-mini">Titular do Ingresso</span>
            <strong class="valor-mini">${item.nome}</strong>
          </div>
          <div>
            <span class="rotulo-mini">Data de Emissão</span>
            <strong class="valor-mini">${item.dataCadastro}</strong>
          </div>
          <div>
            <span class="rotulo-mini">Situação</span>
            <strong class="valor-mini valor-gratis">Confirmado</strong>
          </div>
        </div>

        <div style="margin-top: 16px; display: flex; justify-content: flex-end;">
          <button class="btn-acao-secundaria btn-cancelar-bilhete" data-codigo="${item.codigo}" type="button" style="font-size: 12px; padding: 6px 14px;">
            <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
            <span>Cancelar Inscrição</span>
          </button>
        </div>
      </div>
    `;

    // Botão de cancelar inscrição (restitui a vaga no evento)
    const btnCancelar = cardIngresso.querySelector(".btn-cancelar-bilhete");
    btnCancelar.addEventListener("click", () => {
      cancelarInscricao(item.codigo);
    });

    listaMeusIngressos.appendChild(cardIngresso);
  });
}

/**
 * Cancela uma inscrição existente, devolvendo a vaga para o evento original.
 * @param {string} codigo - Código de reserva (ex: CCBB-SP-9824)
 */
function cancelarInscricao(codigo) {
  const indice = inscricoes.findIndex(ing => ing.codigo === codigo);

  if (indice !== -1) {
    const itemRemovido = inscricoes[indice];

    // Restitui a vaga no evento correspondente
    const eventoOriginal = eventos.find(ev => ev.id === itemRemovido.eventoId);
    if (eventoOriginal) {
      eventoOriginal.vagasDisponiveis++;
    }

    // Remove do array de inscrições em memória
    inscricoes.splice(indice, 1);

    // Atualiza o contador de ingressos no cabeçalho
    contadorMeusIngressos.textContent = inscricoes.length;

    // Atualiza as telas
    renderizarMeusIngressos();
    filtrarEventos();
  }
}

/**
 * Alterna a visualização entre a aba de Programação e a aba de Meus Ingressos.
 * @param {string} aba - 'programacao' ou 'ingressos'
 */
function alternarAba(aba) {
  if (aba === "programacao") {
    btnAbaProgramacao.classList.add("ativo");
    btnAbaIngressos.classList.remove("ativo");
    visaoProgramacao.classList.remove("oculto");
    visaoIngressos.classList.add("oculto");
  } else {
    btnAbaProgramacao.classList.remove("ativo");
    btnAbaIngressos.classList.add("ativo");
    visaoProgramacao.classList.add("oculto");
    visaoIngressos.classList.remove("oculto");
    renderizarMeusIngressos();
  }
}

// ---------------------------------------------------------------------------
// 6. REGISTRO DE EVENTOS (addEventListener)
// ---------------------------------------------------------------------------

// Evento 'input' no campo de busca: filtra a cada caractere digitado
campoBusca.addEventListener("input", e => {
  textoBuscaAtual = e.target.value;

  // Exibe ou esconde o botão de limpar pesquisa
  if (textoBuscaAtual.length > 0) {
    btnLimparBusca.classList.remove("oculto");
  } else {
    btnLimparBusca.classList.add("oculto");
  }

  filtrarEventos();
});

// Evento 'click' no botão de limpar busca
btnLimparBusca.addEventListener("click", () => {
  campoBusca.value = "";
  textoBuscaAtual = "";
  btnLimparBusca.classList.add("oculto");
  campoBusca.focus();
  filtrarEventos();
});

// Eventos 'click' nos botões de filtro de categoria
botoesCategoria.forEach(botao => {
  botao.addEventListener("click", () => {
    // Remove a classe ativo de todos os botões e aplica no selecionado
    botoesCategoria.forEach(b => b.classList.remove("ativo"));
    botao.classList.add("ativo");

    categoriaAtiva = botao.dataset.categoria;
    filtrarEventos();
  });
});

// Navegação entre Abas
btnAbaProgramacao.addEventListener("click", () => alternarAba("programacao"));
btnAbaIngressos.addEventListener("click", () => alternarAba("ingressos"));
btnIrProgramacao.addEventListener("click", () => alternarAba("programacao"));

// Fechamento dos Modais
btnFecharModal.addEventListener("click", fecharModalInscricao);
btnCancelarInscricao.addEventListener("click", fecharModalInscricao);

// Fechar modal ao clicar fora da caixa (no fundo escurecido)
modalInscricao.addEventListener("click", e => {
  if (e.target === modalInscricao) {
    fecharModalInscricao();
  }
});

modalComprovante.addEventListener("click", e => {
  if (e.target === modalComprovante) {
    fecharComprovante();
  }
});

// Submissão do Formulário de Inscrição
formInscricao.addEventListener("submit", processarInscricao);

// Ações do Comprovante
btnConcluirComprovante.addEventListener("click", fecharComprovante);
btnImprimirComprovante.addEventListener("click", () => {
  window.print();
});

// Acessibilidade: fechar modais com a tecla 'Escape'
document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    fecharModalInscricao();
    fecharComprovante();
  }
});

// ---------------------------------------------------------------------------
// 7. INICIALIZAÇÃO DA APLICAÇÃO
// ---------------------------------------------------------------------------

// Primeira renderização ao carregar a página
filtrarEventos();
