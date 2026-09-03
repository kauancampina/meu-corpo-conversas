# Modal de Upsell ao clicar em "Quero o Kit Básico"

## Objetivo
Interceptar o clique no botão do Kit Básico (R$ 9,99) e exibir um modal de upsell premium, mobile-first, oferecendo o Kit Completo (R$ 19,99) por apenas R$ 10 a mais — sem bloquear o usuário e sem alterar os links atuais da Cakto.

## O que será implementado

### 1. Comportamento do botão
- O botão "Quero o Kit Básico" (na seção de planos) deixa de ser um link direto e passa a abrir o modal de upsell.
- Os links de checkout da Cakto permanecem exatamente os mesmos:
  - Kit Básico: `https://pay.cakto.com.br/8hy65w5_1079712`
  - Kit Completo: `https://pay.cakto.com.br/3277d5h_1080414`
- Nenhuma outra parte da página muda.

### 2. Estrutura do modal (na ordem exata)
1. Título: **"ESPERA! ANTES DE ESCOLHER O KIT BÁSICO..."**
2. Subtítulo: "Por apenas R$10 a mais, você pode levar o Kit Completo e ter acesso a muito mais materiais para trabalhar com seu filho."
3. Comparação visual lado a lado (empilhada no mobile):
   - **KIT BÁSICO — R$9,99**: Roda de Conversa "Meu Corpo é Meu"; Material principal; Cartas e perguntas. (visual discreto)
   - **KIT COMPLETO — R$19,99**: Tudo do Kit Básico; 500 Atividades Pedagógicas; Cartilha Educativa; Moldes de Brincadeiras Sensoriais; Materiais organizados; Bônus exclusivos. (muito mais destacado, com selo "MAIS ESCOLHIDO" e preço grande)
4. Seção de bônus: "Você também recebe 3 bônus exclusivos:" com imagens das cartas/cartilhas já usadas na página (carta-1 a carta-5 / foto do produto):
   1. Cartaz da Rede de Confiança
   2. Semáforo do Toque
   3. Mini Guia: "E agora, o que eu digo?"
   — com selo "GRÁTIS no Kit Completo".
5. Frase de fechamento: "Por apenas R$10 a mais, você leva muito mais conteúdo para colocar esse aprendizado em prática."
6. Aviso: "CONDIÇÃO ESPECIAL POR TEMPO LIMITADO" (sem falsas urgências de estoque).
7. CTA principal (mais chamativo do modal): **"QUERO O KIT COMPLETO POR R$19,99"** → checkout do Kit Completo (nova aba).
8. Opção secundária e discreta: **"Não, prefiro continuar com o Kit Básico por R$9,99"** → fecha o modal e redireciona ao checkout do Kit Básico.

### 3. Design
- Identidade visual atual do site: creme, lilás/roxo, coral, amarelo, turquesa; tipografia Inter; bordas orgânicas arredondadas.
- Overlay escuro atrás do modal.
- Kit Completo com fundo destacado (lilás/coral), selo "MAIS ESCOLHIDO", preço R$19,99 grande.
- Animação de entrada suave (fade + scale), respeitando `prefers-reduced-motion`.
- Mobile-first: cards de comparação empilham, scroll interno do modal, botões grandes e touch-friendly, selo de 44px+.
- Botão X no canto superior direito fecha o modal **e segue para o checkout do Kit Básico** (como pedido).
- Imagens reais já presentes na página (foto do produto e cartas) ilustram o modal.

### 4. Fluxos garantidos
- CTA principal → `CHECKOUT_KIT_COMPLETO` (nova aba, modal fecha).
- Link secundário → fecha modal e abre `CHECKOUT_KIT_BASICO`.
- X do canto → fecha modal e abre `CHECKOUT_KIT_BASICO`.
- Clique fora / tecla Esc → apenas fecha o modal (não redireciona, evitando comportamento agressivo acidental).
- Botão "Quero o Kit Completo" da página continua indo direto ao checkout.

## Arquivos alterados
- `src/routes/index.tsx` — novo componente de modal de upsell + estado de abertura no clique do botão do Kit Básico.
- `src/styles.css` — estilos do modal, comparação, bônus, animações e responsividade.

## Validação
- Build + Playwright em desktop (1280px) e mobile (390px): abertura do modal, dois redirecionamentos corretos, fechamento pelo X seguindo ao checkout básico, e layout sem overflow no celular.
