# 01. Visão Geral e Diagnóstico Comparativo: CCBB São Paulo

> **Projeto**: Redesign Institucional e Cadastro em Eventos Culturais  
> **Referência Oficial**: [ccbb.com.br/sao-paulo](https://ccbb.com.br/sao-paulo)  
> **Nível**: FATEC ADS — 2º Semestre (Fundamentos Puros de Desenvolvimento Web)  

---

## 1. O Objeto de Estudo: CCBB São Paulo

O **Centro Cultural Banco do Brasil de São Paulo (CCBB SP)** situa-se na Rua Álvares Penteado, 112, no Centro Histórico de São Paulo. É sediado em um imponente prédio neoclássico de 1901 que reúne:
- Grande Rotunda central com iluminação natural zenital;
- Galerias de artes visuais espalhadas por vários andares;
- Sala de Cinema histórica no 1º andar;
- Sala de Teatro intimista;
- Antigo cofre no subsolo preservado para exposições especiais;
- Atividades do CCBB Educativo (oficinas e visitas mediadas).

---

## 2. Diagnóstico Crítico do Site Atual ([ccbb.com.br/sao-paulo](https://ccbb.com.br/sao-paulo))

Ao analisar a experiência de um usuário comum no portal oficial, identificamos os seguintes problemas graves:

1. **Poluição Visual e Sobrecarga de Banners**:
   - O site mistura comunicações institucionais do banco com atividades culturais sem separação clara de hierarquia.
   - Banners gigantes empurram o conteúdo útil (o que está passando hoje, horários, preços) para fora da primeira dobra da tela.

2. **Dificuldade para Localizar Eventos do Dia**:
   - Falta uma visualização intuitiva por categorias claras (*Exposições, Cinema, Teatro, Educativo*).
   - O usuário precisa clicar em várias páginas para descobrir se um evento ainda tem ingressos disponíveis.

3. **Fricção no Cadastro de Ingressos**:
   - A maioria dos eventos do CCBB é gratuita, mas o site força o visitante a navegar para portais externos de bilheteria ou preencher formulários longos e confusos.
   - Não há visualização imediata da quantidade de vagas restantes.

4. **Experiência em Dispositivos Móveis**:
   - A navegação em telas menores possui menus difíceis de tocar e textos com baixo contraste, complicando a vida de turistas ou pessoas que estão na porta do museu tentando entrar.

---

## 3. A Proposta do Nosso Projeto

Nossa proposta foi reconstruir o portal com foco em **clareza, sofisticação e facilidade de uso**, provando que é possível criar uma experiência de nível profissional utilizando apenas os recursos fundamentais de **HTML5, CSS3 e JavaScript puro**:

```
┌────────────────────────────────────────────────────────────────────────┐
│                        NOSSA PROPOSTA DE VALOR                         │
├────────────────────────────────────────────────────────────────────────┤
│ 1. Estética Curatorial Clean                                           │
│    Uso harmônico de espaço em branco, tipografia elegante e cores      │
│    inspiradas na história do edifício e do Banco do Brasil.            │
├────────────────────────────────────────────────────────────────────────┤
│ 2. Filtragem Instantânea em Tempo Real                                 │
│    O usuário clica nos botões de categoria ou digita no campo de busca │
│    e a lista se atualiza na mesma hora, sem recarregar a página.       │
├────────────────────────────────────────────────────────────────────────┤
│ 3. Cadastro Rápido de Pessoas em Eventos                               │
│    Um modal moderno onde o visitante escolhe o horário, preenche seus  │
│    dados em poucos segundos e recebe um comprovante com código e QR.   │
├────────────────────────────────────────────────────────────────────────┤
│ 4. Controle Dinâmico de Lotação                                        │
│    Ao confirmar uma inscrição, as vagas disponíveis são recalculadas   │
│    e atualizadas na tela instantaneamente.                             │
└────────────────────────────────────────────────────────────────────────┘
```
