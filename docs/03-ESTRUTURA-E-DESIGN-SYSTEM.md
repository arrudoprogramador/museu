# 03. Estrutura Visual e Design System em CSS Puro

> **Projeto**: CCBB São Paulo — Padrão Visual, Tipografia e Micro-interações  
> **Tecnologia**: CSS3 Puro com Flexbox, CSS Grid, Variáveis Customizadas (`:root`) e Animações `@keyframes`  
> **Diretrizes de UI/UX**: Estética curatorial sóbria, tipografia editorial, ícones vetoriais SVG (sem emojis) e transições suaves.  

---

## 1. Filosofia Visual: Elegância Curatorial & Rigor Técnico

Para criar uma experiência superior à do site atual do CCBB SP, aplicamos princípios consagrados em centros culturais internacionais (como a *Tate Modern* e o *MoMA*):

1. **Eliminação de Ruído e Sem Emojis**:
   - Emojis comuns transmitem informalidade excessiva para uma instituição cultural histórica.
   - Foram substituídos por **ícones vetoriais inline em SVG puro** (linhas finas de $1.5\text{px}$ a $2\text{px}$, coordenadas limpas, renderização nítida em qualquer resolução e sem impacto de rede).
2. **Tipografia Pareada com Intencionalidade Cultural**:
   - **Títulos e Identidade (`Cinzel`)**: Fonte serifada clássica que remete às inscrições em pedra do edifício neoclássico de 1901.
   - **Interface e Leitura (`Plus Jakarta Sans`)**: Família sem serifa com proporções geométricas harmoniosas, perfeita para leitura rápida de datas, metadados e formulários.
3. **Cores Nobres e Contrastadas (WCAG AAA)**:
   - **Azul Banco do Brasil Profundo (`#001A42` e `#002D72`)**: Solidez, herança institucional e elegância.
   - **Dourado Patrimonial (`#B45309`)**: Destaque curatorial para espaços físicos e badges.
   - **Mármore / Off-White (`#F8F9FA` e `#FFFFFF`)**: Fundo claro e arejado que valoriza a fotografia das obras.
   - **Grafite Editorial (`#0F172A`)**: Contraste perfeito contra fundos claros.

---

## 2. Dicionário de Variáveis CSS (`:root`)

Todo o padrão visual fica centralizado no início de `style.css`:

```css
:root {
  /* Identidade Cromática CCBB */
  --azul-ccbb: #002D72;
  --azul-ccbb-profundo: #001A42;
  --azul-ccbb-claro: #0A4EB2;
  --azul-ccbb-suave: #EBF2FA;
  --dourado-patrimonial: #B45309;
  --dourado-suave: #FEF3C7;
  --amarelo-bb: #FEE500;

  /* Superfícies e Fundos */
  --fundo-pagina: #F8F9FA;
  --fundo-card: #FFFFFF;
  --fundo-elevado: #F1F5F9;
  --borda-sutil: #E2E8F0;
  --borda-media: #CBD5E1;

  /* Tipografia Estruturada */
  --fonte-display: 'Cinzel', Georgia, serif;
  --fonte-interface: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Cores de Texto */
  --texto-principal: #0F172A;
  --texto-secundario: #475569;
  --texto-terciario: #94A3B8;
  --texto-branco: #FFFFFF;

  /* Status de Capacidade */
  --status-disponivel: #059669;
  --status-baixo: #D97706;
  --status-esgotado: #DC2626;

  /* Sombras e Curvas de Movimento */
  --raio-card: 14px;
  --raio-botao: 8px;
  --sombra-card: 0 4px 6px -1px rgba(15, 23, 42, 0.05);
  --sombra-hover: 0 16px 24px -4px rgba(15, 23, 42, 0.08);
  --transicao-suave: cubic-bezier(0.16, 1, 0.3, 1);
  --tempo-transicao: 0.25s;
}
```

---

## 3. Animações e Micro-interações Leves

Seguindo as boas práticas da Vercel e da Anthropic (`web-design-guidelines` e `frontend-design`), as animações são **leves, discretas e com propósito funcional**:

### 3.1. Entrada dos Cards (`cardFadeIn`)
Ao carregar a página ou aplicar um filtro, os cards entram suavemente com elevação de $12\text{px}$ e fade de opacidade:
```css
@keyframes cardFadeIn {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### 3.2. Abertura do Modal (`modalSlideUp`)
A janela modal não aparece de forma abrupta; ela surge com desfoque de fundo (`backdrop-filter: blur(5px)`) e uma leve elevação com escala:
```css
@keyframes modalSlideUp {
  from {
    opacity: 0;
    transform: translateY(16px) scale(0.97);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
```

### 3.3. Indicador de Vagas Pulsante (`pulseSuave`)
A bolinha verde de vagas disponíveis respira sutilmente a cada 2 segundos, sinalizando em tempo real a atividade do museu:
```css
@keyframes pulseSuave {
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.25); opacity: 0.7; }
  100% { transform: scale(1); opacity: 1; }
}
```

### 3.4. Respeito à Acessibilidade de Movimento (`prefers-reduced-motion`)
Para usuários com sensibilidade vestibular que configuraram o sistema operacional para reduzir movimentos, as animações são desativadas automaticamente:
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```
