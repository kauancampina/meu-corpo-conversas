# Reposicionar a seção de oferta para logo após o hero e remover balão do produto

## Objetivo
Mover o bloco de planos (Kit Básico R$9,99 e Kit Completo R$19,99) para imediatamente após a seção hero, sem redesenhar nada.

## O que será alterado
- Em `src/routes/index.tsx`, a `<section className="pricing section-pad" id="oferta">` (linhas ~470-476) será recortada e colada logo após o fechamento da `<section className="hero" id="inicio">` (após a linha ~410).
- Remover o balão flutuante `<div className="floating-note">` que aparece sobre a imagem do produto no hero, deixando apenas a foto do produto.
- A ordem resultante será:
  1. Countdown (fixo no topo)
  2. Hero
  3. Oferta (id="oferta")
  4. Card-marquee (esteira de cartas)
  5. Seção de dor
  6. "TUDO EM UM SÓ MATERIAL"
  7. "FEITO PARA QUEM CUIDA"
  8. Restante da página

## O que será preservado
- Copy, cores, tipografia, imagens, animações e estilos atuais.
- O `id="oferta"` na seção de planos.
- O botão "Quero conversar com segurança" continua apontando para `#oferta`.
- O CTA do Kit Completo permanece como tag `<a>` com `href={CHECKOUT_KIT_COMPLETO}` literal, para não quebrar o rastreamento da UTMify.
- O modal de upsell e o botão do Kit Básico não são alterados.
- Nenhuma alteração em `src/routes/__root.tsx` (scripts do head permanecem na mesma ordem).

## Validação
- `bun run build` deve passar.
- Verificar no preview desktop e mobile se a oferta aparece logo abaixo do hero e acima da esteira de cartas.
- Confirmar que o scroll para `#oferta` ainda funciona e que os links de checkout continuam sendo tags `<a>`.
- Confirmar que o balão "PDF + cartas / Pronto para imprimir" não aparece mais sobre a imagem do produto.
