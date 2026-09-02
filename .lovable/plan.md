# Remover fundo branco da foto do produto

## Objetivo
Deixar a foto principal do produto (mockup do kit "Roda de Conversa: Meu Corpo é Meu") com fundo transparente, mantendo a qualidade visual da landing page.

## Passos

1. **Editar a imagem**
   - Usar a imagem atual do asset `src/assets/foto-do-produto.png.asset.json`.
   - Aplicar remoção do fundo branco e exportar como PNG transparente.

2. **Atualizar o asset**
   - Fazer upload do novo PNG transparente via `lovable-assets create`.
   - Substituir o conteúdo de `src/assets/foto-do-produto.png.asset.json` pelo novo ponteiro gerado.

3. **Verificar**
   - Conferir no preview local que o produto aparece com fundo transparente sobre o fundo creme/roxo da landing page.
   - Garantir que não haja bordas brancas residuais ao redor do mockup.

## Resultado esperado
A foto do produto no hero e demais seções da landing page passa a ter fundo transparente, integrando-se melhor ao fundo colorido da página sem aquele "quadrado branco".
