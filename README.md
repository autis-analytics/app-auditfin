# Portal de Auditoria Financeira — proposta executiva

Versão de avaliação na branch `design/portal-institucional-20261019`, baseada em `b86f150` da `origin/main`. Sessão: `auditfin-redesign-20261019`; responsável: Codex / Arthur Autis. Desenvolvimento em worktree própria, com estado e navegador em `.preview-session/` (ignorado pelo Git). Publicação exclusivamente como Preview pela integração existente do repositório com o projeto `app-auditfin`, equipe `autis-analytics-projects`.

## Direção de UI/UX

Página única com apresentação de relatório corporativo. A paleta recupera o grafite `#2E2E38` e o petróleo `#2E525A` do projeto original, sobre branco e cinza claro. Source Serif 4 nos títulos principais e Source Sans 3 nos textos e controles. Cabeçalho compacto, capa factual, fotografia panorâmica do acervo, metadados do Acordo e índice visível das três frentes. PDF identificado por título, data e tamanho. A marca EY aparece somente no rodapé. Menu móvel, foco de teclado, alto contraste persistente e respeito à preferência de movimento reduzido.

A busca compacta acompanha o início dos capítulos e indexa as seis seções por título, descrição e assuntos relacionados; não pesquisa o conteúdo dos PDFs nem os dados externos do Power BI. Tem suporte a termos sem acentos, estado sem resultados e navegação de teclado até a seção encontrada. Fontes distribuídas pelo Next.js com `next/font`, sem requisições de fontes a terceiros na visita.

Referências estudadas:

- [BCG](https://www.bcg.com/): referência visual de tipografia editorial em contexto corporativo; não foram adotadas sua marca nem suas fontes proprietárias.
- [Brookfield Corporation / RI](https://bn.brookfield.com/) e [centro de documentos](https://bn.brookfield.com/reports-filings/investor-documents-center): referências de hierarquia entre apresentação institucional e consulta documental.
- [BNDES / Relatório Anual Integrado 2025](https://www.bndes.gov.br/hotsites/Relatorio_Anual_2025/): organização de relato, contexto e prestação de contas.
- [Carbon / IBM](https://github.com/carbon-design-system/carbon): referência de grid, controles e legibilidade em sistemas empresariais. Implementação mantida na estrutura Next.js existente, sem instalar Carbon.
- [Source Serif / Adobe](https://github.com/adobe-fonts/source-serif) e [Source Sans / Adobe](https://github.com/adobe-fonts/source-sans): par tipográfico com funções separadas para títulos editoriais e leitura de documentos.
- [Anti-slop design](https://github.com/Cuuper22/anti-slop-design) e [Unslop UI / catálogo](https://github.com/claudiusararu/unslop-ui-skill/blob/main/TELLS.md): revisão de padrões genéricos, repetição visual, contraste e linguagem. Consultados como referências; nenhum código ou pacote desses projetos foi incorporado.

A identidade é própria do portal. Textos jurídicos, ressalvas, nota de rodapé, oito perguntas frequentes, PDF e seis fontes Power BI foram preservados. Os painéis passam a carregar mediante solicitação e oferecem abertura externa. A lista de documentos continua respeitando `public/config.json` (`showDocuments: false`); documentos de teste não foram expostos. O português passa a ser o idioma padrão; as rotas de idioma existentes foram mantidas.

## Validação da proposta

Build de produção (`npm run build`), TypeScript, ESLint dos arquivos alterados e `git diff --check`. Inspeção visual em Chromium, desktop e celular; checagem de overflow entre 320 e 1920 px; menu móvel com transferência de foco; accordions; links internos; preferência de alto contraste; ativação do iframe Power BI com foco no painel. Axe WCAG 2 A/AA e 2.1 AA sem violações automáticas nas verificações desktop e móvel. Isso não substitui uma auditoria manual completa com tecnologias assistivas nem garante disponibilidade dos dados externos do Power BI.

O build ainda informa um aviso preexistente de variável não utilizada em `documents-panel.tsx`. A prévia recebe `noindex` no ambiente Vercel Preview. O `vercel.json` foi corrigido para Next.js, removendo o redirecionamento de todas as requisições para um `index.html` inexistente.

## Desenvolvimento

Aplicação [Next.js](https://nextjs.org) com App Router, TypeScript e Tailwind CSS.

## Getting Started

First, run the development server:

```bash.m
npm run dev.
# or
yarn dev 
# or
pnpm devd
# or
bun dev
```.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
