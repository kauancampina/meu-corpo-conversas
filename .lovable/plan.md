# Instalar Microsoft Clarity no site

## O que será feito

Adicionar o código de rastreamento do Microsoft Clarity (ID `yd9fe64939`) ao `<head>` da página, ao lado dos scripts de tracking já existentes (UTMIFY, UTM e Meta Pixel), sem alterar nenhum comportamento atual do site.

## Por onde começar

1. Inserir o script do Clarity no array `scripts` do `head()` em `src/routes/__root.tsx`, mantendo os scripts UTMIFY/UTM existentes intactos.
2. Garantir que o script seja carregado de forma assíncrona e não bloqueante, conforme o snippet original.
3. Verificar se `window.clarity` fica disponível após o carregamento da página.
4. Rodar o build e validar que não há erros de console nem conflitos com Meta Pixel, UTMIFY ou UTM.
5. Testar responsividade básica (desktop e mobile) para confirmar que a adição do script não afeta layout ou performance.

## Detalhes técnicos

- Arquivo a ser alterado: `src/routes/__root.tsx`.
- O script será adicionado como um novo objeto no array `scripts` do `head()`, usando a chave `children` com o snippet fornecido.
- O snippet original já é auto-contido e insere dinamicamente a tag `<script src="https://www.clarity.ms/tag/yd9fe64939">`, portanto não é necessário alterar `links` nem adicionar `<script>` manualmente no JSX.
- O Meta Pixel continuará no início do `<body>`, dentro de `RootShell`, sem mudanças.
- Após a alteração, será executado `bun run build` e uma verificação via Playwright para confirmar:
  - Ausência de erros no console.
  - Presença de `window.clarity`.
  - Funcionamento normal dos botões de checkout e do modal de upsell.

## Resultado esperado

O site continua funcionando normalmente e o Clarity passa a registrar sessões sem interferir nos demais pixels/scripts.
