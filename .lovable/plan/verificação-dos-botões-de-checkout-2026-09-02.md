# Verificação dos botões de checkout

## Resultado da verificação

Os botões dos planos já estão apontando corretamente para o checkout — a atualização foi aplicada com sucesso. Nenhuma alteração de código é necessária.

## O que foi conferido

1. **Código** (`src/routes/index.tsx`):
   - `CHECKOUT_KIT_BASICO = https://pay.cakto.com.br/8hy65w5_1079712`
   - `CHECKOUT_KIT_COMPLETO = https://pay.cakto.com.br/3277d5h_1080414`
   - Ambos usados via `OfferButton href={...}` nos cards dos planos, abrindo em nova aba com `rel="noopener noreferrer"`.

2. **Preview ao vivo** (teste automatizado em `http://localhost:8080/#oferta`):
   - Botão "Quero o Kit Básico" → `https://pay.cakto.com.br/8hy65w5_1079712`
   - Botão "Quero o Kit Completo" → `https://pay.cakto.com.br/3277d5h_1080414`

## Próximo passo

Nenhum. Se desejar, os links podem ser trocados por outras URLs de checkout no futuro — basta informar os novos endereços.
