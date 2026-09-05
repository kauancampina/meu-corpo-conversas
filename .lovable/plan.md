# Confetes no modal de upsell + botão de recusa em destaque normal

## Objetivo
Quando o cliente clicar em "Quero o Kit Básico" e o modal de upsell abrir, disparar um efeito de estouro de confetes celebrando a condição especial, com uma mensagem de promoção. O botão de recusa ("continuar com o Kit Básico") deixa de ser um link discreto e vira um botão de tamanho normal, claro e fácil de clicar — sem esconder a opção.

## O que será implementado

### 1. Efeito de confetes
- Ao abrir o modal, um estouro de confetes parte do centro/top da tela, nas cores da identidade do site (lilás/roxo, coral, amarelo, turquesa).
- Implementação leve, em canvas ou CSS puro (sem dependência pesada), disparada apenas na abertura do modal e limpa ao fechar.
- Respeita `prefers-reduced-motion`: com movimento reduzido, nenhum confete é exibido.
- Não interfere nos cliques: a camada de confetes tem `pointer-events: none` e some sozinha após a animação.

### 2. Mensagem promocional no modal
- Abaixo do título "ESPERA! ANTES DE ESCOLHER O KIT BÁSICO...", um selo/faixa de destaque com a copy da promoção relâmpago:
  - "OFERTA RELÂMPAGO: fechando sua compra agora, você garante todos os materiais do site pela METADE DO PREÇO."
- Estilo chamativo (faixa amarela/coral, em sintonia com o aviso de "Condição especial por tempo limitado"), sem afirmar falsa escassez de estoque.

### 3. Botão de recusa em tamanho normal
- A opção "Não, prefiro continuar com o Kit Básico por R$9,99" passa de link discreto para um botão de verdade, logo abaixo do CTA principal:
  - Mesma largura do CTA principal, altura touch-friendly (44px+), estilo outline/secundário nas cores do site.
  - Continua visualmente secundário ao botão do Kit Completo, mas sem ser pequeno ou escondido.
  - Comportamento inalterado: fecha o modal e abre o checkout do Kit Básico (`https://pay.cakto.com.br/8hy65w5_1079712`).

### 4. O que NÃO muda
- Links de checkout da Cakto (básico e completo) permanecem os mesmos.
- CTA principal "QUERO O KIT COMPLETO POR R$19,99" continua sendo o elemento mais chamativo.
- X do canto continua fechando e indo ao checkout básico; clique fora/Esc apenas fecham.
- Restante da página intocado.

## Arquivos alterados
- `src/routes/index.tsx` — componente de confetes + disparo na abertura do modal + novo botão de recusa + faixa promocional.
- `src/styles.css` — estilos do botão de recusa, faixa promocional e animação dos confetes.

## Validação
- Build + Playwright em desktop (1280px) e mobile (390px): confetes aparecem ao abrir, não bloqueiam cliques, botão de recusa visível e funcional indo ao checkout básico, CTA principal indo ao checkout completo, sem erros de console.
